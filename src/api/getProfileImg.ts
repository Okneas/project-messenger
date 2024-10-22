import axios, { AxiosHeaders } from "axios";
import { instance } from "./instance";

export const getProfileImg = (id: string) =>
  axios.get(instance + `User/GetProfileImg/${id}`, {headers: new AxiosHeaders({"ngrok-skip-browser-warning": "69420"}), responseType: 'blob'});
