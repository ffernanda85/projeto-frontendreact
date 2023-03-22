import { Container } from "../../Container"
import { ItemCart } from "./ItemCart"
import * as s from './styledCartShop'

export function CartShop(props) {
    const { setScreen, cart, setCart, totalItems, setTotalItems, totalValue, setTotalValue } = props

    return (
        <s.ContainerAux>
            <Container>
                <s.CartShopContainer>
                    <s.BasketContainer>
                        <s.TitleCart>minha cesta</s.TitleCart>
                        <div>
                            <s.SubtitleContainer>
                                <p>produto</p>
                                <p>descrição</p>
                                <p>quantidade</p>
                                <p>entrega</p>
                                <p>preço</p>
                            </s.SubtitleContainer>
                            <s.HorizontalLine />
                            <div>
                                {
                                    cart.map((item, index) =>
                                        <ItemCart
                                            item={item}
                                            key={index}
                                            setCart={setCart}
                                            index={index}
                                            cart={cart}
                                            setTotalItems={setTotalItems}
                                            setTotalValue={setTotalValue}
                                        />
                                    )
                                }
                            </div>
                        </div>
                    </s.BasketContainer>
                    <s.DetailsContainer>
                        <h2>resumo do pedido</h2>
                        <s.DetailsValue>
                            {totalItems > 1 ? <p>0{totalItems} produtos</p> : <p>0{totalItems} produto</p>}

                            <p>R$ {totalValue}.00</p>
                        </s.DetailsValue>
                        <s.DetailsValue>
                            <p>frete</p>
                            <p>grátis</p>
                        </s.DetailsValue>
                        <s.HorizontalLine />
                        <s.DetailsValue>
                            <h4>total</h4>
                            <h4>R$ {totalValue}.00</h4>
                        </s.DetailsValue>
                        <s.HorizontalLine />
                        <s.BtnCloserCart onClick={() => setScreen('Confirm')}>Confirmar Compra</s.BtnCloserCart>
                        <s.BtnCloserCart onClick={() => setScreen('main')}>Comprar Mais Produtos</s.BtnCloserCart>

                    </s.DetailsContainer>
                </s.CartShopContainer>


            </Container>
        </s.ContainerAux>
    )
}