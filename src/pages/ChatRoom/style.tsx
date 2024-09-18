import { Box, Grid2, TextField } from "@mui/material";
import styled from "styled-components";

export const ChatFooterWrapper = styled(Box)(() => ({
    width:'100vw',
    height:'8%',
    background:'#ffffff',
    boxShadow:'0px -2px 9px 0px rgba(0, 0, 0, 0.04)',
    zIndex:1,
    position:'fixed',
    bottom:0
}))

export const ChatInputTextBox = styled(TextField)(() => ({
    width: "70%",
    '& .MuiInputBase-input': {
        backgroundColor: "#F7F7FC",
        color: "#0F1828",
        padding: 10,
    },
    '& .MuiOutlinedInput-root': {
        height: "36px",
        borderRadius: "4px",
        '& fieldset': {
            borderColor: "rgba(0, 0, 0, 0)",
        },
    }
}));

export const MessageWrapper = styled(Grid2)(() => ({
    flexDirection: "row",
    padding: 10,
    maxWidth: "300px",
    minWidth: "5%",
    marginTop: 10,
}));

