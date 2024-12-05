import axios, { AxiosHeaders } from "axios"
import { instance } from "./instance";

export const getLastChatId = () => axios.get(instance + `Chats/GetLastChatId/`, {headers: new AxiosHeaders({"ngrok-skip-browser-warning": "69420", "Access-Control-Allow-Origin": "*",})});