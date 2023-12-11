import { ModuleProgressState } from '../../types';

export const sprites = {
  mascot: require('../../assets/module/amogus.png'),
  bg: require('../../assets/module/bg.jpeg')
};

export const sounds = {
  bgm: require('../../assets/module/sounds/30SecondClassical.mp3')
};

export const script: Partial<ModuleProgressState>[] = [
  {
    currentIndex: 0
    // mascotDialogue: 'fake dialogue'
  }, //index 0
  {
    currentIndex: 1,
    backgroundSprite: sprites['bg'],
    characterSprite: sprites['mascot'],
    mascotDialogue: 'fuck you ur sus af2..fuck',
    audio: sounds['bgm']
  },
  {
    currentIndex: 2,
    characterSprite: null,
    audio: null,
    mascotDialogue: {
      question:
        'What should. Ratan do... Is there no way he can manage both? ...',
      choices: [
        {
          text: 'drop out of school',
          skipToIndex: 4
        },
        {
          text: 'tell his teacher about it',
          skipToIndex: 2
        },
        {
          text: 'borrow money from someone',
          skipToIndex: 1
        }
      ]
    }
  }
];
