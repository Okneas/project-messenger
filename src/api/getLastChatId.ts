import axios from "axios"
import { instance } from "./instance";

export const getLastChatId = () => axios.get(instance + `Chats/GetLastChatId/`);