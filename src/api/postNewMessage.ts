import axios from "axios"
import { instance } from "./instance";

export const PostNewMessage= async (chat_id: string, sender_name?: string, sender_id?: string, text?: string) => {
    const data = await axios.post(instance + `Messages/PostNewMessage/${chat_id}/${sender_id}/${sender_name}/${text}`);
    return data;
}