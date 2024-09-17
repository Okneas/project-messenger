import axios from "axios"
import { instance } from "./instance";

export const getUserById= (id: string) => axios.get(instance + `User/GetById/${id}`);
