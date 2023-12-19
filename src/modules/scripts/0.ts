import { DialogueState } from '../../types';
import { mascot_1 } from '../../assets/images';

// export const sprites = {
//   mascot_urja_1: mascot_1
// };

export const script: DialogueState[] = [
  {
    currentIndex: 0 // completed state
  },
  {
    currentIndex: 1,
    mascotSprite: mascot_1,
    mascotDialogue: 'Are you new here?',
    response: {
      type: 'choice',
      choices: ['YES', 'NO']
    },
    redirect: (params) => (params === 0 ? 6 : 2)
  },
  {
    currentIndex: 2,
    mascotDialogue: 'Can you quickly tell me your email address?',
    response: {
      type: 'input',
      variant: 'email'
    }
  },
  {
    currentIndex: 3,
    mascotDialogue: 'Are you | ?',
    response: {
      type: 'choice',
      choices: ['YES', 'NO']
    },
    redirect: (params) => (params === 0 ? 4 : 5)
  },
  {
    currentIndex: 4,
    mascotDialogue: 'So good to see you back!',
    redirect: () => 0
  },
  {
    currentIndex: 5,
    mascotDialogue: 'Oops! Looks like we need to double check the details',
    redirect: () => 2
  },
  {
    currentIndex: 6,
    mascotDialogue: 'Hello friend... I am Urja! who are you?',
    response: {
      type: 'input',
      variant: 'text'
    }
  },
  {
    currentIndex: 7,
    mascotDialogue:
      'Nice to meet you |, I can already tell that we will be the bestest friends.',
    redirect: () => 0
  }
];

export const firstFrame = script[1];
