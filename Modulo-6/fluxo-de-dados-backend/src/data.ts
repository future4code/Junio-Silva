// Cada produto será representado por um objeto com propriedades: id (`string`), name (`string`) e price (`number`). 
//Popule manualmente o array com pelo menos 3 produtos.

export type product = {
    id: number;
    name: string;
    price: number;
}

export const produtos: Array<product> = [
    {
        id:  1,
        name: "celular",
        price: 1600
    },

    { 
        id:  2,
        name: "televisão",
        price: 2000   
    },

    {
        id:  3,
        name: "computador",
        price: 3500
    },

    {    id:  4,
    name: "tablet",
    price: 1900
    },
    
    { 
        id:  5,
        name: "mouse",
        price: 180
    }
]