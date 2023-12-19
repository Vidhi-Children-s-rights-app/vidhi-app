import { createContext, useContext, useState, FC, ReactNode } from 'react';
import { Nullable, IUser } from '../types';
import languages from '../localizations/languages';
import { i18n } from 'i18next';

type UserProps = Nullable<Partial<IUser>>;
type UserDispatcherProps = (user: UserProps) => void;
type LanguageDispatcherProps = (language: string) => void;

const UserContext = createContext<{
  user: UserProps;
  language: string;
  updateUser: UserDispatcherProps;
  updateLanguage: LanguageDispatcherProps;
}>({
  user: null,
  language: languages.english,
  updateUser: () => {
    console.log('User undefined');
  },
  updateLanguage: () => {}
});

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProps>(null);
  const [language, setLanguage] = useState<string>('en');
  const updateUser = (newUserDetails: UserProps) => {
    console.log('newUser', newUserDetails);
    setUser({
      ...newUserDetails
    });

    console.log('Updated user: ', user);
  };
  const updateLanguage = (language: string) => {
    console.log(language)
    setLanguage(language)
  }
  return (
    <UserContext.Provider value={{ user, language, updateUser, updateLanguage }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
