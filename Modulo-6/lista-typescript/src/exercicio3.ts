//EXERCICIO 3
// Você foi contratado por um serviço de streaming para organizar o sistema de catálogos de filmes. 
// Cada filme possui 3 informações essenciais: 1. nome do filme; 2. ano de lançamento e 3. gênero do filme. 
// Os gêneros da plataforma se limitam aqueles encontrados no seguinte `ENUM` de gêneros:



enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type film = {
    name: string,
    releaseDate: number
    genre: string
    score?: number
}

function manageFilms(name: string, releaseDate: number, genre: string, score?: number): film {

    const MoovieDetails: film = {
        name: name,
        releaseDate: releaseDate,
        genre: genre,
        score: score
    }

    return MoovieDetails
}
//COM score
console.table([manageFilms("Jogos Mortais", 1884, "Terror", 8)])

//SEM score
console.table([manageFilms("Jogos Mortais", 1884, "Terror")])