import axios, { AxiosHeaders } from "axios"
import { instance } from "./instance";

export const getUserByPhone = (phone: string) => axios.get(instance + `User/GetByPhone/${phone}`, {headers: new AxiosHeaders({"ngrok-skip-browser-warning": "69420", "Access-Control-Allow-Origin": "*"})});
