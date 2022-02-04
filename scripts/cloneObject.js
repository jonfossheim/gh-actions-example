export const cloneObject = (object) => {
  return { ...object };
};

const Person = {
  name: 'Jon',
  age: 24,
};

let jon = cloneObject(Person);
