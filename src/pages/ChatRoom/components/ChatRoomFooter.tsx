import { Box } from "@mui/material";
import { ChatFooterWrapper, ChatInputTextBox } from "../style";
import { AddIcon } from "src/svg/AddIcon";
import { SendMessageIcon } from "src/svg/SendMessageIcon";
import { Socket } from "socket.io-client";
import { FC, useState } from "react";
import { useLocation } from "react-router-dom";

interface Props {
    socket: Socket | null;
}

export const ChatRoomFooter: FC<Props> = ({ socket }) => {
    const id = useLocation().pathname.split("/")[2];
    const [message, setMessage] = useState("");
    const handleSubmitMessage = () => {
        const senderLocalData = localStorage.getItem("user");
        if(senderLocalData){
            socket?.emit('message', {userId: id, text: message, senderId: JSON.parse(senderLocalData).id});
            socket?.emit('message', {userId: JSON.parse(senderLocalData).id, text: message, senderId: JSON.parse(senderLocalData).id});
        }
        setMessage("");
    }
    return(
        <Box component="footer" position="fixed">
            <ChatFooterWrapper flexDirection="row" alignItems="center" justifyContent="space-between" display="flex">
                <Box ml={2}>
                    <AddIcon />
                </Box>
                <ChatInputTextBox value={message} onChange={(e) => {setMessage(e.target.value)}}/>
                <Box mr={2} onClick={handleSubmitMessage}>
                    <SendMessageIcon />
                </Box>
            </ChatFooterWrapper>
        </Box>
    );
};