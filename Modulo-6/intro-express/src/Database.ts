type user = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string
    posts: Array<post>
}

type post = {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export const usuarios: Array<user> = [
    {
        "id": 1,
        "name": "Joaquim",
        "phone": "(11) 1111-2050",
        "email": "joaquim@yahoo.com.br",
        "website": "www.joaquim.com.br",
        "posts": [
            {
                "userId": 1,
                "id": 1,
                "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
                "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            },
            {
                "userId": 1,
                "id": 2,
                "title": "qui est esse",
                "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
            },
            {
                "userId": 1,
                "id": 3,
                "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
                "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
            }
        ]
    },
    {
        "id": 2,
        "name": "Maria",
        "phone": "(22) 2222-2050",
        "email": "maria@yahoo.com.br",
        "website": "www.maria.com.br",
        "posts": [
            {
                "userId": 2,
                "id": 1,
                "title": "eum et est occaecati",
                "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
            },
            {
                "userId": 2,
                "id": 2,
                "title": "nesciunt quas odio",
                "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
            }
        ]
    },
    {
        "id": 3,
        "name": "Zeca",
        "phone": "(33) 3333-2050",
        "email": "zeca@yahoo.com.br",
        "website": "www.zeca.com.br",
        "posts": [
            {
                "userId": 3,
                "id": 1,
                "title": "dolorem eum magni eos aperiam quia",
                "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
            }
        ]
    },
    {
        "id": 4,
        "name": "Junio",
        "phone": "(31) 97541-6661",
        "email": "Juniorjob21@gmail.com",
        "website": "www.naotem.com.br",
        "posts": []
    },
    {
        "id": 5,
        "name": "Kelly",
        "phone": "(55) 5555-2050",
        "email": "kelly@yahoo.com.br",
        "website": "www.kelly.com.br",
        "posts": []
    }
]
