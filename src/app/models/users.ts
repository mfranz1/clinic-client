export interface Users {
    email: string;
    password: string;
}

export interface LoggedIn {
    email: string;
    password: string;
    userID: number;
    systemID: number;
    accessGroup: String;
}