import React , { useState } from "react";
import styled from 'styled-components'
import logo from "../assets/logo.png"
import matchList from "../assets/match.png"
import ProfileCard from "./ProfileCard"
import MatchesList from "./MatchesList"

let LogoStyle = styled.img`
height:70%;
margin-left:4em;
`

let MatchListIcon = styled.img`
height:60%;
cursor:pointer;
opacity: 75%;
margin-right: 8px;

&:hover { height: 65%;
opacity: 100%}

&:active { opacity:30%;}
`

let MainScreenStyle = styled.div`
height: 37em;
width: 25em;
display: grid;
grid-template-columns: 1fr;
grid-template-rows: 65px 1fr ;
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

const Div =styled.div`
max-height: 83.8vh;
background-color: #ffffff;
`
 
export default function MainScreen() {

    const [currentScreen, setCurrentScreen] = useState("profile") 
    const [user, setUser] = useState({})

    const screenOptions = () => {
        if(currentScreen !== "profile" ){
             return <MatchesList user={user} setUser={setUser} />
        }else{
             return <ProfileCard user={user} setUser={setUser} />
        }
    }

    const changeScreen = () => {
        currentScreen === 'profile' ? setCurrentScreen('list') : setCurrentScreen('profile')
    }

    return(
        <Div>
        <MainScreenStyle>
            <Header>
                <LogoStyle src={logo} />
                <MatchListIcon src={matchList} onClick={changeScreen}/>
            </Header>
            {screenOptions()}
        </MainScreenStyle>
        </Div>
        
    )
}