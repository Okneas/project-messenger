import axios from "axios";
import { instance } from "./instance";

export const addNewContact = async (
  phone: string,
  id: string,
) => {
  const data = await axios.post(
    instance + `User/PostNewContact/${phone}/${id}`
  );
  return data;
};