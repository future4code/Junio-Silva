var GENERO;
(function (GENERO) {
    GENERO["ACAO"] = "a\u00E7\u00E3o";
    GENERO["DRAMA"] = "drama";
    GENERO["COMEDIA"] = "com\u00E9dia";
    GENERO["ROMANCE"] = "romance";
    GENERO["TERROR"] = "terror";
})(GENERO || (GENERO = {}));
function manageFilms(name, releaseDate, genre, score) {
    const MoovieDetails = {
        name: name,
        releaseDate: releaseDate,
        genre: genre,
        score: score
    };
    return MoovieDetails;
}
console.table([manageFilms("Jogos Mortais", 1884, "Terror", 8)]);
console.table([manageFilms("Jogos Mortais", 1884, "Terror")]);
//# sourceMappingURL=exercicio3.js.map