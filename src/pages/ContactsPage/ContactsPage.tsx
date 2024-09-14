import { Box, Button, Grid2, TextField, Typography } from "@mui/material"
import { ContactPageWrapper, FooterWrapper } from "./style"
import { AddIcon } from "../../svg/AddIcon"
import {SearchIcon} from "../../svg/SearchIcon"
import {Field} from "./style"
import Contact from "../ContactsPage/components/Contact"
import InputAdornment from '@mui/material/InputAdornment';
import Footer from "./components/Footer"

export const  ContactPage = () => {
    return(
        <ContactPageWrapper>
            <Box component="header" pt={5} pb={1} display="flex" flexDirection = "row" justifyContent="space-between">
                <Typography ml={4} variant="SubHeading1">Контакты</Typography>
                <Button sx={{marginRight:2}}><AddIcon/></Button>
            </Box>
            <Box width="100%" display="flex" flexDirection="column" alignItems="center" mb="24px">
                <Field slotProps={{
                    input: {
                        startAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon/>
                        </InputAdornment>
                        ),
                    },
                }} sx={{background: "#F7F7FC", borderRadius:"4px", width:"90%"}} label="Поиск"></Field>
            </Box>
            <Contact></Contact>
            <Contact></Contact>
            <Contact></Contact>
            <Contact></Contact>
            <Contact></Contact>
            <Contact></Contact>
            <Contact></Contact>
            <Contact></Contact>
            <Contact></Contact>
            <Contact></Contact>
            <Contact></Contact>
            <Contact></Contact>
            <Contact></Contact>
            <Contact></Contact>
            <Contact></Contact>
        </ContactPageWrapper>
    )
}
