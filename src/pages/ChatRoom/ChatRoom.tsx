import { Box, Grid2 } from "@mui/material";
import { FC, useEffect, useState } from "react";
import { Socket } from "socket.io-client";
import { ChatRoomHeader } from "./components/ChatRoomHeader";
import { ChatRoomFooter } from "./components/ChatRoomFooter";
import { IMessage, IUser } from "src/interfaces/interfaces";
import { useLocation } from "react-router-dom";
import doRequest from "src/hooks/doRequest";
import { getUserById } from "src/api/getUserById";
import { MessageComponent } from "./components/MessageComponent";

interface Props {
    socket: Socket | null;
}

export const ChatRoom: FC<Props> = ({ socket }) => {
    const [sender, setSender] = useState<IUser | null>(null);
    const location = useLocation();
    const [messages, setMessages] = useState<Array<IMessage>>([]);
    const [interlocutor, setInterlocutor] = useState<IUser | null>(null);
    useEffect(() => {
        socket?.on('messageResponse', (data) => setMessages([...messages, data]));
      }, [socket, messages]);
    useEffect(() => {
        (async () => {
            const interlocutorId = location.pathname.split('/')[2];
            if(interlocutorId){
                const result = (
                await doRequest<IUser | null>(getUserById, JSON.parse(interlocutorId))
                ).data;
                if (result) {
                    setInterlocutor(result);
                }
        }
        })();
        const senderLocalData = localStorage.getItem("user");
        if(senderLocalData){
            setSender(JSON.parse(senderLocalData));
        }
    }, []);
    return(
    <Grid2 container width="100vw" height="100vh" bgcolor="#FCFCFC" flexDirection="column">
        <ChatRoomHeader userName={interlocutor?.name + " " + interlocutor?.lastname} />
        <Box component="div" display="flex" flexDirection="column" sx={{overflow: "auto"}} marginTop="25%" maxHeight="630px">
            {messages.map((item, id) => {
                return(<MessageComponent key={id} text={item.text} my={item?.senderId === sender?.id}/>)
            })}
        </Box>
        <ChatRoomFooter socket={socket}/>
    </Grid2>
)};