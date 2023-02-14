import styled from "styled-components";

export const HeaderContainer = styled.header`
    background-color: rgb(75,0,130);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: rgb(221,160,221);
    height: 16vh;
        
    div {
        
        img {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            box-shadow: 0 0 1em #87F, 0 0 1em #87F,
        0 0 1em #87F;
            background-color: rgb(139,0,139);
        }
    }
`

export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    
    h1 {
        font-family: 'Dancing Script', cursive;
        font-size: 2rem;
        text-shadow: 13px 13px 0px rgba(0, 0, 0, 0.267);
        /* text-shadow: 0 0 0.3em #87F, 0 0 0.3em #87F,
        0 0 0.3em #87F */
    }
`
export const NavSearch = styled.nav`
    background-color: rgb(221,160,221);
    border: solid 2px rgb(218,112,214);
    border-radius: 10px;
    width: 21vw;
    height: 3.5vh;

    input {
        float: left;
        background-color: transparent;
        padding-left: 1rem;
        font-size: 1rem;
        border: none;
        height: 2rem;
        width: 15vw;

        :focus {
            outline: none;
        }
    }

    button {
        border: none;
        float: left;
        height: 3.3vh;
        width: 4.58vw;
        border-radius: 0 7px 7px 0;
        font-weight: bold;
        background: rgb(218,112,214);
        cursor: pointer;
    }

    img {
        width: 1.2vw;
        padding-left: .5rem;
        padding-top: .5rem;
        float: left;
    }
`

