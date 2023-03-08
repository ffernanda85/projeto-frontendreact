import styled from "styled-components";

export const ScreenConfirm = styled.div`
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;

    div {
        display: flex;
        align-items: center;
        gap: 1.5rem;
    }

    img {
        width: 80px;
    }
`
export const Home = styled.h3`
    cursor: pointer;
    text-decoration-line: underline;
    :hover {
        opacity: .7;
    }
`