import { Box, Button, Grid2, Input, Typography } from "@mui/material";
import { CodeTextBox, PhoneNumberTextBox, PinCodeDot, RegistrationButton, RegistrationWrapper } from "./style";
import { useEffect, useState } from "react";
import { ReturnIcon } from "src/svg/ReturnIcon";
import { postNewUser } from "src/api/postNewUser";
import { getUserByPhone } from "src/api/getUserByPhone";
import { IUser } from "src/interfaces/interfaces";
import { useNavigate } from "react-router-dom";
import doRequest from "src/hooks/doRequest";

export const RegistrationPage = () => {
    const [step, setStep] = useState(0);
    const [phone, setPhone] = useState("");
    const [pin, setPin] = useState("");
    const [name, setName] = useState("");
    const [lastname, setLastname] = useState("");
    const [invalidPhone, setInvalidPhone] = useState(false);
    const [invalidPin, setInvalidPin] = useState(false);

    const nav = useNavigate();

    useEffect(() => {
        if(localStorage.getItem("user")){
            nav("/chats");
        };
    }, [])

    const handleStepForward = () => {
        setStep(step+1);
    }

    const handleStepBack = () => {
        setStep(step-1);
    }

    const handleChangePhoneText = (e: React.ChangeEvent<HTMLInputElement>) => {
        let val = e.currentTarget.value;
        val = val.replace(/ /gm, '');
        if(val.length === 12){
            setPhone(val);
        }
        let num = `${val.substring(0, 1)}${val.substring(1, 2)} ${val.substring(2, 5)} ${val.substring(5, 8) } ${val.substring(8, 10) } ${val.substring(10, 12) }`;
        num = num.trim();
        e.currentTarget.value = num;
    }

    const handleChangePin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPin(e.currentTarget.value);
    }

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
    }

    const handleChangeLastname = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLastname(e.currentTarget.value);
    }

    function handleVerificationPhone() {
        if(phone.match(/^((\+7|7|8)+([0-9]){10})$/gm)){
            setInvalidPhone(false);
            (async () => {
                const result = (
                  await doRequest<IUser | null>(getUserByPhone, phone)
                ).data;
                if (result) {
                    localStorage.setItem("user", JSON.stringify(result))
                    nav(`/contacts`);
                }
                else {
                    setStep(step+1);
                }
            })();
        }
        else{
            setInvalidPhone(true);
        }
    }
    
    const handleVerificationPin = () => {
        if(pin.length === 4){
            setInvalidPhone(false);
            setStep(step+1);
        }
        else{
            setInvalidPin(true);
        }
    }

    const handleSaveClick = () => {
        postNewUser(phone, name, lastname);
        nav(`/contacts`);
    }

    switch(step){
        case 0:
            return(
                <RegistrationWrapper flexDirection="column" wrap="nowrap" container>
                    <Box mt={15} sx={{objectFit: "contain"}} component="img" src="Illustration.png"></Box>
                    <Typography mt={5} align="center" variant="Heading2">Общайтесь легко с <br/> Вашей семьёй и друзьями <br/> в любой стране</Typography>
                    <Typography mt={20} mb={1} align="center" variant="BodyText1">Правила использования</Typography>
                    <RegistrationButton onClick={handleStepForward} sx={{backgroundColor: "button.primary", borderRadius: "30px", marginBottom: "8px", textTransform: "none", minHeight: "52px"}} variant="contained">
                        <Typography variant="SubHeading2">Начать общение</Typography>
                    </RegistrationButton>
                </RegistrationWrapper>
            ); 
        case 1: 
            return(
                <RegistrationWrapper flexDirection="column" wrap="nowrap" container>
                    <Button sx={{marginRight: "auto", marginTop: 1}} onClick={handleStepBack}>
                        <ReturnIcon />
                    </Button>
                    <Typography mt={10} align="center" variant="Heading2">Введите Ваш номер <br/> телефона</Typography>
                    <Typography mt={3} mb={4} align="center" variant="BodyText2">Пожалуйста укажите код Вашей страны <br/> и введите номер телефона</Typography>
                    <PhoneNumberTextBox error={invalidPhone} placeholder="Номер телефона" onChange={handleChangePhoneText}></PhoneNumberTextBox>
                    <RegistrationButton onClick={handleVerificationPhone} sx={{backgroundColor: "button.primary", borderRadius: "30px", marginTop: "auto", marginBottom: 4, textTransform: "none", minHeight: "52px"}} variant="contained">
                        <Typography variant="SubHeading2">Продолжить</Typography>
                    </RegistrationButton>
                </RegistrationWrapper>
            );
        case 2: 
            return(
                <RegistrationWrapper flexDirection="column" wrap="nowrap" container>
                    <Button sx={{marginRight: "auto", marginTop: 1}} onClick={handleStepBack}>
                        <ReturnIcon />
                    </Button>
                    <Typography mt={10} align="center" variant="Heading2">Введите код</Typography>
                    <Typography mt={3} mb={4} align="center" variant="BodyText2">Мы отправили СМС-код на номер <br/> {phone}</Typography>
                    <CodeTextBox sx={{marginLeft: 2}}>
                        <Grid2 position="absolute" container gap="11px" top="34px">
                            {pin.length > 0 ? null : <PinCodeDot />}
                            {pin.length > 1 ? null : <PinCodeDot left="43px" />}
                            {pin.length > 2 ? null : <PinCodeDot left="86px" />}
                            {pin.length > 3 ? null : <PinCodeDot left="129px" />}
                        </Grid2>
                        <Input type="number" inputProps={{maxLength: "4"}} onChange={handleChangePin}/>
                    </CodeTextBox>
                    {invalidPin ? <Typography variant="SubHeading1" color="error">Неверный СМС-код</Typography> : null}
                    <RegistrationButton onClick={handleVerificationPin} sx={{backgroundColor: "button.primary", borderRadius: "30px", marginTop: "auto", marginBottom: 4, textTransform: "none", minHeight: "52px"}} variant="contained">
                        <Typography variant="SubHeading2">Продолжить</Typography>
                    </RegistrationButton>
                </RegistrationWrapper>
            );
        case 3: 
            return(
                <RegistrationWrapper flexDirection="column" wrap="nowrap" container>
                    <Grid2 container mr="auto">
                        <Button sx={{ marginTop: 1}} onClick={handleStepBack}>
                            <ReturnIcon />
                        </Button>
                        <Typography mt="12px" variant="SubHeading1">Ваш профиль</Typography>
                    </Grid2>
                    <Box mt={10} width="100px" height="100px" borderRadius="100%" sx={{backgroundColor: "#F7F7FC"}}></Box>
                    <PhoneNumberTextBox sx={{marginTop: 4}} onChange={handleChangeName} placeholder="Имя (Обязательно)"></PhoneNumberTextBox>
                    <PhoneNumberTextBox sx={{marginTop: 1.5}} onChange={handleChangeLastname} placeholder="Фамилия (Опционально)"></PhoneNumberTextBox>
                    <RegistrationButton onClick={handleSaveClick} sx={{backgroundColor: "button.primary", borderRadius: "30px", marginTop: "auto", marginBottom: 4, textTransform: "none", minHeight: "52px"}} variant="contained">
                        <Typography variant="SubHeading2">Сохранить</Typography>
                    </RegistrationButton>
                </RegistrationWrapper>
            );
    }

}