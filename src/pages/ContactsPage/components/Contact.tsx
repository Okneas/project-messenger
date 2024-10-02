import { Box, Container, Divider, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface IContactProps {
  chatRoomId: number;
}

export const Contact: FC<IContactProps> = ({ chatRoomId }) => {
  const nav = useNavigate();
  const handleClick = () => {
    nav(`/chatRoom/${chatRoomId}`);
  };
  return (
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
          sx={{
            width: "48px",
            height: "48px",
            minWidth: "48px",
            borderRadius: "16px",
            backgroundColor: "gray",
          }}
        ></Box>
        <Container sx={{ display: "flex", flexDirection: "Column" }}>
          <Typography variant="BodyText1">Name</Typography>
          <Typography>Заходил недавно</Typography>
        </Container>
      </Container>
      <Divider
        variant="middle"
        component="div"
        sx={{ width: "90%", marginTop: "auto" }}
      />
    </Box>
  );
};
