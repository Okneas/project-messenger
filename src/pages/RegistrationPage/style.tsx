import { Button, Grid2 } from "@mui/material";
import styled from "styled-components";

export const RegistrationWrapper = styled(Grid2)(() => ({
    flexDirection: "column", 
    justifyContent: "space-between",
    alignItems: "center",
    width: "100vw",
    height: "100vh"
}));

export const RegistrationButton = styled(Button)(() => ({
    width: "90%",
    height: "52px",
}));




