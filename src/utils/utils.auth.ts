import { DialogueState, IUser } from '../types';
import { script } from '../modules/scripts/0';

export const getNextState = ({
  dialogueState,
  params
}: {
  dialogueState: DialogueState;
  params?: string | number;
}): DialogueState => {
  const skipToIndex =
    dialogueState.redirect && params !== undefined
      ? dialogueState.redirect(params)
      : dialogueState.currentIndex + 1;
  return {
    ...dialogueState,
    redirect: undefined,
    response: undefined,
    ...script[skipToIndex]
  };
};

export const updateName = (user: IUser | undefined, name: string): IUser => {
  return user
    ? {
        ...user,
        name: name.trim()
      }
    : ({ name } as IUser);
};

export const updateAge = (user: IUser | undefined, age: number): IUser => {
  return user
    ? {
        ...user,
        age
      }
    : ({ age } as IUser);
};

export const updatePhone = (user: IUser | undefined, phone: number): IUser => {
  return user
    ? {
        ...user,
        phone
      }
    : ({ phone } as IUser);
};

export const updatePassword = (
  user: IUser | undefined,
  password: string
): IUser => {
  return user
    ? {
        ...user,
        password: password.trim()
      }
    : ({ password } as IUser);
};
