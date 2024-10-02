import axios from "axios";
import { instance } from "./instance";

export const postNewChat = async (
  user_ids: Array<string>,
  chat_name: string,
  chat_pic: string
) => {
  const data = await axios.post(
    instance + `Chats/PostNewChat/${user_ids}/${chat_name}/${chat_pic}`
  );
  return data;
};
