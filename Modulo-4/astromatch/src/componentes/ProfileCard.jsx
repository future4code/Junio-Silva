import React, { useState, useEffect } from "react";
import styled from 'styled-components'
import sim from "../assets/sim.png"
import nao from "../assets/nao.png"
import axios from "axios"

let CardContainer = styled.div`
width:95%;
height: 99%;
box-shadow: inset 0 0 10px 1px #DCDCDC;
display: flex;
flex-direction: column;
padding: 10px;
position: relative;
`
let ProfilePhoto = styled.img`
height: 440px;
width: 100%;
`

let ImageNo = styled.img`
opacity: 75%;
height: 3rem;

&:hover { opacity: 100%;
    height: 3.1rem;}
&:active { opacity:30%;}
`
let ImageYes = styled.img`
opacity: 75%;
height: 3rem;

&:hover { opacity: 100%;
    height: 3.1rem;}
&:active { opacity:30%;}
`

let YesOrNotIcons = styled.div`
height: 6rem;
display: flex;
justify-content: space-around;
align-items: center;  
`

let Description = styled.div`
position: absolute;
height: 8rem;
z-index: 2;
top: 310px;
background-color: rgba(255, 255, 255, 0.);
line-height:3rem;
& > h2 {
margin: 2px 15px;
color:white;
}

& > p {
margin: 2px 15px;
color:white;
font-size: 16px
}

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