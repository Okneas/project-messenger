import { Box, Grid2, TextField } from "@mui/material";
import styled from "styled-components";

export const ChatFooterWrapper = styled(Box)(() => ({
  width: "100vw",
  height: "8%",
  background: "#ffffff",
  boxShadow: "0px -2px 9px 0px rgba(0, 0, 0, 0.04)",
  zIndex: 1,
  position: "fixed",
  bottom: 0,
}));

export const ChatInputTextBox = styled(TextField)(() => ({
  width: "70%",
  "& .MuiInputBase-input": {
    backgroundColor: "#F7F7FC",
    color: "#0F1828",
    padding: 10,
  },
  "& .MuiOutlinedInput-root": {
    height: "36px",
    borderRadius: "4px",
    "& fieldset": {
      borderColor: "rgba(0, 0, 0, 0)",
    },
  },
}));

export const MessageWrapper = styled(Grid2)(() => ({
  display: "flex",
  flexDirection: "column",
  padding: 10,
  maxWidth: "300px",
  minWidth: "5%",
  marginTop: 8,
  marginBottom: 32, 
  boxShadow: "1px 1px 3px 0px rgba(0,0,0,0.4)",
}));

export const ImagePreviewWrapper = styled(Box)(() => ({
  width: "120px",
  height: "80px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "10px",
  overflow: "hidden",
  position: "relative",
  boxShadow: "2px 2px 10px 0px rgba(0,0,0,0.4)",
}));

export const ImagePreviewContainer = styled(Box)(() => ({
  width: "100vw",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  bottom: "9%",
  marginLeft: "8px",
  position: "fixed",
  gap: "8px",
}));

export const ClearIconWrapper = styled('div')(() => ({
  position: "absolute",
  width: 24,
  height: 24,
  borderRadius: 9,
  right: 0,
  top: 0,
  backgroundColor: "gray",
  opacity: "70%"
}));