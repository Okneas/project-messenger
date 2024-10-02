import { Box, Button, Grid2, Typography } from "@mui/material";
import { ContactPageWrapper } from "./style";
import { AddIcon } from "src/svg/AddIcon";
import { SearchIcon } from "src/svg/SearchIcon";
import { Field } from "./style";
import InputAdornment from "@mui/material/InputAdornment";
import { useEffect, useState } from "react";
import { AddContactDialog } from "./components/AddContactDialog";
import { Contact } from "./components/Contact";
import { IUser } from "src/interfaces/interfaces";

export const ContactPage = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const localUserData = localStorage.getItem("user");
  useEffect(() => {
    if (localUserData) {
      const tempUser = JSON.parse(localUserData);
      if (tempUser.contacts) {
        tempUser.contacts = JSON.parse(tempUser.contacts);
      }
      setUser(tempUser);
    }
  }, [localUserData]);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <ContactPageWrapper>
      <AddContactDialog onClose={handleClose} open={open} />
      <Box
        component="header"
        pt={5}
        pb={1}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
      >
        <Typography ml={4} variant="SubHeading1">
          Контакты
        </Typography>
        <Button onClick={handleClickOpen} sx={{ marginRight: 2 }}>
          <AddIcon />
        </Button>
      </Box>
      <Box
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        mb="24px"
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
      </Box>
      <Grid2 container>
        {user?.contacts.map((item, id) => {
          return <Contact key={id} chatRoomId={item}></Contact>;
        })}
      </Grid2>
    </ContactPageWrapper>
  );
};
