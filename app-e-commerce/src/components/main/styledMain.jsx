import styled from "styled-components";

export const MainContainer = styled.main`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    background-color: rgb(221,160,221);

    section {
        margin-top: 2rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
        /* border: 1px solid ; */
    }
`