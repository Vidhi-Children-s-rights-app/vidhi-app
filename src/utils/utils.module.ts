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
