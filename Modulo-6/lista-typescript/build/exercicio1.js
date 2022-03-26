const Name = process.argv[2];
const birthDate = process.argv[3];
function presentation(name, birthDate) {
    let Meses;
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
    const separatedDate = birthDate.split("/");
    const birth = {
        day: Number(separatedDate[0]),
        month: Number(separatedDate[1]),
        year: Number(separatedDate[2]),
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
    return `Olá me chamo ${name}, nasci no dia ${birth.day} do mês de ${birth.month} do ano de ${birth.year}`;
}
console.log(presentation(Name, birthDate));
//# sourceMappingURL=exercicio1.js.map