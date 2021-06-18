// Rename keys in the object
// renameKeys({ a: 1, b: 2 }, { a: "newName" })
// -> { newName: 1, b: 2 }
const renameKeys = (object, keyMap) => {
  Object.entries(keyMap).forEach(([oldKey, newKey]) => {
    if (!object.hasOwnProperty(oldKey)) return;

    object[newKey] = object[oldKey];
    delete object[oldKey];
  });

  return object;
};

export default renameKeys;
