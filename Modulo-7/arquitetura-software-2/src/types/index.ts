export type user = {
    id: string,
    name: string,
    nickname: string,
    email: string,
    password: string
}

export type task = {
    id: string,
    title: string,
    description: string,
    deadline: string,
    authorId: string
}