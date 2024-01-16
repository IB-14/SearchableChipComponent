import React, { createContext, useContext, useState } from 'react';
import IUser from '../interfaces/User.interface';
import { IUserContext, IUserProviderProps} from '../interfaces/UserContext.interface';

const UserContext = createContext<IUserContext | undefined>(undefined);

export function UserProvider ({ children }: IUserProviderProps) {
  const [userList, setUserList] = useState<IUser[]>([]);
  const [selectedUsers, setSelectedUsers] = useState<IUser[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const value: IUserContext = {
    userList,
    setUserList,
    selectedUsers,
    setSelectedUsers,
    loading,
    setLoading,
    error,
    setError
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};
