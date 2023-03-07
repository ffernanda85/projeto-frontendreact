import { Container } from "../../Container"
import { ItemCart } from "./ItemCart"
import * as s from './styledCartShop'

export function CartShop(props) {
    const { setScreen, cart } = props

    return (
        <Container>
            <s.BtnCloserCart onClick={() => setScreen('main')}>X</s.BtnCloserCart>
            <s.CartShopContainer>
                <s.BasketContainer>
                    <h1>minha cesta</h1>
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
                            <ItemCart />
                        </div>
                    </div>
                </s.BasketContainer>
                <s.DetailsContainer></s.DetailsContainer>
            </s.CartShopContainer>


        </Container>
    )
}