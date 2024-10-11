"use strict";
// Create a function `renameKeys` that accepts an object and a mapping of key renames.
// The function should return a new object where the keys are renamed according to the map.
// Return type: a new object with renamed keys.
// function renameKeys<T extends Record<string, any>, K extends Partial<T>>(
//   obj: T,
//   keyMap: K
// ): { [P in keyof T]: T[P] } {
//   const renamedObj: Partial<{ [P in keyof T]: T[P] }> = {};
//   for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key)) {
//       const newKey = key in keyMap ? keyMap[key as keyof K] : key;
//       renamedObj[newKey as keyof T] = obj[key];
//     }
//   }
//   return renamedObj as { [P in keyof T]: T[P] };
// }
function renameKeys(obj, keyMap) {
    const renamedObj = {};
    for (const key in keyMap) {
        const beforeVal = obj[key];
        const afterKey = keyMap[key];
        delete obj[key];
        renamedObj[afterKey] = beforeVal;
    }
    return { ...renamedObj, ...obj };
}
// Expected output:
console.log(renameKeys({ name: "Alice", age: 30 }, { name: "fullName" }));
// { fullName: "Alice", age: 30 }
