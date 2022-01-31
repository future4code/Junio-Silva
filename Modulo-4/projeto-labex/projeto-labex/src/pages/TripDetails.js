import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios';
import {useParams} from 'react-router-dom'
import {BASE_URL} from '../constants/constants'

const MainContainerStyled = styled.div`
height: 91vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
position: relative;
>h1{
    color:white;
    margin: .5 0 em;
    font-size: 2.5em;
    font-weight: bold;
}
>h3{
    color: rgb(216,205,223);
    margin: 0 0 .5em 0;
    font-size: 1.5em;
    font-weight: bold;
}
>div{
    display: flex;
    align-items: center;
}
`

const CardContainer1 = styled.div`
padding: 3em;
display: flex;
flex-direction: column;
justify-content: space-around;
text-align: flex-start;
height: 60vh;
width: 30vw;
border-radius: 5%;
margin: 20px .5em;
>h3 {
    text-align: center;
    font-weight: bold;
   font-size: 30px;
   margin: 1em;
}



font-family: 'Courier New';
background-color: rgba(255,255,255, 0.8);
line-height: 1.5em;
letter-spacing: 0.2em;
border-radius: 5px;
padding: 1.5em;
-webkit-box-shadow: inset 0px 0px 4px 4px rgba(50, 50, 50, 0.75);
-moz-box-shadow:    inset 0px 0px 4px 4px rgba(50, 50, 50, 0.75);
box-shadow:         inset 0px 0px 4px 2px rgba(0,0,0, 0.5);

`
const CandidatesContainer =  styled.div`
height:2em;
width: 90%;
background-color: rgba(255,255,255, 0.8);
margin: 10px;
line-height: 1.5em;
letter-spacing: 0.1em;
border-radius: 5px;
padding: 10px 15px;
-webkit-box-shadow: inset 0px 0px 4px 4px rgba(50, 50, 50, 0.75);
-moz-box-shadow:    inset 0px 0px 4px 4px rgba(50, 50, 50, 0.75);
box-shadow:         inset 0px 0px 4px 2px rgba(0,0,0, 0.5);

>p{
    font-family: 'Courier New';
}`

const CardContainer2 = styled.div`
padding: 3em;
display: flex;
flex-direction: column;
justify-content: space-around   ;
text-align: center;
height: 75vh;
width: 60vw;
margin: 20px .5em;
font-family: 'Courier New';
background-color: rgba(255,255,255, 0.8);
line-height: 1.5em;
letter-spacing: 0.1em;
border-radius: 5px;
padding: 10px 15px;
-webkit-box-shadow: inset 0px 0px 4px 4px rgba(50, 50, 50, 0.75);
-moz-box-shadow:    inset 0px 0px 4px 4px rgba(50, 50, 50, 0.75);
box-shadow:         inset 0px 0px 4px 2px rgba(0,0,0, 0.5);

>h3 {
   color: white;
   font-size: 20px;
}
`

const TripDetails = () => {
    
    const {id} = useParams()
    const [details,setDetails] =  useState({})

    useEffect(() =>  {
        
        console.log("fazendo requisição")
        axios.get(`${BASE_URL}/trip/${id}`,{
            headers: {
                auth : localStorage.getItem('token')
            }}).then((res) =>{
            setDetails(res.data.trip)
            console.log(res.data.trip)
        }).catch((err) =>{console.log("erro!", err)})
    },[])


    console.log(details)
    // const Candidates = details.candidates.map((object)=>{
    //     return(
    //         <div>
    //             <p>Nome: {object.name}</p>
    //             <p>Idade: {candidate.age}</p>
    //             <p>Profissão {candidate.profession}</p>
    //             <p>País: {candidate.country}</p>
    //             <p>Texto de candidatura: {candidate.applicationText}</p>
    //             {candidate.name}
    //         </div>
    //     )
    // })

    return (
        <MainContainerStyled>
            
            <h1>{details.name}</h1>
            <h3>Painel de configurações</h3>
            <div>
                <CardContainer1> 
                    <h3>{details.name}</h3>
                    <p><strong>Descrição:</strong> {details.description}</p>
                    <p><strong>Planeta:</strong>{details.planet}</p>
                    <p><strong>Duração:</strong>{details.durationInDays}</p>
                    <p><strong>Data:</strong>{details.date}</p>
                </CardContainer1>

                <CardContainer2>
                    <CandidatesContainer> 
                    {/* {Candidates}     */}
                    </CandidatesContainer>
                </CardContainer2>
            </div>
        </MainContainerStyled>
    )
}

export default TripDetails