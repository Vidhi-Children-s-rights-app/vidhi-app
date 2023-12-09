type Nullable<T> = T | null;

interface ModuleProgressState {
  currentIndex: number;
  backgroundSprite: Nullable<string>;
  speakerSprite: Nullable<string>;
  mascotSprite: Nullable<string>;
  speakerName: Nullable<string>;
  speakerDialogue: Nullable<string>;
  mascotDialogue: Nullable<string>;
  summaryUpdate: Nullable<string>;
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
