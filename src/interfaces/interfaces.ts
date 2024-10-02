export interface IUser {
    id: string,
    phone: string,
    name: string,
    lastname: string,
    contacts: Array<number>,
    chats: Array<number>,
    avatarImg: string,
}

export interface ResponseError {
    message: string;
    type: string;
    userMessage: string;
}

export interface IMessage {
    id: string,
    chat_id: string,
    sender_id: string,
    sender_name: string,
    text: string
}

export interface IChat {
    id: string,
    user_ids: Array<string>;
}