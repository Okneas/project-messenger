import { Box, Button, Typography } from "@mui/material";
import { FooterWrapper } from "../style";
import { useLocation, useNavigate } from "react-router-dom";
import { GroupIcon } from "src/svg/GroupIcon";
import { CommunicationIcon } from "src/svg/CommunicationIcon";
import { OthersIcon } from "src/svg/OthersIcon";
import { EllipseIcon } from "src/svg/EllipseIcon";

export default function Footer(){
    const location = useLocation();
    const nav = useNavigate();
    if(location.pathname === '/' || location.pathname.split('/')[1] === "chatRoom"){
        return null;    
    }
    const handleGoChats = () => {
        nav("/chats");
    };
    const handleGoContacts = () => {
        nav("/contacts");
    };
    const handleGoMore = () => {
        nav("/more");
    };
    return(
        <Box component="footer">
            <FooterWrapper sx={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
                {location.pathname === '/contacts' ? <Button><Box><Typography sx={{textTransform:"initial", color:"#0F1828",fontWeight:"Medium" }}>Контакты</Typography><EllipseIcon></EllipseIcon></Box></Button> : <Button onClick={handleGoContacts}><GroupIcon></GroupIcon></Button> }
                {location.pathname === '/chats' ? <Button><Box><Typography sx={{textTransform:"initial", color:"#0F1828",fontWeight:"Medium" }}>Чаты</Typography><EllipseIcon></EllipseIcon></Box></Button> : <Button onClick={handleGoChats}><CommunicationIcon></CommunicationIcon></Button>}
                {location.pathname === '/more' ? <Button onClick={handleGoMore}><OthersIcon></OthersIcon></Button> : <Button onClick={handleGoMore}><OthersIcon></OthersIcon></Button>}
            </FooterWrapper>
        </Box>
    )
}