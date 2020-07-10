import {isEven} from './numeric';

export const groupInPairs = values =>
  values.reduce((result, value, index, array) => {
    if (isEven(index)) {
      result.push(array.slice(index, index + 2));
    }
    return result;
  }, []);
