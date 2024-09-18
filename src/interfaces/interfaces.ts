export interface IUser {
    id: string,
    phone: string,
    name: string,
    lastname: string,
    contacts: Array<number>,
    chats: {chatsId: Array<string>},
    avatarImg: string,
}

export interface ResponseError {
    message: string;
    type: string;
    userMessage: string;
}

export interface IMessage {
    userId: string;
    text: string,
    senderId: string;
}