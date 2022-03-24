"use strict";
const revertWordOrder = (word) => {
    let newWord = word.split("").reverse().join("");
    console.log(newWord);
};
const WordTest = process.argv[2];
revertWordOrder(WordTest);
//# sourceMappingURL=challenge3.js.map