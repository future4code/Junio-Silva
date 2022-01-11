import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import sim from "../assets/sim.png"
import nao from "../assets/nao.png"
import axios from "axios"

let CardContainer = styled.div`
width:95%;
height: 95%;
box-shadow: inset 0 0 10px 1px #DCDCDC;
display: flex;
flex-direction: column;
padding: 10px;
`
let ProfilePhoto = styled.img`
height: 19rem;
width: 23.8rem;
`

let ImageNo = styled.img`
height: 3rem;
`

let ImageYes = styled.img`
height: 3rem;
`
let YesOrNotIcons = styled.div`
height: 7rem;
display: flex;
justify-content: space-around;
align-items: flex-end;  
`

let Description = styled.div`
height: 8rem;
`

export default function ProfileCard() {

    const [user, setUser] = useState({})

    const getUser = async () => {
        let res = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/junior-joy/person")

        try {
            setUser(res.data.profile)
        } catch (err) {
            console.log("Something went wrong!")
        }
    }

    useEffect(()=>{getUser()}, [])

    const choosePerson = async () => {

        let URL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/junio-silva-joy/choose-person"
        let header = { headers: {"Content-Type": "application/json"}}
        console.log(user.id)
        let body = {
            "id": `${user.id}`,
            "choice": true
        };

        let request = await axios.post(URL, body, header)

        try{
            console.log("it works", request.data)
        }catch(err){
            console.log("Error!")
        }
    }

    useEffect(choosePerson, [user])



    return (
        <CardContainer>
            <ProfilePhoto src={user.photo} />
            <Description>
                <h2><strong>{user.name}</strong>, {user.age} </h2>
                <p>{user.bio}</p>
            </Description>
            <YesOrNotIcons>
                <ImageYes src={sim} />
                <ImageNo src={nao} />
            </YesOrNotIcons>
        </CardContainer>
    )
}