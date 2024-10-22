import { Box, Container, Divider, Grow, Typography } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getChatById } from "src/api/getChatById";
import { getProfileImg } from "src/api/getProfileImg";
import doRequest from "src/hooks/doRequest";
import { IChat } from "src/interfaces/interfaces";

interface IContactProps {
  chatRoomId: number;
}

export const Chat: FC<IContactProps> = ({ chatRoomId }) => {
  const nav = useNavigate();
  const [chatData, setChatData] = useState<IChat | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [chatImgLocalURL, setChatImgLocalURL] = useState<string>("");
  const handleClick = () => {
    nav(`/chatRoom/${chatRoomId}`);
  };
  useEffect(() => {
    if(chatData?.chat_picture) {
      (async () => {
        const result = (await doRequest<Blob | null>(getProfileImg, chatData?.chat_picture))
          .data;
        if (result) {
          setChatImgLocalURL(URL.createObjectURL(result));
          setIsLoading(false);
        }
      })();
    }
  }, [chatData]);
  useEffect(() => {
    const localUserData = localStorage.getItem("user");
    if (localUserData) {
      const tempUser = JSON.parse(localUserData);
      if (tempUser.id) {
        (async () => {
          const result = (
            await doRequest<IChat | null>(getChatById, {id: chatRoomId, userId: tempUser.id})
          ).data;
          if (result) {
              setChatData(result);
          }
        })();
      }
    }
  }, []);
  return (
    <Grow in={!isLoading}>
      <Box
        onClick={handleClick}
        sx={{
          display: "flex",
          flexDirection: "column",
          marginLeft: "20px",
          height: "68px",
          width: "90%",
          marginTop: 2,
        }}
      >
        <Container sx={{ display: "flex", flexDirection: "row" }}>
          <Box
            component="img"
            src={chatImgLocalURL}
            sx={{
              width: "48px",
              height: "48px",
              minWidth: "48px",
              borderRadius: "16px",
              backgroundColor: "gray",
            }}
          ></Box>
          <Container sx={{ display: "flex", flexDirection: "Column" }}>
            <Typography variant="BodyText1">{chatData?.chat_name}</Typography>
            <Typography>Заходил недавно</Typography>
          </Container>
        </Container>
        <Divider
          variant="middle"
          component="div"
          sx={{ width: "90%", marginTop: "auto" }}
        />
      </Box>
    </Grow>
  );
};
