import {
  Box,
  Button,
  Container,
  Divider,
  InputAdornment,
  Typography,
} from "@mui/material";
import { ChatsPageWrapper, Field } from "./style";
import { CheckedIcon } from "src/svg/CheckedIcon";
import ContactStory from "./components/ContactStory";
import { SearchIcon } from "src/svg/SearchIcon";
import { ChatIcon } from "src/svg/ChatIcon";
import UserStory from "./components/UserStory";
import { FC, useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { IUser } from "src/interfaces/interfaces";
import { Contact } from "../ContactsPage/components/Contact";

interface Props {
  socket: Socket | null;
}

export const ChatsPage: FC<Props> = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const localUserData = localStorage.getItem("user");
  useEffect(() => {
    if (localUserData) {
      const tempUser = JSON.parse(localUserData);
      if (tempUser.chats) {
        tempUser.chats = JSON.parse(tempUser.chats);
      }
      setUser(tempUser);
    }
  }, [localUserData]);
  
  return (
    <ChatsPageWrapper>
      <Box
        component="header"
        pt={5}
        pb={1}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Container>
          <Typography ml={4} variant="SubHeading1">
            Чаты
          </Typography>
        </Container>
        <Container sx={{ width: "60%" }}>
          <Button>
            <ChatIcon></ChatIcon>
          </Button>
          <Button>
            <CheckedIcon></CheckedIcon>
          </Button>
        </Container>
      </Box>
      <Box display="flex" flexDirection="row" sx={{ ml: 4 }}>
        <UserStory></UserStory>
        <ContactStory></ContactStory>
        <ContactStory></ContactStory>
      </Box>
      <Divider></Divider>
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        sx={{ mt: 2 }}
      >
        <Field
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
          sx={{ background: "#F7F7FC", borderRadius: "4px", width: "90%" }}
          label="Поиск"
        ></Field>
        {user?.chats.map((item, id) => {
          return <Contact key={id} chatRoomId={item}></Contact>;
        })}
      </Box>
    </ChatsPageWrapper>
  );
};
