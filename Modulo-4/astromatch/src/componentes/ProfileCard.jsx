import React , { useState, useEffect } from "react";
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

let ImagemSim = styled.img`
height: 3rem;
`

let ImagemNao = styled.img`
height: 3rem;
`
let YesOrNotIcons = styled.div`
display: flex;
justify-content: space-around;
`

let Description = styled.div`
height: 8rem;
`


export default function ProfileCard() {

    const [user, setUser] = useState({})

const getUser = async () =>{
    let res = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/junior-joy/person")
    
    try{
    setUser(res.data.profile)
    }catch(err){
        console.log("erro!")
    }
}

useEffect( getUser, [])
console.log(user)

    return(
    <CardContainer>
        <ProfilePhoto src={user.photo}/>
        <Description>
            <h2><strong>{user.name}</strong>, {user.age} </h2>
            <p>{user.bio}</p>
        </Description>
        <YesOrNotIcons>
            <ImagemSim src={sim} />
            <ImagemNao src={nao} />
        </YesOrNotIcons>
    </CardContainer>
    )
}