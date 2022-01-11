import React , { useState, useEffect } from "react";
import styled from 'styled-components'
import logo from "../assets/logo.png"
import matchList from "../assets/match.png"
import ProfileCard from "./ProfileCard"
import MatchesList from "./MatchesList"

let LogoStyle = styled.img`
height:100%;
margin-left: 5em ;
`

let MatchListIcon = styled.img`
height:60%;
margin: 0px 15px;
cursor:pointer;
opacity: 80%;

&:hover { height: 65%;
opacity: 100%}
`

let MainScreenStyle = styled.div`
height: 37em;
width: 25em;
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 50px 1fr ;
border: 1px solid;
border-radius: 5px;
justify-items: center;

`

let Header = styled.header`
width:100%;
display: flex;
justify-content: space-between;
align-items: center;
`

export default function MainScreen() {

    const [currentScreen, setCurrentScreen] = useState("list") 


    const screenOptions = () => {
        if(currentScreen !== "profile" ){
             return <MatchesList />
        }else{
             return <ProfileCard />
        }
    }

    const changeScreen = () => {
 
        currentScreen === 'profile' ? setCurrentScreen('list') : setCurrentScreen('profile')

    }

    return(
        <MainScreenStyle>
            <Header>
                <LogoStyle src={logo} />
                <MatchListIcon src={matchList} onClick={changeScreen}/>
            </Header>
            {screenOptions()}
        </MainScreenStyle>
    )
}