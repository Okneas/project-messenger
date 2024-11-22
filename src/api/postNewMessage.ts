import axios from "axios";
import { instance } from "./instance";

export const PostNewMessage = async (
  chat_id: string,
  sender_name?: string,
  sender_id?: string,
  text?: string,
  resources?: Blob[] | null
) => {
  const formData = new FormData();
  if (resources) {
    resources.forEach((item) => {
      formData.append('resources', item);
    });
  }
  if(text){
    formData.append('text', text);
  }
  const data = await axios.post(
    instance +
      `Messages/PostNewMessage/${chat_id}/${sender_id}/${sender_name}/`,
      formData,
  );
  return data;
};
