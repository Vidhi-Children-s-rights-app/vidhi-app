import { Dispatch, SetStateAction } from 'react';
import { ImageSourcePropType, StyleProp, ViewStyle } from 'react-native';

export type StateType = 'default' | 'open' | 'closed';
export type StateDispatcher<T> = Dispatch<SetStateAction<T>>;
export type JSXStyles = StyleProp<ViewStyle>;

type Nullable<T> = T | null;

export interface IUser {
  name: string;
  age: number;
  phone: string;
  password: string;
}

export interface ModuleProgressState {
  currentIndex: number;
  backgroundSprite: Nullable<ImageSourcePropType>;
  characterSprite: Nullable<ImageSourcePropType>;
  mascotSprite: Nullable<string>;
  speakerName: Nullable<string>;
  characterDialogue: Nullable<string>;
  mascotDialogue: Nullable<MascotDialogueType>;
  summaryUpdate: Nullable<string>;
  audio: any;
}

export type ScriptType = Partial<ModuleProgressState>[];

type MascotDialogueType = string | ChoiceDialogueType;

interface ChoiceDialogueType {
  question: string;
  choices: ChoiceType[];
}

interface ChoiceType {
  text: string;
  skipToIndex: number;
}

interface ModuleState {
  progressState: Partial<ModuleProgressState>;
  isCompleted: boolean;
}

export type KeyboardVariants = 'email' | 'text' | 'number' | 'phone';

type ResponseType =
  | {
      type: 'input';
      variant: KeyboardVariants;
      key: keyof IUser;
    }
  | {
      type: 'choice';
      choices: string[];
    };

export interface DialogueState {
  currentIndex: number;
  mascotSprite?: ImageSourcePropType;
  mascotDialogue?: string;
  response?: ResponseType;
  redirect?: (params?: string | number) => number;
}
