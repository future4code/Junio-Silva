

const subscriptionLabenu: (age: number, highSchool: boolean, hours: number, modality: string) =>  boolean = (age, highSchool, hours, modality) => {

    const validation: boolean = age > 18 && highSchool === true && hours > 40

    if(validation) {
       console.log("Parabéns, Você pode se inscrever no curso!")
    }else{
        console.log("Sinto muito, Você não pode se inscrever no curso!")
    }

    return validation
}

const age:number = Number(process.argv[2])
const highSchool: boolean = Boolean(process.argv[3])
const hours:number = Number(process.argv[4])
const modality = process.argv[5]

console.log(subscriptionLabenu(age, highSchool, hours, modality))