import styled from "styled-components";

export const ScreenConfirm = styled.div`
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    color: rgb(64, 64, 64);
    padding: 1rem;
`
export const ImgConfirm = styled.img`
    width: 80px;
`
export const Title = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`
export const Home = styled.h3`
    cursor: pointer;
    text-decoration-line: underline;
    :hover {
        opacity: .7;
    }
`
export const Product = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    border: 1px solid rgb(64, 64, 64);
    border-radius: 5px;
    padding: .6rem;
    width: 220px;
    height: 260px;
    background-color: white;
`
export const ContainerProducts = styled.div`
    width: 80vw;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`
export const DetailsProduct = styled.div`
    height: 130px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: space-evenly;
    font-size: .8rem;
`
export const ImgProduct = styled.img`
    width: 100px;
`