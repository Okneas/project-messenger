import { Box } from "@mui/material";
import {
  ChatFooterWrapper,
  ChatInputTextBox,
  ImagePreviewContainer,
} from "../style";
import { AddIcon } from "src/svg/AddIcon";
import { SendMessageIcon } from "src/svg/SendMessageIcon";
import { Socket } from "socket.io-client";
import { FC, useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import { IUser } from "src/interfaces/interfaces";
import { PostNewMessage } from "src/api/postNewMessage";
import { ImagePreview } from "./ImagePreview";

interface Props {
  socket: Socket | null;
}

export const ChatRoomFooter: FC<Props> = ({ socket }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const chat_id = useLocation().pathname.split("/")[2];
  const [user, setUser] = useState<IUser | null>(null);
  const [message, setMessage] = useState("");
  const [selectedImg, setSelectedImg] = useState<Blob[] | null>(null);

  useEffect(() => {
    const localUserData = localStorage.getItem("user");
    if (localUserData) {
      setUser(JSON.parse(localUserData));
    }
  }, []);

  const handleDelete = (img: Blob) => {
    let temp: Blob[] = [];
    if (selectedImg !== null) {
      temp = [...(selectedImg as File[])];
    }
    if (temp !== null) {
      const imgInd = temp.indexOf(img);
      temp.splice(imgInd, 1);
      if (inputRef.current?.files) {
        Array.from(inputRef.current?.files).splice(imgInd, 1);
      }
    }
    console.log(temp);
    setSelectedImg(temp);
  };

  const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    let temp: File[] = [];
    if (selectedImg !== null) {
      temp = [...(selectedImg as File[])];
    }
    if (e.target.files !== null) {
      Array.from(e.target.files).forEach((value: File) => {
        temp?.push(value);
      });
    }
    setSelectedImg(temp);
  };

  const handleAddButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (!inputRef || !inputRef.current) return;

    inputRef.current.click();
  };

  const handleSendMessage = () => {
    setSelectedImg([]);
    if (inputRef.current?.files) {
      Array.from(inputRef.current?.files).splice(0, inputRef.current.files.length);
    }
    const data = {
      chat_id: chat_id + "chat",
      message: {
        id: "",
        chat_id: chat_id,
        sender_id: user?.id,
        sender_name: user?.name,
        text: message,
        resources: selectedImg,
      },
    };
    socket?.emit('sendNotification', message);
    socket?.emit("message", data);
    (async () => {
      await PostNewMessage(chat_id, user?.name, user?.id, message, selectedImg);
    })();
    setMessage("");
  };

  return (
    <Box component="footer" position="fixed">
      <ImagePreviewContainer>
        {selectedImg !== null
          ? selectedImg.map((value: Blob, ind: number) => {
              return (
                <ImagePreview onDelete={handleDelete} img={value} key={ind} />
              );
            })
          : null}
      </ImagePreviewContainer>
      <ChatFooterWrapper
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
        display="flex"
      >
        <Box
          ml={2}
          component="button"
          onClick={handleAddButtonClick}
          sx={{ bgcolor: "rgba(0,0,0,0)", border: "rgba(0,0,0,0)" }}
        >
          <AddIcon />
        </Box>
        <input type="file" hidden ref={inputRef} onChange={handleChangeFile} />
        <ChatInputTextBox
          value={message}
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <Box onClick={handleSendMessage} mr={2}>
          <SendMessageIcon />
        </Box>
      </ChatFooterWrapper>
    </Box>
  );
};
