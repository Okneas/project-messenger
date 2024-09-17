import axios from "axios"
import { instance } from "./instance";

export const getUserByPhone = (phone: string) => axios.get(instance + `User/GetByPhone/${phone}`);
