import { Box, Grid2 } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { ChatRoomHeader } from "./components/ChatRoomHeader";
import { ChatRoomFooter } from "./components/ChatRoomFooter";
import { useLocation } from "react-router-dom";
import { IMessage, IUser } from "src/interfaces/interfaces";
import doRequest from "src/hooks/doRequest";
import { getAllMesFromChat } from "src/api/getAllMesFromChat";
import { MessageComponent } from "./components/MessageComponent";

interface Props {
  socket: Socket | null;
}

export const ChatRoom: FC<Props> = ({ socket }) => {
  const chatId = useLocation().pathname.split("/")[2];
  const [messages, setMessages] = useState<Array<IMessage>>([]);
  const [user, setUser] = useState<IUser | null>(null);
  useEffect(() => {
    if(socket){
      socket.emit("joinChatRoom", chatId);
    }
    const localUserData = localStorage.getItem("user");
    if (localUserData) {
      setUser(JSON.parse(localUserData));
    }
    (async () => {
      const result = (
        await doRequest<Array<IMessage> | null>(getAllMesFromChat, chatId)
      ).data;
      if (result) {
        setMessages(result);
      }
    })();
  }, [socket, chatId]);
  useEffect(() => { 
    socket?.on("messageResponse", (message) => {
        setMessages([...messages, message])
      }
    );
  }, [socket, messages]);
  return (
    <Grid2
      container
      width="100vw"
      height="100vh"
      bgcolor="#FCFCFC"
      flexDirection="column"
    >
      <ChatRoomHeader socket={socket} userName={""} />
      <Box
        component="div"
        display="flex"
        flexDirection="column"
        sx={{ overflow: "auto" }}
        marginTop="25%"
        maxHeight="630px"
      >
        {messages?.map((item, id) => {
          return (
            <MessageComponent
              key={id}
              text={item.text}
              my={item.sender_id === user?.id}
            />
          );
        })}
      </Box>
      <ChatRoomFooter socket={socket} />
    </Grid2>
  );
};
