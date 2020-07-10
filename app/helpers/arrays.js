// random size between 1 and 2
const getRandomSize = () => Math.floor(Math.random() * 2) + 1;

export const groupRandomly = values => {
  const originalValues = values;
  const newValues = [];
  values.forEach(value => {
    const size = getRandomSize();
    newValues.push(originalValues.splice(size * -1));
  });
  return newValues;
};
