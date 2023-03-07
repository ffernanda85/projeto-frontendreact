import styled from "styled-components";

export const ContainerHeader = styled.header`
    display: flex;
    flex-direction: column;
    color: rgb(64, 64, 64);
`

export const HeaderTop = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgb(139,0,139);
    height: 20vh;
    `

export const Logo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    padding-top: 1.2rem;
    
    h1 {
        font-family: 'Dancing Script', cursive;
        font-size: 2rem;
        text-shadow: 2px 2px 0px rgb(139,139,139);
    }
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
    height: 6vh;
    display: flex;
    justify-content: center;
    gap: 2rem;
    
    button {
        width:10vw;
        font-size: 1rem;
        font-weight: 700;
        background-color: transparent;
        border: none;
        cursor: pointer;
        position: relative;
        color: rgb(139,139,139);
        
        ::after {
            content: ' ';
            width: 0;
            height: .3rem;
            background-color: rgb(139,139,139);
            border-radius: 10px;
            position: absolute;
            top: 2.2rem;
            left: 0;
            transition: all .3s ease-in-out;
        }
        
        :hover::after {
            width: 100%;
        }
    }
    ` 

export const NavSearch = styled.nav`
    background-color: white;
    border: solid 2px rgb(169,169,169);
    border-radius: 10px;
    width: 25vw;
    height: 3.5vh;
    display: flex;
    align-items: center;
    justify-content: space-between;

    input {
        background-color: transparent;
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
        height: 3.4vh;
        width: 5vw;
        border-radius: 0 8px 8px 0;
        font-weight: bold;
        background: rgb(169,169,169);
        color: #1C1C1C;
        cursor: pointer;
    
        :active {
            opacity: .5;
        }
    }

    img {
        width: 1.5vw;
        padding-left: .5rem;
    }
    `

export const ContainerLogin = styled.div`
    display: flex;
    align-items: center;
    gap: .8rem;
    
    p {
        color: rgb(169,169,169);
    }

    a {
        color: white;
    }
    `

export const CarImg = styled.img`
    cursor: pointer;
    `
export const DivAux = styled.div`
    background-color: rgb(0,0,0);
    
    `
