import React from "react";
import styled from 'styled-components'
import logo from "../assets/logo.png"
import matchList from "../assets/match.png"
import PersonalCard from "./PersonalCard"
import Footer from "./Footer"

let MainStyle =  styled.div`
align-items: center;
width: 25rem;
height: 35rem;
background-color: rgb(255, 255, 255);
border: 1px solid;
border-radius: 1rem;    
`

let MainHeader = styled.header`
height: 4rem;
display:flex;
justify-content: space-between;
align-items: center;
border-bottom: 3px ;
box-shadow:  0px 2px 2px rgba(0,0,0,0.35); 

`
let Logo = styled.img`
height: 90%;
margin-left: 25%;
`

let ImageMatchList = styled.img`
height: 50%;
margin: 10px;
`


function MainContainer() {

    return(
        <MainStyle>
            <MainHeader>
                <Logo alt="Logo" src={logo} /><ImageMatchList alt="Match List" src={matchList} />
            </MainHeader>
            <PersonalCard />
            <Footer />
        </MainStyle>
    )
}

export default MainContainer;