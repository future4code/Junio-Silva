import { v4 as idGenerator } from 'uuid';

// Cada produto será representado por um objeto com propriedades: id (`string`), name (`string`) e price (`number`). 
//Popule manualmente o array com pelo menos 3 produtos.

export type product = {
    id: string;
    name: string;
    price: number;
}

export const productsList: Array<product> = [
    {
        id:  idGenerator(),
        name: "celular",
        price: 1600
    },

    { 
        id:  idGenerator(),
        name: "televisão",
        price: 2000   
    },

    {
        id:  idGenerator(),
        name: "computador",
        price: 3500
    },

    {            
        id:  idGenerator(),
        name: "tablet",
        price: 1900
    },
    
    { 
        id:  idGenerator(),
        name: "mouse",
        price: 180
    }
]