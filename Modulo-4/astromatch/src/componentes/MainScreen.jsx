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
height:80%;
margin: 0 10px;
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

    const [currentScreen, setCurrentScreen] = useState(<ProfileCard/>) 


    // const screenOptions = () => {
    //     if(currentScreen){
    //          setCurrentScreen(<MatchesList/>)
    //     }else{
    //          setCurrentScreen(<ProfileCard/>)
    //     }
    // }

    // const changeScreen = () => {
    //     console.log("clicou")
    //     // if (currentScreen == <ProfileCard />){
    //     //     return setCurrentScreen(<MatchesList />)
    //     // }else{
    //     //     return setCurrentScreen(<ProfileCard />)

    //     return currentScreen ? setCurrentScreen(false) : setCurrentScreen(true)

    // }

    return(
        <MainScreenStyle>
            <Header>
                <LogoStyle src={logo}/>
                <MatchListIcon src={matchList}/>
            </Header>
            {currentScreen}
        </MainScreenStyle>
    )
}