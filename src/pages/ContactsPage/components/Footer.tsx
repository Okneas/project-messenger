import { Box, Button, Typography } from "@mui/material";
import { FooterWrapper } from "../style";
import { useLocation } from "react-router-dom";
import { GroupIcon } from "../../../svg/GroupIcon";
import { CommunicationIcon } from "../../../svg/CommunicationIcon";
import { OthersIcon } from "../../../svg/OthersIcon";
import { EllipseIcon } from "../../../svg/EllipseIcon";

export default function Footer(){
    const location = useLocation();
    if(location.pathname === '/'){
        return null;    
    }
    return(
        <Box component="footer">
            <FooterWrapper sx={{display:"flex", flexDirection:"row", justifyContent:"space-around"}}>
                {location.pathname === '/contacts' ? <Button><Box><Typography sx={{textTransform:"initial", color:"#0F1828",fontWeight:"Medium" }}>Контакты</Typography><EllipseIcon></EllipseIcon></Box></Button>: <Button><GroupIcon></GroupIcon></Button> }
                {location.pathname === '/contacts' ? <Button><CommunicationIcon></CommunicationIcon></Button>: <Button><Box><Typography sx={{textTransform:"initial", color:"#0F1828",fontWeight:"Medium" }}>Чаты</Typography><EllipseIcon></EllipseIcon></Box></Button>}
                {location.pathname === '/contacts' ? <Button><OthersIcon></OthersIcon></Button>: <Button><OthersIcon></OthersIcon></Button>}
                {location.pathname === '/more' ? <Button><CommunicationIcon></CommunicationIcon></Button>: <Button><GroupIcon></GroupIcon></Button>}
                {location.pathname === '/more' ? <Button><Box><Typography>More</Typography><EllipseIcon></EllipseIcon></Box></Button>: <Button><GroupIcon></GroupIcon></Button> }
            </FooterWrapper>
        </Box>
    )
}