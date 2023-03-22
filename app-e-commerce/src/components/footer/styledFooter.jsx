import styled from "styled-components";

export const FooterContainer = styled.footer`
    background-color: rgb(0,0,0);
    color: rgb(169, 169, 169);

    a {
        color: rgb(169, 169, 169);
        text-decoration-line: none;
    }
`
export const ContentFooter = styled.div`
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`
export const ServicesContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`
export const UlFooter = styled.ul`
    
`
export const LiFooter = styled.li`
    margin-bottom: .5rem;
    font-size: .8rem;
    list-style-type: none;
`
export const TitleFooter = styled.h4`
    margin-bottom: 1.5rem;
`
export const Links = styled.a`
    :hover {
        text-decoration-line: underline;
    }
`
export const ImgNetWork = styled.img`
    width: 25px;

    :hover {
        transform: scale(1.1);
    }
`
export const NetworksContainer = styled.div`
    display: flex;
    gap: 1.2rem;
`
export const PaymentSocialContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const PaymentContainer = styled.div`
    display: flex;
    gap: .5rem;
`
export const ImgPayment = styled.img`
    width: 35px;
`
export const BaseFooterContainer = styled.div`
    display: flex;
    font-size: .8rem;
`
export const ContentOne = styled.div`
    display: flex;
    gap: 2rem;
    width: 35vw;

    a {
        :hover {
            text-decoration-line: underline;
        }
    }
`
export const ContentTwo = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;

    img {
        width: 13px;
        margin-right: .3rem;
    }
`

