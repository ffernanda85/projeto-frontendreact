import styled from "styled-components";

export const MainContainer = styled.main`
    display: grid;
    grid-template-columns: 1fr 3fr;
    min-height: 120vh;
    font-family: 'Roboto', sans-serif;
    color: rgb(64, 64, 64);
    margin-bottom: 5rem;
`
export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
export const SelectContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: .8rem;
    padding-top: 2.5rem;

    select {
        height: 3.5vh;
        width: 7vw;
        border: 2px solid rgb(139,139,139);
        border-radius: 5px;
    
        :focus {
            outline: none;
        }
    }
`
export const OrderFilter = styled.div`
    display: flex;
    gap: .5rem;
`
export const CardContainer = styled.section`
        margin-top: 2.5rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        row-gap: 2rem;
`
export const FilterContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    margin-top: 2.5rem;
`
export const PriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`
export const InputContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
`
export const InputPrice = styled.input`
    height: 4.5vh;
    width: 7vw;
    text-align: center;
    border-radius: 5px;
    border-color: rgb(139,139,139);
`
export const LabelPrice = styled.label`
    display: flex;
    flex-direction: column;
    gap: .5rem;
`
export const BtnFilter = styled.button`
    background-color: rgb(64, 64, 64);
    color: white;
    border: none;
    border-radius: 5px;
    width: 15vw;
    height: 4vh;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
    cursor: pointer;

    :active {
        opacity: .7;
    }
`
export const TitleProductsAmount = styled.div`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    
    color: rgb(139,139,139);
    /* font-weight: 700; */
    h3{
        font-size: 1.5rem;
    }
`