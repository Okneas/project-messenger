import axios, { AxiosHeaders } from "axios";
import { instance } from "./instance";

export const getChatById = (data: {id: string, userId: string}) =>
  axios.get(instance + `Chats/GetById/${data.userId}/${data.id}`, {headers: new AxiosHeaders({"ngrok-skip-browser-warning": "69420", "Access-Control-Allow-Origin": "*",})});
