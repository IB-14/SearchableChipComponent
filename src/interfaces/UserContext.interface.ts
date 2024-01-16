import React, { ReactNode } from "react";
import IUser from "./User.interface";

export interface IUserContext {
    userList: IUser[];
    setUserList: React.Dispatch<React.SetStateAction<IUser[]>>;
    selectedUsers: IUser[]
    setSelectedUsers: React.Dispatch<React.SetStateAction<IUser[]>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    error: string | null;
    setError: React.Dispatch<React.SetStateAction<string | null>>;
}

export interface IUserProviderProps {
    children: ReactNode;
}
