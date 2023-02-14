import { MainContainer } from "./styledMain"
import { Card } from "../card/Card"

export function Main(props) {
    console.log(props)
    const { product } = props
    console.log(product)

    return (
        <MainContainer>
            <aside>side bar left</aside>
            <section>
                {
                    product.map(item =>
                        <Card item={ item } />   
                        )
                }
            </section>
            <aside>side bar right</aside>
        </MainContainer>
    )
}