import { Box,Button,Container, Divider, Typography } from "@mui/material";
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
import { DataUsageIconMore } from "../../svg/DataUsageIconMore"

export const MorePage = () => {
    return(
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
                    <Box sx={{height:"48px",display:"flex", flexDirection:"row", justifyContent:"space-between",pl:1,pr:1}}>
                        <Box sx={{height:"48px",display:"flex", flexDirection:"row"}}>
                            <ProfileIconMore></ProfileIconMore><Typography sx={{pl:"5px"}} variant="BodyText1" fontSize="14px">Аккаунт</Typography>
                        </Box>
                        <ArrowIcon></ArrowIcon>
                    </Box>
                    <Box sx={{height:"48px",display:"flex", flexDirection:"row", justifyContent:"space-between",pl:1,pr:1}}>
                        <Box sx={{height:"48px",display:"flex", flexDirection:"row"}}>
                            <ChatIconMore></ChatIconMore><Typography sx={{pl:"5px"}} variant="BodyText1" fontSize="14px">Чаты</Typography>
                        </Box>
                        <ArrowIcon></ArrowIcon>
                    </Box>
                </Container>
                <Container sx={{mt:1}}>
                    <Box sx={{height:"48px",display:"flex", flexDirection:"row", justifyContent:"space-between",pl:1,pr:1}}>
                        <Box sx={{height:"48px",display:"flex", flexDirection:"row"}}>
                            <AppearenceIconMore></AppearenceIconMore><Typography sx={{pl:"5px"}} variant="BodyText1" fontSize="14px">Внешний вид</Typography>
                        </Box>
                        <ArrowIcon></ArrowIcon>
                    </Box>
                    <Box sx={{height:"48px",display:"flex", flexDirection:"row", justifyContent:"space-between",pl:1,pr:1}}>
                        <Box sx={{display:"flex", flexDisplay:"row"}}>
                            <NotificationIconMore></NotificationIconMore><Typography sx={{pl:"5px"}} variant="BodyText1" fontSize="14px">Уведомления</Typography>
                        </Box>
                        <ArrowIcon></ArrowIcon>
                    </Box>
                    <Box sx={{height:"48px",display:"flex", flexDirection:"row", justifyContent:"space-between",pl:1,pr:1}}>
                        <Box sx={{height:"48px",display:"flex", flexDirection:"row"}}>
                            <PrivacyIconMore></PrivacyIconMore><Typography sx={{pl:"5px"}} variant="BodyText1" fontSize="14px">Приватность</Typography>
                        </Box>
                        <ArrowIcon></ArrowIcon>
                    </Box>
                    <Box sx={{height:"48px",display:"flex", flexDirection:"row", justifyContent:"space-between",pl:1,pr:1}}>
                        <Box sx={{height:"48px",display:"flex", flexDirection:"row"}}>
                            <DataUsageIconMore></DataUsageIconMore><Typography sx={{pl:"5px"}} variant="BodyText1" fontSize="14px">Использование данных</Typography>
                        </Box>
                        <ArrowIcon></ArrowIcon>
                    </Box>
                </Container>
        </Box>
        <Divider></Divider>
        <Container sx={{mt:1}}>
            <Box sx={{height:"48px",display:"flex", flexDirection:"row", justifyContent:"space-between",pl:1,pr:1}}>
                <Box sx={{display:"flex", flexDirection:"row"}}>
                    <HelpIconMore></HelpIconMore><Typography sx={{pl:"5px"}} variant="BodyText1" fontSize="14px">Помощь</Typography>
                </Box>
                <ArrowIcon></ArrowIcon>
            </Box>
            <Box sx={{height:"48px",display:"flex", flexDirection:"row", justifyContent:"space-between",pl:1,pr:1}}>
                <Box sx={{display:"flex", flexDirection:"row"}}>
                    <InvitationIconMore></InvitationIconMore><Typography sx={{pl:"5px"}} variant="BodyText1" fontSize="14px">Пригласить друзей</Typography>
                </Box>    
                <ArrowIcon></ArrowIcon>
            </Box>
        </Container>
    </MorePageWrapper>
);}