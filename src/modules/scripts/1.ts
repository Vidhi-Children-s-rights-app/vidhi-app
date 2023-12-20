import { ModuleProgressState } from '../../types';

// export const sprites = {
//   mascot: require('../../assets/module/amogus.png'),
//   bg: require('../../assets/module/bg.jpeg')
// };

// export const sounds = {
//   bgm: require('../../assets/module/sounds/30SecondClassical.mp3')
// };

export const script: Partial<ModuleProgressState>[] = [
  {
    currentIndex: 0
  },
  {
    currentIndex: 1,
    characterDialogue: 'What do I do..? *sobs*'
  },
  {
    currentIndex: 2,
    mascotDialogue: 'Hey little girl, Why are you crying?'
  },
  {
    currentIndex: 3,
    characterDialogue:
      'My name is Reena.I have completed my primary education at a local school last year.'
  },
  {
    currentIndex: 4,
    characterDialogue:
      '...But my parents are saying that I cannot go to high school anymore.'
  },
  {
    currentIndex: 5,
    mascotDialogue: 'Why?'
  },
  {
    currentIndex: 6,
    characterDialogue:
      'I have only one government high school near me, and its fees are too high for my parents to afford.'
  },
  {
    currentIndex: 7,
    characterDialogue:
      '...Also, they have a tough screening test for admission, which I am not sure that I can pass.'
  },
  {
    currentIndex: 8,
    mascotDialogue: 'Don’t cry Reena, it will be alright.'
  },
  {
    currentIndex: 9,
    mascotDialogue:
      'There must be some way to let Reena continue her schooling.'
  },
  {
    currentIndex: 10,
    mascotDialogue: {
      question: 'What should Reena do?',
      choices: [
        {
          text: 'Drop out of school.',
          skipToIndex: 11
        },
        {
          text: 'Tell her teacher about the problem.',
          skipToIndex: 13
        },
        {
          text: 'Steal the money to pay the fees.',
          skipToIndex: 12
        }
      ]
    }
  },
  {
    currentIndex: 11,
    mascotDialogue:
      'For a girl of Reena’s age, going to school will help her learn many important skills, which she cannot get anywhere else.'
  },
  {
    currentIndex: 12,
    mascotDialogue:
      'Stealing from others is a crime and not a solution to the problem, so Reena should look for better solutions.'
  },
  {
    currentIndex: 13,
    mascotDialogue:
      "Good choice. Let's go to your previous school tomorrow and talk to the teacher."
  }
];

export const firstFrame = script[1];
