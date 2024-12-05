import axios, { AxiosHeaders } from "axios"
import { instance } from "./instance";

export const getUserById= (id: string) => axios.get(instance + `User/GetById/${id}`, {headers: new AxiosHeaders({"ngrok-skip-browser-warning": "69420",  "Access-Control-Allow-Origin": "*"})});
