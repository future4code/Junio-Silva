"use strict";
const subscriptionLabenu = (age, highSchool, hours, modality) => {
    const validation = age > 18 && highSchool === true && hours > 40;
    if (validation) {
        console.log("Parabéns, Você pode se inscrever no curso!");
    }
    else {
        console.log("Sinto muito, Você não pode se inscrever no curso!");
    }
    return validation;
};
const age = Number(process.argv[2]);
const highSchool = Boolean(process.argv[3]);
const hours = Number(process.argv[4]);
const modality = process.argv[5];
console.log(subscriptionLabenu(age, highSchool, hours, modality));
//# sourceMappingURL=challenge4.js.map