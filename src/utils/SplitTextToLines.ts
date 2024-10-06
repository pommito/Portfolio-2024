export const SplitTextToLines = (text: string): string[] => {
  return text.split('\n').map((line) => {
    return line.trim();
  });
};
