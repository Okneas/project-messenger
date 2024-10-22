import axios, { AxiosHeaders } from "axios"
import { instance } from "./instance";

export const getAllMesFromChat = (chat_id: string) => axios.get(instance + `Messages/GetAllMesFromChat/${chat_id}`, {headers: new AxiosHeaders({"ngrok-skip-browser-warning": "69420"})});