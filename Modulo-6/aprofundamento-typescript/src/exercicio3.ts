//a)Copie o código acima para um arquivo .ts depois:
// Considere que você esteja implementando uma rede social composta por posts de usuários. Cada um dos posts possui: um autor e um texto.
// Copie o código acima para um arquivo .ts depois:
// - crie um *type* para representar um post;
// - Utilize esse mesmo tipo criado acima para fazer a tipagem do array posts.
// b) Observe abaixo a função buscarPostsPorAutor(), escrita em JavasScript:

type post = {
    autor: string;
    texto: string
}

const posts: Array<post> = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]


function buscarPostsPorAutor(posts: Array<post>, autorInformado: string) : Array<post> {
  return posts.filter(
    (post) => {
        return post.autor === autorInformado
    }
    )
}

//FUNCIONANDO :D
console.log(buscarPostsPorAutor(posts, "Dobby" ))
