//EXERCICIO 1
    
//     Crie um função que receba uma `string` com o nome e outra `string` com uma data de nascimento (ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma `string` no seguinte formato:
//     "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 

const NameTeste :string = process.argv[2]
const birthDate:string = process.argv[3]

function presentation(name: string, birthDate: string) : string {



    enum Meses {
        JANEIRO = "Janeiro",
        FEVEREIRO = "Fevereiro",
        MARCO = "Março",
        ABRIL = "Abril",
        MAIO = "Maio",
        JUNHO = "Junho",
        JULHO = "Julho",
        AGOSTO = "Agosto",
        SETEMBRO = "Setembro",
        OUTUBRO = "Outubro",
        NOVEMBRO = "Novembro",
        DEZEMBRO = "Dezembro",
    }

    const separatedDate: string[] =  birthDate.split("/")  // [ 05, 06, 2000 ]


    type date = {
        day: number,
        month: number|string,
        year: number
    }

    const birth: date = {
        day: Number(separatedDate[0]),
        month: Number(separatedDate[1]),
        year: Number(separatedDate[2]),
    }


    switch (birth.month) {
        case 1:
            birth.month = Meses.JANEIRO
            break
        case 2:
            birth.month = Meses.FEVEREIRO
            break
        case 3:
            birth.month = Meses.MARCO
            break
        case 4:
            birth.month = Meses.ABRIL
            break
        case 5:
            birth.month = Meses.MAIO
            break
        case 6:
            birth.month = Meses.JUNHO
            break
        case 7:
            birth.month = Meses.JULHO
            break
        case 8:
            birth.month = Meses.AGOSTO
            break
        case 9:
            birth.month = Meses.SETEMBRO
            break
        case 10:
            birth.month = Meses.OUTUBRO
            break
        case 11:
            birth.month = Meses.NOVEMBRO
            break
        case 12:
            birth.month = Meses.DEZEMBRO
            break
    }
    return `Olá me chamo ${name}, nasci no dia ${birth.day} do mês de ${birth.month} do ano de ${birth.year}`

}

//FUNCIONANDO !!! :D
console.log(presentation(NameTeste,birthDate))