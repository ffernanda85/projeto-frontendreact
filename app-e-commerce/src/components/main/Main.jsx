import { MainContainer, FilterContainer, SelectContainer, PriceContainer, InputContainer, InputPrice, LabelPrice, BtnFilter } from "./styledMain"
import { Card } from "../card/Card"
import { Container } from "../../Container"

export function Main(props) {
    const { product, qtdProducts, triage, setTriage, setIsOnTriage, vMax, vMin, setvMax, setvMin, setFilterIsOn } = props

    function onChangeHandler(e, setState) {
        setState(e.target.value)
    }

    return (
        <Container>
            <MainContainer>

                <FilterContainer>
                    <h4>Produtos Disponiveis: {qtdProducts()}</h4>

                    <SelectContainer>
                        <p>Ordenar</p>

                        <select
                            value={triage}
                            onChange={(e) => {
                                setTriage(e.target.value);
                                setIsOnTriage(true)
                            }}
                        >
                            <option value='relevance'>Relevância</option>
                            <option value='down'>Menor Preço</option>
                            <option value='up'>Maior Preço</option>
                        </select>
                    </SelectContainer>

                    <PriceContainer>
                        <h4>Preço</h4>
                        <InputContainer>
                            <LabelPrice>
                                Mínimo:
                                <InputPrice type='number' min={25} value={vMin} onChange={(e) => onChangeHandler(e, setvMin)} />
                            </LabelPrice>

                            <LabelPrice>
                                Máximo:
                                <InputPrice type='number' min={25} value={vMax} onChange={(e) => onChangeHandler(e, setvMax)} />
                            </LabelPrice>
                        </InputContainer>

                        <BtnFilter onClick={() => setFilterIsOn()}>
                            APLICAR FILTRO
                        </BtnFilter>
                    </PriceContainer>

                </FilterContainer>

                <section>
                    {
                        product.map(item =>
                            <Card item={item} />
                        )
                    }
                </section>
            </MainContainer>
        </Container>
    )
}