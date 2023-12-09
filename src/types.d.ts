import { Dispatch, SetStateAction } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export type StateType = 'default' | 'open' | 'closed';
export type StateDispatcher<T> = Dispatch<SetStateAction<T>>;
export type JSXStyles = StyleProp<ViewStyle>;

type Nullable<T> = T | null;

export interface ModuleProgressState {
  currentIndex: number;
  backgroundSprite: Nullable<ImageSourcePropType>;
  characterSprite: Nullable<ImageSourcePropType>;
  mascotSprite: Nullable<string>;
  speakerName: Nullable<string>;
  characterDialogue: Nullable<string>;
  mascotDialogue: Nullable<string>;
  summaryUpdate: Nullable<string>;
  audio: Nullable<string>;
}

type MascotDialogueType = ChoiceDialogueType;

interface ChoiceDialogueType {
  question: string;
  choices?: ChoiceType[];
}

interface ChoiceType {
  text: string;
  nextDialogueIndex: number;
}

interface ModuleState {
  progressState: Partial<ModuleProgressState>;
  isCompleted: boolean;
}

type StateDispatcher<T> = React.Dispatch<React.SetStateAction<T>>;
