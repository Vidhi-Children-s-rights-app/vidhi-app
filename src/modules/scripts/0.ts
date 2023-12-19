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
    mascotDialogue: 'login_ques.new_user',
    response: {
      type: 'choice',
      choices: ['YES', 'NO']
    },
    redirect: (params) => (params === 0 ? 6 : 2)
  },
  {
    currentIndex: 2,
    mascotDialogue: 'login_ques.name_ask',
    response: {
      type: 'input',
      variant: 'email'
    }
  },
  {
    currentIndex: 3,
    mascotDialogue: 'login_ques.confirm_name',
    response: {
      type: 'choice',
      choices: ['YES', 'NO']
    },
    redirect: (params) => (params === 0 ? 4 : 5)
  },
  {
    currentIndex: 4,
    mascotDialogue: 'login_ques.welcome',
    redirect: () => 0
  },
  {
    currentIndex: 5,
    mascotDialogue: 'login_ques.double_check',
    redirect: () => 2
  },
  {
    currentIndex: 6,
    mascotDialogue: 'login_ques.name',
    response: {
      type: 'input',
      variant: 'text'
    }
  },
  {
    currentIndex: 7,
    mascotDialogue:
      'login_ques.nice_to_meet_you',
    redirect: () => 0
  }
];

export const firstFrame = script[1];
