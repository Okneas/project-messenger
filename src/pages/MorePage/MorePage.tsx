import { Box, Button, Container, Divider, Typography } from "@mui/material";
import { MorePageWrapper } from "./style";
import { ArrowIcon } from "../../svg/ArrowIcon";
import { ProfileIcon } from "../../svg/ProfileIcon";
import { ChatIconMore } from "../../svg/ChatsIconMore";
import { ProfileIconMore } from "../../svg/ProfileIconMore";
import { AppearenceIconMore } from "../../svg/AppearenceIconMore";
import { NotificationIconMore } from "../../svg/NotificationIconMore";
import { PrivacyIconMore } from "../../svg/PrivacyIconMore";
import { HelpIconMore } from "../../svg/HelpIconMore";
import { InvitationIconMore } from "../../svg/InvitationIconMore";
import { DataUsageIconMore } from "../../svg/DataUsageIconMore";
import ProfileSettings from "./components/profileSettings";

export const MorePage = () => {
  return (
    <MorePageWrapper>
        <Box component="header" pt={5} pb={1} display="flex" flexDirection = "row" justifyContent="space-between">
            <Container><Typography ml={2} variant="SubHeading1">Детали профиля</Typography></Container>
        </Box>
        <Box sx={{display:"flex", flexDirection:"row", justifyContent:"space-between",mt:2}}>
            <Box sx={{display:"flex", flexDirection:"row", ml:2}}>
                <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",width:"50px", minWidth:"50px", height:"50px", borderRadius:"50px", background:"#EDEDED", ml:2}}>
                    <ProfileIcon></ProfileIcon>
                </Box>
                <Box sx={{display:"flex", flexDirection:"column", ml:2, width:"100%"}}>
                    <Typography variant="BodyText1">Имя</Typography>
                    <Typography fontSize="12px" color="#ADB5BD">Номер</Typography>
                </Box>
            </Box>
            <Button sx={{mr:"5px"}}><ArrowIcon></ArrowIcon></Button>
        </Box>
        <Box sx={{display:"flex", flexDirection:"column", mt:2}}>
                <Container sx={{mt:1}}>
                    <ProfileSettings></ProfileSettings>
                    <ProfileSettings></ProfileSettings>
                </Container>
                <Container sx={{mt:1}}>
                    <ProfileSettings></ProfileSettings>
                    <ProfileSettings></ProfileSettings>
                    <ProfileSettings></ProfileSettings>
                    <ProfileSettings></ProfileSettings>
                </Container>
        </Box>
        <Divider></Divider>
        <Container sx={{mt:1}}>
            <ProfileSettings></ProfileSettings>
            <ProfileSettings></ProfileSettings>
        </Container>
    </MorePageWrapper>
  );
};
