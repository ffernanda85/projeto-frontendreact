import { MainContainer, FilterContainer, SelectContainer } from "./styledMain"
import { Card } from "../card/Card"

export function Main(props) {
    const { product } = props

    return (
        <MainContainer>

            <FilterContainer>
                <SelectContainer value="{}" onChange=''>
                    <option>Todos</option>
                    <option>Menor Preço</option>
                    <option>Maior Preço</option>
                </SelectContainer>
            </FilterContainer>

            <section>
                {
                    product.map(item =>
                        <Card item={item} />
                    )
                }
            </section>
            <aside>side bar right</aside>
        </MainContainer>
    )
}