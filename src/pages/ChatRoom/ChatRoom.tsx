import { Box, Grid2 } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { ChatRoomHeader } from "./components/ChatRoomHeader";
import { ChatRoomFooter } from "./components/ChatRoomFooter";
import { useLocation } from "react-router-dom";
import { IChat, IMessage, IUser } from "src/interfaces/interfaces";
import doRequest from "src/hooks/doRequest";
import { getAllMesFromChat } from "src/api/getAllMesFromChat";
import { MessageComponent } from "./components/MessageComponent";
import { getChatById } from "src/api/getChatById";

interface Props {
  socket: Socket | null;
}

export const ChatRoom: FC<Props> = ({ socket }) => {
  const chatId = useLocation().pathname.split("/")[2];
  const [messages, setMessages] = useState<Array<IMessage>>([]);
  const [user, setUser] = useState<IUser | null>(null);
  const [interlocutorId, setInterlocutorId] = useState<Array<string>>([]);
  const [isFetching, setIsFentching] = useState(true);
  const [chatName, setChatName] = useState("");
  useEffect(() => {
    if (socket) {
      socket.emit("joinChatRoom", chatId);
    }
    const localUserData = localStorage.getItem("user");
    if (localUserData) {
      setUser(JSON.parse(localUserData));
      const tempUser = JSON.parse(localUserData);
      (async () => {
        const result = (
          await doRequest<IChat | null>(getChatById, {
            id: chatId,
            userId: tempUser.id,
          })
        ).data;
        if (result) {
          setChatName(result.chat_name);
          setInterlocutorId([...JSON.parse(result.user_ids)]);
        }
      })();
    }
    (async () => {
      const result = (
        await doRequest<Array<IMessage> | null>(getAllMesFromChat, chatId)
      ).data;
      if (result) {
        setMessages(result);
      }
    })();
    setIsFentching(false);
  }, [socket, chatId]);
  useEffect(() => {
    socket?.on("messageResponse", (message) => {
      setMessages([...messages, message]);
    });
  }, [socket, messages]);
  return (
    <Grid2
      container
      width="100vw"
      height="100vh"
      bgcolor="#FCFCFC"
      flexDirection="column"
    >
      <ChatRoomHeader socket={socket} userName={chatName} />
      <Box
        component="div"
        display="flex"
        flexDirection="column"
        sx={{ overflow: "auto" }}
        marginTop="25%"
        maxHeight="630px"
        padding={1}
      >
        {!isFetching
          ? messages?.map((item, id) => {
              if (item.resources !== null) {
                if (item.resources[0] instanceof ArrayBuffer) {
                  console.log(item);
                  const blob = new Blob([item.resources[0]], {
                    type: "application/octet-stream",
                  });
                  return (
                    <MessageComponent
                      key={id}
                      text={item.text}
                      my={item.sender_id === user?.id}
                      blob={blob}
                    />
                  );
                }
                return (
                  <MessageComponent
                    key={id}
                    text={item.text}
                    my={item.sender_id === user?.id}
                    resources={item.resources.length !== 0 ? JSON.parse(item?.resources) : null}
                  />
                );
              }
              console.log(item);
              return (
                <MessageComponent
                  key={id}
                  text={item.text}
                  my={item.sender_id === user?.id}
                />
              );
            })
          : null}
      </Box>
      <ChatRoomFooter userIds={interlocutorId} socket={socket} />
    </Grid2>
  );
};
