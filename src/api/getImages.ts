import axios, { AxiosHeaders } from "axios";
import { instance } from "./instance";

export const getImages = (path: string) => {
  return axios.get(instance + `Messages/GetImage/${path}`, {
    headers: new AxiosHeaders({ "ngrok-skip-browser-warning": "69420" }),
    responseType: "blob",
  });
};
