import { Box, Grid2, TextField } from "@mui/material";
import styled from "styled-components";

export const ChatsPageWrapper = styled(Grid2)(() => ({
    flexDirection: "column", 
    width: "100vw",
    height: "100vh"
}))


export const Field = styled(TextField)(() => ({
    '& label.Mui-focused': {
    color: '#A0AAB4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#B2BAC2',
  },
  '& .MuiOutlinedInput-root': {
    height:'36px',
    '& fieldset': {
      border:'none',
    },
    '&:hover fieldset': {
      borderColor: '#B2BAC2',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6F7E8C',
    },
  },
}))

export const FooterWrapper = styled(Box)(() => ({
    width:'100vw',
    height:'83px',
    background:'#ffffff',
    boxShadow:'0px -2px 9px 0px rgba(0, 0, 0, 0.04)',
    zIndex:1,
    position:'fixed',
    bottom:0
}))