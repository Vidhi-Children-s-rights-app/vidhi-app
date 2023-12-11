import { ModuleProgressState } from '../../types';

export const sprites = {
  mascot: require('../../assets/module/amogus.png'),
  bg: require('../../assets/module/bg.jpeg')
};

export const script: Partial<ModuleProgressState>[] = [
  { currentIndex: 0 }, //index 0
  {
    currentIndex: 1,
    backgroundSprite: sprites['bg'],
    characterSprite: sprites['mascot'],
    mascotDialogue: 'fuck you ur sus af2'
  },
  {
    currentIndex: 2,
    characterSprite: null,
    mascotDialogue: {
      question:
        'What should Ratan do... Is there no way he can manage both? ...',
      choices: [
        {
          text: 'drop out of school',
          nextDialogueIndex: 4
        },
        {
          text: 'tell his teacher about it',
          nextDialogueIndex: 2
        },
        {
          text: 'borrow money from someone',
          nextDialogueIndex: 1
        }
      ]
    }
  }
];
