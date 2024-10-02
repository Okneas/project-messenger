import { Box, Grid2, Typography } from "@mui/material";
import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Socket } from "socket.io-client";
import { ReturnIcon } from "src/svg/ReturnIcon";

interface IChatRoomHeaderProps {
  userName?: string;
  socket: Socket | null;
}

export const ChatRoomHeader: FC<IChatRoomHeaderProps> = ({
  userName,
  socket,
}) => {
  const nav = useNavigate();
  const location = useLocation().pathname.split("/")[2];
  const handleClick = () => {
    socket?.emit("leaveChatRoom", location);
    nav("/chats");
  };
  return (
    <Grid2
      container
      width="100%"
      height="11%"
      bgcolor="white"
      position="fixed"
      alignItems="center"
    >
      <Box width="24px" height="24px" ml={2} mt={2} onClick={handleClick}>
        <ReturnIcon />
      </Box>
      <Typography variant="SubHeading1" mt={1.9} ml={1}>
        {userName}
      </Typography>
    </Grid2>
  );
};
