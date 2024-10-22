import axios from "axios"
import { instance } from "./instance";

export const postNewUser = async (phone: string, name: string, lastname: string, imgUrl: string) => {
    const data = await axios.post(instance + `User/PostNewUser/${phone}/${name}/${lastname}/${imgUrl}`);
    return data;
}