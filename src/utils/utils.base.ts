export const hydrateDialogue = (dialogue: string | undefined): string => {
  const hydratedDialogue = dialogue?.replace('|', 'Siddharth');
  return hydratedDialogue ?? '';
};
