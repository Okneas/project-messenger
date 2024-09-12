import { Box, Button, Typography } from "@mui/material";
import { RegistrationButton, RegistrationWrapper } from "./style";
import { useState } from "react";
import { ReturnIcon } from "../../svg/ReturnIcon";

export const RegistrationPage = () => {
    const [step, setStep] = useState(0);
    const handleStepForward = () => {
        setStep(step+1);
    }
    const handleStepBack = () => {
        setStep(step-1);
    }
    switch(step){
        case 0:
            return(
                <RegistrationWrapper flexDirection="column" wrap="nowrap" container>
                    <Box mt={15} sx={{objectFit: "contain"}} component="img" src="Illustration.png"></Box>
                    <Typography mt={2} align="center" variant="Heading2">Общайтесь легко с <br/> Вашей семьёй и друзьями <br/> в любой стране</Typography>
                    <Typography mt={15} mb={1} align="center" variant="BodyText1">Правила использования</Typography>
                    <RegistrationButton onClick={handleStepForward} sx={{backgroundColor: "button.primary", borderRadius: "30px", marginBottom: "24px", textTransform: "none", minHeight: "52px"}} variant="contained">
                        <Typography variant="SubHeading2">Начать общение</Typography>
                    </RegistrationButton>
                </RegistrationWrapper>
            ); 
        case 1: 
            return(
                <RegistrationWrapper flexDirection="column" wrap="nowrap" container>
                    <Button onClick={handleStepBack}><ReturnIcon /></Button>
                </RegistrationWrapper>
            ); 
        default:
            return(
                <RegistrationWrapper flexDirection="column" wrap="nowrap" container>
                    <Box mt={15} sx={{objectFit: "contain"}} component="img" src="Illustration.png"></Box>
                    <Typography mt={2} align="center" variant="Heading2">Общайтесь легко с <br/> Вашей семьёй и друзьями <br/> в любой стране</Typography>
                    <Typography mt={15} mb={1} align="center" variant="BodyText1">Правила использования</Typography>
                    <RegistrationButton onClick={handleStepForward} sx={{backgroundColor: "button.primary", borderRadius: "30px", marginBottom: "24px", textTransform: "none", minHeight: "52px"}} variant="contained">
                        <Typography variant="SubHeading2">Начать общение</Typography>
                    </RegistrationButton>
                </RegistrationWrapper>
            ); 
    }

}