import React , {useState, useEffect} from "react";
import axios from 'axios';

export function UseTripRequest(url, initialState) {
    const [Data,setData] =  useState(initialState)

    useEffect(() =>  {
        axios.get(url).then(res =>{
            setData(res.data.trips)
        }).catch((err) =>{})
    })
    return Data
}

//// testando autorização;

