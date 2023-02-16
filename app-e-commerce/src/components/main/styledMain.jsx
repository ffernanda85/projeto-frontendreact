import styled from "styled-components";

export const MainContainer = styled.main`
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    background-color: rgb(220,220,220);

    section {
        margin-top: 2.5rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem;
    }
`
export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 2rem;
`
export const SelectContainer = styled.select`
    margin-top: 2.5rem;
    height: 3.5vh;
    width: 15vw;
    border-color: rgb(139,139,139);
    border-radius: 12px;

    :focus {
        outline: none;
    }
`