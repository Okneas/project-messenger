import { Box, Button, Typography } from "@mui/material"
import { ContactPageWrapper } from "./style"
import { AddIcon } from "src/svg/AddIcon"
import {SearchIcon} from "src/svg/SearchIcon"
import {Field} from "./style"
import InputAdornment from '@mui/material/InputAdornment';

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
            
        </ContactPageWrapper>
    )
}
