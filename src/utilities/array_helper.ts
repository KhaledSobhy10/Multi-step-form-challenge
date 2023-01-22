export const cloneArray1LEVEL = (myArray: any[]) => {
  return myArray.map((a) => ({ ...a }));
};
