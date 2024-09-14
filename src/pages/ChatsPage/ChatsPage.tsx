import { Box, Button, Container, Divider, InputAdornment, Typography } from "@mui/material";
import { ChatsPageWrapper, Field} from "./style";
import { CheckedIcon } from "../../svg/CheckedIcon";
import ContactStory from "./components/ContactStory";
import { SearchIcon } from "../../svg/SearchIcon";
import Contact from "../ContactsPage/components/Contact";
import { ChatIcon } from "../../svg/ChatIcon";
import UserStory from "./components/UserStory";

export const ChatsPage = () => {
    return(
        <ChatsPageWrapper>
            <Box component="header" pt={5} pb={1} display="flex" flexDirection = "row" justifyContent="space-between">
                <Container><Typography ml={4} variant="SubHeading1">Чаты</Typography></Container>
                <Container sx={{width:"60%"}}>
                    <Button><ChatIcon></ChatIcon></Button>
                    <Button><CheckedIcon></CheckedIcon></Button>
                </Container>
            </Box>
            <Box display="flex" flexDirection="row" sx={{ml:4}}>
                <UserStory></UserStory>
                <ContactStory></ContactStory>
                <ContactStory></ContactStory>
            </Box>
            <Divider></Divider>
            <Box width="100%" display="flex" flexDirection="column" alignItems="center" sx={{mt:2}}>
                <Field slotProps={{
                    input: {
                        startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon/>
                        </InputAdornment>
                        ),
                    },
                }} sx={{background: "#F7F7FC", borderRadius:"4px", width:"90%"}} label="Поиск"></Field>
                <Contact></Contact>
                <Contact></Contact>
                <Contact></Contact>
            </Box>
        </ChatsPageWrapper>
    );
} 