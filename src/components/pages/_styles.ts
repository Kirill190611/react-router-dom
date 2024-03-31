import styled from "styled-components";

const NavWrapper = styled.div`
    margin-left: 10px;
    font-size: 20px;

    & > a {
        color: #61dafb;
        text-decoration: none;
    }
    
    & > a.active {
        color: aquamarine;
        text-decoration: none;
    }
    
    & > a:hover {
        color: steelblue;
    }
`

const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    width: 100%;
    height: 100px;
    text-align: center;
    color: white;
`

const Body = styled.div`
    display: flex;
`

const Navigation = styled.nav`
    display: flex;
    flex-direction: column;
    gap: 15px;
    background-color: white;
    min-height: 400px;
    width: 30%;
    color: #282c34;
    font-size: 30px;
`

const Content = styled.div`
    background-color: #282c34;
    min-height: 400px;
    width: 70%;
    color: white;
    font-size: 30px;
`

const Footer = styled.footer`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #000000;
    width: 100%;
    height: 120px;
    text-align: center;
    color: white;
`

export const S = {
    NavWrapper,
    Header,
    Body,
    Navigation,
    Content,
    Footer,
}