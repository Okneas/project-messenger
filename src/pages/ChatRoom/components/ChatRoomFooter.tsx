import { Box } from "@mui/material";
import { ChatFooterWrapper, ChatInputTextBox } from "../style";
import { AddIcon } from "src/svg/AddIcon";
import { SendMessageIcon } from "src/svg/SendMessageIcon";
import { Socket } from "socket.io-client";
import { FC, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { IUser } from "src/interfaces/interfaces";
import { PostNewMessage } from "src/api/postNewMessage";

interface Props {
  socket: Socket | null;
}

export const ChatRoomFooter: FC<Props> = ({ socket }) => {
  const chat_id = useLocation().pathname.split("/")[2];
  const [user, setUser] = useState<IUser | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const localUserData = localStorage.getItem("user");
    if (localUserData) {
      setUser(JSON.parse(localUserData));
    }
  }, []);

  const handleSedMessage = () => {
    const data = {
      chat_id: chat_id + "chat",
      message: {
        id: "",
        chat_id: chat_id,
        sender_id: user?.id,
        sender_name: user?.name,
        text: message,
      },
    };
    socket?.emit("message", data);
    (async () => {
      await PostNewMessage(chat_id, user?.name, user?.id, message);
    })();
    setMessage("");
  };

  return (
    <Box component="footer" position="fixed">
      <ChatFooterWrapper
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        display="flex"
      >
        <Box ml={2}>
          <AddIcon />
        </Box>
        <ChatInputTextBox
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <Box onClick={handleSedMessage} mr={2}>
          <SendMessageIcon />
        </Box>
      </ChatFooterWrapper>
    </Box>
  );
};
