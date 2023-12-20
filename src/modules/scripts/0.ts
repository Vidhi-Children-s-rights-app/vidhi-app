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
      key: 'phone'
    },
    redirect: () => 16
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
      key: 'name'
    },
    redirect: (params) =>
      params && (params as string).trim().length < 3 ? 7 : 8
  },
  {
    currentIndex: 7,
    mascotDialogue: 'login_ques.full_name',
    redirect: () => 6
  },
  {
    currentIndex: 8,
    mascotDialogue: 'login_ques.nice_to_meet_you'
  },
  {
    currentIndex: 9,
    mascotDialogue: 'login_ques.age',
    response: {
      type: 'input',
      key: 'age'
    },
    redirect: (params) => ((params as number) < 18 ? 10 : 11)
  },
  {
    currentIndex: 10,
    mascotDialogue: 'login_ques.patience_text',
    redirect: () => 12
  },
  {
    currentIndex: 11,
    mascotDialogue: 'login_ques.more_details'
  },
  {
    currentIndex: 12,
    mascotDialogue: 'login_ques.num_ask_nicely',
    response: {
      type: 'input',
      key: 'phone'
    },
    redirect: (params) =>
      Math.floor(Math.log10(params as number)) + 1 !== 10 ? 13 : 14
  },
  {
    currentIndex: 13,
    mascotDialogue: 'login_ques.num_ask_rudely',
    redirect: () => 12
  },
  {
    currentIndex: 14,
    mascotDialogue: 'login_ques.last_step',
    response: {
      type: 'input',
      key: 'password'
    }
  },
  {
    currentIndex: 15,
    mascotDialogue: 'login_ques.go',
    redirect: () => 0
  },
  {
    currentIndex: 16,
    mascotDialogue: 'login_ques.pass_ask',
    response: {
      type: 'input',
      key: 'password'
    },
    redirect: () => 3
  }
];

export const firstFrame = script[1];
