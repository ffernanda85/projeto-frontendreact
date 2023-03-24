import * as s from "./styledMain"
import { Card } from "../card/Card"
import { Container } from "../../Container"
import { dataProducts } from "../products/Products"

export function Main(props) {
    const { product, setProduct, qtdProducts, triage, setTriage, setIsOnTriage, vMax, vMin, setvMax, setvMin, setFilterIsOn, setCart, cart, setTotalItems, setTotalValue, setDescription, clear, gender, setGender } = props

    function onChangeHandler(e, setState) {
        setState(e.target.value)
    }

    return (
        <Container>
            <s.MainContainer>
                <s.FilterContainer>
                    <s.PriceContainer>
                        <h4>Preço</h4>
                        <s.InputContainer>
                            <s.LabelPrice>
                                Mínimo:
                                <s.InputPrice
                                    type='number'
                                    min={25}
                                    value={vMin}
                                    onChange={(e) => onChangeHandler(e, setvMin)}
                                    placeholder='valor mín'
                                />
                            </s.LabelPrice>

                            <s.LabelPrice>
                                Máximo:
                                <s.InputPrice
                                    type='number'
                                    min={25}
                                    value={vMax}
                                    onChange={(e) => onChangeHandler(e, setvMax)}
                                    placeholder="valor máx"
                                />
                            </s.LabelPrice>
                        </s.InputContainer>

                        <s.BtnFilter onClick={() => setFilterIsOn()}>
                            APLICAR FILTRO
                        </s.BtnFilter>
                        <s.BtnFilter
                            onClick={() => { setvMax(Infinity), setvMin(-Infinity), setProduct(dataProducts), setTriage('relevance'), setDescription(''), setGender('Todos os Produtos') }}>
                            LIMPAR FILTROS
                        </s.BtnFilter>
                    </s.PriceContainer>

                </s.FilterContainer>

                <s.ContentContainer>
                    <s.SelectContainer>
                        <s.TitleProductsAmount>
                            <h3>{gender}</h3>
                            <p>Produtos Disponiveis: { qtdProducts() < 10 ? '0'+qtdProducts() : qtdProducts() }</p>
                        </s.TitleProductsAmount>
                        <s.OrderFilter>
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
                        </s.OrderFilter>
                    </s.SelectContainer>

                    <s.CardContainer>
                        {
                            product.map((item, index) =>
                                <Card
                                    item={item}
                                    key={index}
                                    setCart={setCart}
                                    cart={cart}
                                    setTotalItems={setTotalItems}
                                    setTotalValue={setTotalValue}
                                    clear={clear}
                                />
                            )
                        }
                    </s.CardContainer>
                </s.ContentContainer>

            </s.MainContainer>
        </Container>
    )
}