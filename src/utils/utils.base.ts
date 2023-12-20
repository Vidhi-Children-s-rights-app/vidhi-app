export const hydrateDialogue = (
  dialogue: string | undefined,
  name: string | undefined
): string => {
  const hydratedDialogue = dialogue?.replace('|', name ? name : 'Anon');
  return hydratedDialogue ?? '';
};
