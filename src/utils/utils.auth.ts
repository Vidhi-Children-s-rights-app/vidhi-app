import { DialogueState } from '../types';
import { script } from '../modules/scripts/0';

export const getNextState = ({
  dialogueState,
  params
}: {
  dialogueState: DialogueState;
  params?: string | number;
}): DialogueState => {
  const skipToIndex =
    dialogueState.redirect && params !== undefined
      ? dialogueState.redirect(params)
      : dialogueState.currentIndex + 1;
  return {
    ...dialogueState,
    redirect: undefined,
    response: undefined,
    ...script[skipToIndex]
  };
};
