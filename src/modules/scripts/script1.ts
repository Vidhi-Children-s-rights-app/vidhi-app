import { ModuleProgressState } from '@/types';

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
    mascotDialogue: 'fuck you ur sus af 3'
  }
];
