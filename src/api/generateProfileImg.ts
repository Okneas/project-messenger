import axios, { AxiosHeaders } from "axios";
import { instance } from "./instance";

export const generateProfileImg = () =>
  axios.get(instance + `User/GenerateProfileImg/`, {headers: new AxiosHeaders({"ngrok-skip-browser-warning": "69420"})});
