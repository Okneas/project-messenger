import { FC } from "react";
import { MessageWrapper } from "../style";
import { Typography } from "@mui/material";

interface IMessageProps {
    text?: string;
    my: boolean;
}

export const MessageComponent: FC<IMessageProps> = ({ text, my }) => {
    return(
    <MessageWrapper 
    sx={{
        bgcolor: my ? "#002DE3" : "#FFFFFF", 
        color: my ? "#FFFFFF" : "#0F1828",
        borderRadius: my ? "16px 16px 0px 16px" : "16px 16px 16px 0px",
        marginLeft: my ? "auto" : 2,
        marginRight: my ? 2 : "auto", 
        }}>
            <Typography variant="BodyText2" maxWidth="300px" sx={{overflowWrap: "anywhere"}}>{text}</Typography>
    </MessageWrapper>
    );
}