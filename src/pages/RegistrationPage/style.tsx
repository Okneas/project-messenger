import { Box, Button, FormControl, Grid2, TextField } from "@mui/material";
import styled from "styled-components";

export const RegistrationWrapper = styled(Grid2)(() => ({
  flexDirection: "column",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
}));

export const RegistrationButton = styled(Button)(() => ({
  width: "90%",
  height: "52px",
}));

export const PhoneNumberTextBox = styled(TextField)(() => ({
  width: "90%",
  "& .MuiInputBase-input": {
    backgroundColor: "#F7F7FC",
    color: "#ADB5BD",
    padding: 5,
  },
  "& .MuiOutlinedInput-root": {
    height: "36px",
    borderRadius: "4px",
    "& fieldset": {
      borderColor: "rgba(0, 0, 0, 0)",
    },
  },
}));

export const CodeTextBox = styled(FormControl)(() => ({
  width: "50%",
  "& .MuiInputBase-input": {
    color: "#0F1828",
    padding: 5,
    height: "100px",
    fontSize: "32px",
    letterSpacing: "24px",
  },
  "& .MuiInput-root": {
    height: "100px",
    borderRadius: "4px",
    "& fieldset": {
      borderColor: "rgba(0, 0, 0, 0)",
    },
  },
  "& .MuiInput-root::before": {
    borderBottomColor: "rgba(0, 0, 0, 0)",
  },
  "& .MuiInput-root::after": {
    borderBottomColor: "rgba(0, 0, 0, 0)",
  },
  "& .MuiInput-root:hover:not(.Mui-disabled, .Mui-error):before": {
    borderBottomColor: "rgba(0, 0, 0, 0)",
  },
}));

export const PinCodeDot = styled(Box)(() => ({
  top: "5px",
  borderRadius: "100%",
  width: "24px",
  height: "24px",
  backgroundColor: "#EDEDED",
  position: "absolute",
}));
