const addToy = (array: (string | undefined | null)[], type: string, max: number): (string | undefined | null)[] => {

  if (array.length < max) {
    array.push(type);
    return array;
  }

  return array;
}

export default addToy;
