import axios from "axios";
import React , { useState, useEffect } from "react";
import styled from 'styled-components'



let ListCard = styled.div`
display:flex;
flex-direction: column;
width:95%;
height: 97%;
box-shadow: inset 0 0 3px 1px #DCDCDC;
overflow: auto;
margin: 15px;
padding: 10px;
`

let CardMatchList = styled.div`
display: flex;
align-items: center;
height: 3em;
margin: 5px 5px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);

`

let ImgCardMatchList = styled.img`
height: 100%;
width: 50px;
margin-right: 1em;
`

export default function MatchesList() {

    const [list, setList] = useState([])

    const requestMatches = async () => {
        let list = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/junio-silva-joy/matches")

        try{
            setList(list.data.matches)
        }catch(err){
            console.log(err, "erro!")
        }
    }

    useEffect(requestMatches, [])
    
    let mappedList = list.map((match)=> {
        return(
            <CardMatchList key={match.id}>
                <ImgCardMatchList src={match.photo} /> <p>{match.name}, {match.age} </p>
            </CardMatchList>
        )
    })
 
    console.log(list)
    return(
        <ListCard>
            <h3> {mappedList.length} matches</h3>
                {mappedList}
        </ListCard>
    )
}