//função que recebe CPF 111.222.333.55

import { convertCompilerOptionsFromJson } from "typescript"


// function validaCpf (cpf: string): void {

//    let  cpf:string = "119.558.116-52"
//    let newCpf: any = cpf.replace(/./g," ")

let exemplo: any = "119.558.116-52"
let resultado  : any = exemplo.replace(".", " ").replace(".", " ").trim()
    
// }

console.log(resultado)