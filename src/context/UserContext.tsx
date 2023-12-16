import { createContext, useContext, useState, FC, ReactNode } from 'react';
import { Nullable, IUser } from '../types';

type UserProps = Nullable<Partial<IUser>>;
type UserDispatcherProps = (user: UserProps) => void;

const UserContext = createContext<{
  user: UserProps;
  updateUser: UserDispatcherProps;
}>({
  user: null,
  updateUser: () => {
    console.log('User undefined');
  }
});

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<UserProps>(null);
  const updateUser = (newUserDetails: UserProps) => {
    setUser({
      ...user,
      ...newUserDetails
    });
    console.log('Updated user: ', user);
  };
  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
