//EXERCICIO 1
//     Crie um função que receba uma `string` com o nome e outra `string` com uma data de nascimento (ex.: “24/04/1993”). A função deve separar o dia, o mês e ano e retornar uma `string` no seguinte formato:
//     "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}" 
var Name = process.argv[2];
var birthDate = process.argv[3];

function presentation(name, birthDate) {
    var Meses;
    (function (Meses) {
        Meses["JANEIRO"] = "Janeiro";
        Meses["FEVEREIRO"] = "Fevereiro";
        Meses["MARCO"] = "Mar\u00E7o";
        Meses["ABRIL"] = "Abril";
        Meses["MAIO"] = "Maio";
        Meses["JUNHO"] = "Junho";
        Meses["JULHO"] = "Julho";
        Meses["AGOSTO"] = "Agosto";
        Meses["SETEMBRO"] = "Setembro";
        Meses["OUTUBRO"] = "Outubro";
        Meses["NOVEMBRO"] = "Novembro";
        Meses["DEZEMBRO"] = "Dezembro";
    })(Meses || (Meses = {}));
    var separatedDate = birthDate.split("/");
    var birth = {
        day: Number(separatedDate[0]),
        month: Number(separatedDate[1]),
        year: Number(separatedDate[2])
    };
    switch (birth.month) {
        case 1:
            birth.month = Meses.JANEIRO;
            break;
        case 2:
            birth.month = Meses.FEVEREIRO;
            break;
        case 3:
            birth.month = Meses.MARCO;
            break;
        case 4:
            birth.month = Meses.ABRIL;
            break;
        case 5:
            birth.month = Meses.MAIO;
            break;
        case 6:
            birth.month = Meses.JUNHO;
            break;
        case 7:
            birth.month = Meses.JULHO;
            break;
        case 8:
            birth.month = Meses.AGOSTO;
            break;
        case 9:
            birth.month = Meses.SETEMBRO;
            break;
        case 10:
            birth.month = Meses.OUTUBRO;
            break;
        case 11:
            birth.month = Meses.NOVEMBRO;
            break;
        case 12:
            birth.month = Meses.DEZEMBRO;
            break;
    }
    return "Ol\u00E1 me chamo ".concat(name, ", nasci no dia ").concat(birth.day, " do m\u00EAs de ").concat(birth.month, " do ano de ").concat(birth.year);
}
//FUNCIONANDO !!! :D
console.log(presentation(Name, birthDate));
