export interface IUser {
    id: number,
    phone: string,
    name: string,
    lastname: string,
    contacts: Array<number>,
    chats: {chatsId: Array<number>},
    avatarImg: string,
}

export interface ResponseError {
    message: string;
    type: string;
    userMessage: string;
}