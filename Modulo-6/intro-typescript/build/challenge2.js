"use strict";
const DNAtoRNA = (DNA) => {
    let DNAletters = DNA.split("");
    let RNAletters = DNAletters.map((letter) => {
        switch (letter) {
            case "A":
                return "U";
                break;
            case "T":
                return "A";
                break;
            case "C":
                return "G";
                break;
            case "G":
                return "C";
                break;
        }
    });
    let RNA = RNAletters.join("");
    console.log(RNA);
};
const DNA = process.argv[2];
DNAtoRNA(DNA);
//# sourceMappingURL=challenge2.js.map