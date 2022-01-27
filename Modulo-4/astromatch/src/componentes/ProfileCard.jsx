import React, { useEffect } from "react";
import styled from 'styled-components'
import sim from "../assets/sim.png"
import nao from "../assets/nao.png"
import axios from "axios"

let CardContainer = styled.div`
width:100%;
height: 94.8%;
box-shadow: inset 0 0 10px 1px #dbb8e4;
display: flex;
flex-direction: column;
padding: 10px;
position: relative;
`
let ProfilePhoto = styled.img`
max-height: 440px;
min-height: 440px;
height: 440px;
width: 100%;
`

let ImageNo = styled.img`
opacity: 75%;
height: 3rem;

&:hover { opacity: 100%;
    height: 3.1rem;}
&:active { opacity:70%;}
`
let ImageYes = styled.img`
opacity: 75%;
height: 3rem;

&:hover { opacity: 100%;
    height: 3.1rem;}
&:active { opacity:70%;}
`

let YesOrNotIcons = styled.div`
height: 6rem;
display: flex;
justify-content: space-around;
align-items: center;  
`

let Description = styled.div`
position: absolute;
height: 8.0rem;
width: 95%;
z-index: 2;
top: 323px;
background-color: rgba(137, 110, 155, 0.6);
line-height:3rem;
border-radius: 5px;
& > h2 {
margin: 0 15px;
color:white;

}

& > p {
margin: 2px 15px;
color:white;
font-size: 14px
}

`

export default function ProfileCard(props) {
    const getUser = async () => {
        let res = await axios.get("https://us-central1-missao-newton.cloudfunctions.net/astroMatch/juninho-j/person")

        try {
            props.setUser(res.data.profile)
        } catch (err) { 
            console.log("Estado",props.user, "erro;", err ,"Something went wrong!")
        }
    }
   

useEffect(() => { getUser() }, [])  

    const choosePerson = async () => {

        let URL = "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/juninho-j/choose-person"
        let header = { headers: { "Content-Type": "application/json" } }
        let body = {
            "id": `${props.user.id}`,
            "choice": true
        };

        let request = await axios.post(URL, body, header)

        try {
            console.log("request sent!")
            getUser()
        } catch (err) {
            console.log("Error!")
        }
    }


    return (
        <CardContainer>
            <ProfilePhoto src={props.user.photo} />
            <Description>
                <h2><strong>{props.user.name}</strong>, {props.user.age} </h2>
                <p>{props.user.bio}</p>
            </Description>
            <YesOrNotIcons>
                <ImageYes src={sim} onClick={choosePerson} />
                <ImageNo src={nao} onClick={getUser} />
            </YesOrNotIcons>
        </CardContainer>
    )
}