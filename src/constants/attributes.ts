import { KeyboardType } from 'react-native';
import { type KeyboardVariants as Variants } from '../types';

export const KeyboardVariants: Record<Variants, KeyboardType> = {
  email: 'email-address',
  phone: 'phone-pad',
  number: 'number-pad',
  text: 'default'
};
