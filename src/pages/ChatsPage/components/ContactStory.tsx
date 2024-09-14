import { Box,Typography } from "@mui/material";

export default  function ContactStory(){
    return(
        <Box sx={{display:"flex", flexDirection:"column", height:"68px", mt:2, pl:2, pr:2, mb:4}}>
            <Box>
                <Box sx={{display:"flex",width:'56px', height:'56px', minWidth:'56px', borderRadius:"16px", border:"2px solid blue",alignItems:"center",justifyContent:"center"}}>
                    <Box component="img" sx={{width:'48px', height:'48px', minWidth:'48px',borderRadius:"16px", backgroundColor:'gray'}}></Box>
                </Box>
                <Box textAlign={"center"}><Typography variant="BodyText1">История</Typography></Box>
            </Box>
      </Box>
    )
}