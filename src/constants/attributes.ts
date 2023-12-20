import { KeyboardType } from 'react-native';
import { IUser } from '../types';

export const KeyboardVariants: Record<keyof IUser, KeyboardType> = {
  password: 'default',
  phone: 'phone-pad',
  age: 'number-pad',
  name: 'default'
};
