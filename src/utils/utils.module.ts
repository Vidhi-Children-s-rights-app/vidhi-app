export const getNextState = (
  script: Partial<ModuleProgressState>[],
  moduleState: ModuleState
): ModuleState => {
  return {
    progressState: {
      ...moduleState.progressState,
      ...script[moduleState.progressState.currentIndex! + 1]
    },
    isCompleted:
      moduleState.progressState.currentIndex! + 1 >= script.length - 1
  };
};

export const getDelay = (moduleState: ModuleState): number => {
  const delay = Math.max(
    moduleState.progressState.speakerDialogue?.length ?? 0,
    moduleState.progressState.mascotDialogue?.length ?? 0
  );
  return delay * 0.2;
};
