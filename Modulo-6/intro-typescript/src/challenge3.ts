const revertWordOrder: (word: string) => void = (word) => {

    let newWord = word.split("").reverse().join("")
    console.log(newWord)

}

const WordTest:string = process.argv[2]
revertWordOrder(WordTest)