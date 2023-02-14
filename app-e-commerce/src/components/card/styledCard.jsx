import styled from "styled-components";

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
    border-radius: 8px;
    width: 20%;
    padding-bottom: 1rem;
    background-color: white;

    :hover {
        box-shadow: 0 0 15px 8px rgb(75,0,130);
        transform: scale(1.1);
    }

    button {
        width: 8vw;
        height: 3vh;
        font-size: 1rem;
        font-weight: bold;
        border: none;
        border-radius: 5px;
        background-color: rgb(75,0,130);
        color: rgb(221,160,221);
        cursor: pointer;
    }

    img {
        width: 100%;
        border-radius: 8px;
    }

    h3 {
        margin-bottom: .8rem;
    }

    h4 {
        text-align: center;
        padding: .5rem;
    }
`
export const TitleDiscount = styled.h5`
    text-decoration-line: line-through;
`