import axios from "axios";
import React, { useState, useEffect } from "react";
import styled from 'styled-components'

let ListCard = styled.div`
display:flex;
flex-direction: column;
width:95%;
height: 98%;
box-shadow: inset 0 0 3px 1px #DCDCDC;
overflow: auto;
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
margin: 1em;
border-radius: 50%;
`
let ClearButton = styled.button`
opacity: 85%;
border-radius: 10px;
border: none;
box-shadow: 0 0 10px rgba(0,0,0,0.15);
cursor: pointer;
font-size: 12px;
font-weight: 700;
padding: 10px 40px;
background-color: #ce8ce0;
color: black;
&:hover{
    opacity: 1;
    transform: scale(0.98);
}
&:active{
    opacity: 0.7;
}
`

let BtnContainer = styled.div`
height: 50px;
`

export default function MatchesList(props) {

    const [list, setList] = useState([])

    const requestMatches = async () => {
        let list = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/juninho-j/matches")

        try {
            setList(list.data.matches)
        } catch (err) {
            console.log(err, "something went wrong!")
        }
    }

    useEffect(() => { requestMatches() }, [props.user])

    let mappedList = list.map((match) => {
        return (
            <CardMatchList key={match.id}>
                <ImgCardMatchList src={match.photo} /> <p>{match.name}, {match.age} </p>
            </CardMatchList>
        )
    })

    const clearList = async () => {
        let URL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/juninho-j/clear"

        let body = {
            "id": "PatusZf4mHH6UoZfYC8I"
        };

        let header = { headers: { "Content-Type": "application/json" } }

        let res = await axios.put(URL, body, header)
        try { console.log(res.data.message) } catch (err) { console.log(err.data) }
        requestMatches()
    }

    return (
        
        <>
            <ListCard>
                <h3> {mappedList.length} matches</h3>
                {mappedList}
            </ListCard>
            <BtnContainer>
                <ClearButton onClick={clearList}> Clear History  </ClearButton>
            </BtnContainer>

        </>
    )
}