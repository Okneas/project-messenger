import { Box, Typography } from "@mui/material";
import { ArrowIcon } from "../../../svg/ArrowIcon";

export default  function ProfileSettings(){
    return(       
    <Box sx={{height:"48px",display:"flex", flexDirection:"row", justifyContent:"space-between",pl:1,pr:1}}>
        <Box sx={{height:"48px",display:"flex", flexDirection:"row"}}>
            <Typography sx={{pl:"5px"}} variant="BodyText1" fontSize="14px"></Typography>
        </Box>
        <ArrowIcon></ArrowIcon>
    </Box>
);}
