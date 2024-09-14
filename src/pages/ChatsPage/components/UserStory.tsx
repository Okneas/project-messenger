import { Box,Typography } from "@mui/material";
import { AddIcon } from "../../../svg/AddIcon";
import { AddStoryIcon } from "../../../svg/AddSoryIcon";

export default  function UserStory(){
    return(
        <Box sx={{display:"flex", flexDirection:"column", height:"68px", mt:2, pl:2, pr:2, mb:4}}>
            <Box>
                <Box sx={{display:"flex",width:'56px', height:'56px', minWidth:'56px', borderRadius:"16px", border:"2px solid #ADB5BD",alignItems:"center",justifyContent:"center"}}>
                    <Box sx={{width:'48px', height:'48px',display:"flex", minWidth:'48px',borderRadius:"16px", alignItems:"center", background:"#F7F7FC", justifyContent:"center"}}>
                        <AddStoryIcon></AddStoryIcon>
                    </Box>
                </Box>
                <Box textAlign={"center"}>
                    <Typography variant="BodyText1" fontSize="12px" sx={{width:"10px"}}>Добавить<br></br>историю</Typography>
                </Box>
            </Box>
      </Box>
    )
}