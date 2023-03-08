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
    gap: 2rem;
    background-color: white;
    overflow-y: auto;
    border-radius: .5rem;
`
export const DetailsContainer = styled.div`
    background-color: rgb(248, 248, 248);
    border-radius: .5rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1rem;
`
export const DetailsValue = styled.div`
    display: flex;
    justify-content: space-between;
`
export const BtnCloserCart = styled.button`
    width: 280px;
    padding: 1rem ;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    background-color: rgb(64, 64, 64);
    color: white;
    cursor: pointer;
    line-height: .5rem;
    :hover{
        background-color: white;
        color: rgb(64, 64, 64);
        border: 1px solid rgb(64, 64, 64);
    }
    :active {
        opacity: .7;
    }
`
export const TitleCart = styled.h1`
    padding-top: 1.5rem;
`
export const HorizontalLine = styled.hr`
    width: 98.8%;
    margin: 1rem 0;
    background-color: rgb(64, 64, 64); 
    opacity: 0.5;
`
export const SubtitleContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    font-weight: 700;  
`
export const ItemCart = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    align-items: center;
    justify-items: center;
`
export const ItemCartContainer = styled.div`
    
`
export const ImgProduct = styled.img`
    width: 100px;
`
export const Qtd = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    align-items: center;

    p {
        cursor: pointer;
        :hover{
            text-decoration-line: underline;
        }
    }
`
export const AmountContainer = styled.div`
    display: flex;    
    justify-content: space-between;
    align-items: center;
    gap: .7rem;
    border: 1px solid rgb(64, 64, 64);
    border-radius: 5px;
    padding: .5rem;
`
export const BtnDown = styled.img`
    width: 25px;
    cursor: pointer;
`
export const BtnUp = styled.img`
    width: 25px;
    cursor: pointer;
`