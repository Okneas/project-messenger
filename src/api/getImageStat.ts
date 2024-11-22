import axios, { AxiosHeaders } from "axios";
import { instance } from "./instance";

export const getImageStat = (path: string) => {
  return axios.get(instance + `Messages/GetImageStats/${path}`, {
    headers: new AxiosHeaders({ "ngrok-skip-browser-warning": "69420" }),
  });
};
