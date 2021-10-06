import React from 'react';
import styled from "styled-components";
import logoImg from '../../image/logo.svg';
import buttonImg from '../../image/sign.svg';

const NavBarStyled = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;
    background-color: #299B01;
    color: white;
`;

const Logo = styled.div`
    display: flex;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 24px;
    margin-left: 15px;
`;

const ImgLogo = styled.img`
    width: 50px;
`;

const Login = styled.button`
    padding: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    border: none;
    font-size: 16px;
    line-height: 19px;
`;

const ImgButton = styled.img`
    width: 32px;
    margin-bottom: 5px;
`;

export const NavBar = () => (
    <NavBarStyled>
        <Logo>
            <ImgLogo src={logoImg} alt='Logo'/>
            <H1>MrDonald's</H1>
        </Logo>
        <Login>
            <ImgButton src={buttonImg} alt='User'/>
            войти
        </Login>
    </NavBarStyled>
);