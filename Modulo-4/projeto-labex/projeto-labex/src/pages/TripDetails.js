import React, {useState, useEffect} from 'react';
import styled from 'styled-components'
import axios from 'axios';
import {useParams} from 'react-router-dom'
import {BASE_URL} from '../constants/constants'


const StyledContainer = styled.div`
height: 90vh;
width: 100vw;
display: flex;
justify-content: space-around   ;
align-items: center;`

const TripDetails = () => {

    const {id} = useParams()
    const [details,setDetails] =  useState({})

    useEffect(() =>  {
        axios.get(`${BASE_URL}/trip/${id}`,{
            headers: {
                auth : localStorage.getItem('token')
            }}).then(({data}) =>{
                console.log("deu certo", data)
            setDetails(data)
        }).catch((err) =>{console.log("erro!", err)})
    },[])

    return (
        <StyledContainer>
                <div>
texto aqui
                </div>
        </StyledContainer>
    )
}

export default TripDetails