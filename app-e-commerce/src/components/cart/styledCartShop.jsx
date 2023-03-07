import styled from "styled-components";

export const CartShopContainer = styled.div`
    color: rgb(74,74,74);
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 1rem;
    /* background-color: #C0C0C0; */
    height: 60vh;
    transform: translate(0, 15%);
`
export const BasketContainer = styled.div`
    padding-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    background-color: white;
    overflow-y: auto;
    border-radius: .5rem;
`
export const DetailsContainer = styled.div`
    background-color: rgb(248, 248, 248);
    border-radius: .5rem;
`
export const BtnCloserCart = styled.button`
    font-weight: 700;
    background-color: red;
    color: rgb(64, 64, 64);
    cursor: pointer;
    border: none;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    :hover {
        background-color: rgb(64, 64, 64);
        color: red;
    }
`
export const TitleCart = styled.h1`
    
`
export const HorizontalLine = styled.hr`
    margin: 1rem 0.5rem 1rem 1rem;
    background-color: rgb(64, 64, 64); 
    opacity: 0.5;
`
export const SubtitleContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    padding-left: 1rem; 
    gap: 1rem; 
    font-weight: 700;  
`
export const ItemCart = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    gap: 1rem;  
`
export const ItemCartContainer = styled.div`
    
`
export const ImgProduct = styled.img`
    width: 150px;
`