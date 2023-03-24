import styled from "styled-components";

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    border-radius: 5px;
    width: 200px;
    height: 300px;
    background-color: white;
    /* box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px; */
    color: rgb(64, 64, 64);

    :hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        transform: scale(1.01);
    }
    `
export const TitleDiscount = styled.h5`
    text-decoration-line: line-through;
    color: rgb(128, 128, 128);
    `
export const CardText = styled.div`
    height: 13vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    h3 {
        margin-bottom: .5rem;
    }
    
    h4 {
        text-align: center;
        padding: .5rem;
    }
    `
export const ImgCard = styled.img`
    margin-top: .5rem;
    width: 150px;
    height: 150px;
    border-radius: 8px;
    `
export const BtnAdd = styled.button`
    width: 185px;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 5px;
    background-color: rgb(64, 64, 64);
    color: white;
    cursor: pointer;
    padding: .5rem;

    :active {
        opacity: .7;
    }
`
