import styled from "styled-components";

export const ContainerHeader = styled.header`
    display: flex;
    flex-direction: column;
`

export const HeaderTop = styled.div`
    background-color: rgb(0,0,0);
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    color: rgb(139,0,139);
    height: 18vh;
`

export const ImageLogo = styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    box-shadow: 0 0 1em #87F, 0 0 1em #87F,
    0 0 1em #87F;
    background-color: rgb(139,0,139);
`

export const HeaderNav = styled.div`
    height: 5vh;
    display: flex;
    justify-content: center;
    gap: 2rem;
    background-color: rgb(139,139,139);

    button {
        width: 8vw;
        font-size: 1rem;
        font-weight: 700;
        background-color: transparent;
        border: none;

        a {
            position: relative;
            color: black;
            text-decoration-line: none;
        }

        a::after {
            content: ' ';
            width: 0;
            height: .3rem;
            background-color: black;
            border-radius: 10px;
            position: absolute;
            top: 1.5rem;
            bottom: 0;
            left: 0;
            transition: all .3s ease-in-out;
        }

        a:hover::after {
            width: 100%;
            opacity: .5;
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
        text-shadow: 2px 2px 0px rgb(139,139,139);
    }
`
export const NavSearch = styled.nav`
    background-color: white;
    border: solid 2px rgb(169,169,169);
    border-radius: 10px;
    width: 21vw;
    height: 3.5vh;
    display: flex;
    align-items: center;

    input {
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
        height: 3.3vh;
        width: 4.59vw;
        border-radius: 0 7px 7px 0;
        font-weight: bold;
        background: rgb(169,169,169);
        cursor: pointer;
    }

    img {
        width: 1.2vw;
        padding-left: .5rem;
    }
`

export const ContainerLogin = styled.div`
    display: flex;
    align-items: center;
    gap: .8rem;
    
    p, a {
        color: white;
    }
`

export const ContainerCar = styled.div`
    display: flex;
    align-items: center;
    font-family: inherit;
    font-size: 1.3rem;
    font-weight: 700;
    color: gray;
`

export const CarImg = styled.img`
    cursor: pointer;
`

