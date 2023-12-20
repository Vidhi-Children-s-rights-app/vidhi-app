import { createContext, useContext, useState, FC, ReactNode } from 'react';
import { IUser } from '../types';
import {
  updateName,
  updateAge,
  updatePhone,
  updatePassword
} from '../utils/utils.auth';

type UserProps = Partial<IUser> | undefined;
type UserDispatcherProps = (key: keyof IUser, value: string | number) => void;
type LanguageDispatcherProps = (newLanguage: string) => void;

const UserContext = createContext<{
  getUser: () => UserProps;
  language: string;
  updateUser: UserDispatcherProps;
  updateLanguage: LanguageDispatcherProps;
}>({
  getUser: () => undefined,
  language: 'en',
  updateUser: () => {},
  updateLanguage: () => {}
});

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProps>();
  const [language, setLanguage] = useState<string>('en');

  const getUser = (): UserProps => user;
  const updateUser = (key: keyof IUser, value: string | number) => {
    let updatedUserDetails;
    if (key === 'name')
      updatedUserDetails = updateName(
        user as IUser | undefined,
        value as string
      );
    else if (key === 'age')
      updatedUserDetails = updateAge(
        user as IUser | undefined,
        value as number
      );
    else if (key === 'phone')
      updatedUserDetails = updatePhone(
        user as IUser | undefined,
        value as number
      );
    else if (key === 'password')
      updatedUserDetails = updatePassword(
        user as IUser | undefined,
        value as string
      );
    setUser({ ...user, ...updatedUserDetails });
  };
  const updateLanguage = (newLanguage: string) => {
    console.log('from updatelang', newLanguage);
    setLanguage(newLanguage);
  };
  return (
    <UserContext.Provider
      value={{ getUser, language, updateUser, updateLanguage }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
