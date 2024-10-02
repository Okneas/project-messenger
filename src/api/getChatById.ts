import axios from "axios";
import { instance } from "./instance";

export const getChatById = (id: string) =>
  axios.get(instance + `Chats/GetById/${id}`);
