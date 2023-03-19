import { MainContainer, ContentContainer, CardContainer, FilterContainer, SelectContainer, PriceContainer, OrderFilter, InputContainer, InputPrice, LabelPrice, BtnFilter } from "./styledMain"
import { Card } from "../card/Card"
import { Container } from "../../Container"
import { dataProducts } from "../products/Products"

export function Main(props) {
    const { product, setProduct, qtdProducts, triage, setTriage, setIsOnTriage, vMax, vMin, setvMax, setvMin, setFilterIsOn, setCart, cart, totalItems, setTotalItems, totalValue, setTotalValue } = props

    function onChangeHandler(e, setState) {
        setState(e.target.value)
    }

    return (
        <Container>
            <MainContainer>
                <FilterContainer>
                    <PriceContainer>
                        <h4>Preço</h4>
                        <InputContainer>
                            <LabelPrice>
                                Mínimo:
                                <InputPrice
                                    type='number'
                                    min={25}
                                    value={vMin}
                                    onChange={(e) => onChangeHandler(e, setvMin)}
                                    placeholder="valor mín"
                                />
                            </LabelPrice>

                            <LabelPrice>
                                Máximo:
                                <InputPrice
                                    type='number'
                                    min={25}
                                    value={vMax}
                                    onChange={(e) => onChangeHandler(e, setvMax)}
                                    placeholder="valor máx"
                                />
                            </LabelPrice>
                        </InputContainer>

                        <BtnFilter onClick={() => setFilterIsOn()}>
                            APLICAR FILTRO
                        </BtnFilter>
                        <BtnFilter
                            onClick={() => { setvMax(0), setvMin(0), setProduct(dataProducts) }}>
                            LIMPAR FILTROS
                        </BtnFilter>
                    </PriceContainer>

                </FilterContainer>

                <ContentContainer>
                    <SelectContainer>
                        <h4>Produtos Disponiveis: {qtdProducts()}</h4>
                        <OrderFilter>
                            <p>Ordenar</p>

                            <select
                                value={triage}
                                onChange={(e) => {
                                    onChangeHandler(e, setTriage);
                                    setIsOnTriage(true)
                                }}
                            >
                                <option value='relevance'>Relevância</option>
                                <option value='down'>Menor Preço</option>
                                <option value='up'>Maior Preço</option>
                            </select>
                        </OrderFilter>
                    </SelectContainer>

                    <CardContainer>
                        {
                            product.map((item,index) =>
                                <Card
                                    item={item}
                                    key={index}
                                    setCart={setCart}
                                    cart={cart}
                                    setTotalItems={setTotalItems}
                                    setTotalValue={setTotalValue}
                                />
                            )
                        }
                    </CardContainer>
                </ContentContainer>

            </MainContainer>
        </Container>
    )
}