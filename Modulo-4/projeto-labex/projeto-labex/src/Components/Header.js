import React from 'react';
import styled from 'styled-components'
import logopequena from '../assets/logo-header.png'

const LogoStyle = styled.img`
height: 80%;
`

const SocialMediaImages = styled.img`
height: 30px;
opacity: 70%;
margin: 5px 0;
cursor: pointer;

&:hover { 
    opacity: 100%;

}

&:active { opacity:50%;}
`

const RedesSociais =  styled.div`
margin-right: 15px;
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
height: 75px;
width: 250px;
>p{ text-align: center;
    font-size: 13px;
    line-height: 15px;
}
>div{
    height: 5em;
    display:flex;
    justify-content: space-around;
    align-items: flex-end;
    width:  200px;
    margin-top: 5px;
}
`

const HeaderContainer = styled.div`
width: 100vw;
height: 80px;
background-color: rgba(255, 255, 255, 0.7);
display: flex;
justify-content: space-between;
align-items: center;
`

const Header  = () => { 

return (
<HeaderContainer>
    <LogoStyle src={logopequena}/>
    <RedesSociais>
    <p>Para ficar por dentro das novidades, siga-nos nas redes sociais.</p>
    <div>
        <SocialMediaImages src="https://cdn-icons-png.flaticon.com/512/174/174848.png" />

        <SocialMediaImages src="https://cdn-icons-png.flaticon.com/512/174/174876.png" />

        <SocialMediaImages src="https://cdn-icons-png.flaticon.com/512/174/174855.png" />

        <SocialMediaImages src="https://cdn-icons-png.flaticon.com/512/174/174883.png" />
    </div>
    </RedesSociais>
</HeaderContainer>
)}

export default Header