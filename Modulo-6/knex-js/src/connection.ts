import knex from "knex";

export const connection = knex({
    client:"mysql",
    connection: {
        host:"35.226.146.116",
        port:3306,
        user: "419713-junio-silva",
        password: "5p2EZkdn#5qzLKOWLLVs",
        database: "joy-419713-junio-silva",
        multiStatements: true
    }
})