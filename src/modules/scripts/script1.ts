import { ModuleProgressState } from '@/types';

export const sprites = {
  mascot: require('../../assets/module/amogus.png'),
  bg: require('../../assets/module/bg.jpeg')
};

export const audio = {
  bgm: require('../../assets/sounds/30SecondClassical.mp3')
};

export const script: Partial<ModuleProgressState>[] = [
  { currentIndex: 0 }, //index 0
  {
    currentIndex: 1,
    backgroundSprite: sprites['bg'],
    characterSprite: sprites['mascot'],
    mascotDialogue: 'fuck you ur sus af2',
    audio: audio['bgm']
  },
  {
    currentIndex: 2,
    characterSprite: null,
    mascotDialogue: 'fuck you ur sus af 3',
    audio: null
  }
];
