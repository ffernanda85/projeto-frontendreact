import { TitleDiscount } from '../card/styledCard'
import Remove from '../img/remove.svg'
import Add from '../img/add.svg'
import * as s from './styledCartShop'

export function ItemCart(props) {
    const { image, description, discount, price, amount } = props.item

    console.log(props)

    return (
        <s.ItemCartContainer>
            <s.ItemCart>
                <s.ImgProduct src={image} alt="img product" />
                <p>{description}</p>
                <s.Qtd>
                    <s.AmountContainer>
                        <s.BtnDown src={Remove}/>
                        <div>{amount}</div>
                        <s.BtnUp src={Add} />
                    </s.AmountContainer>
                    <p>remover</p>
                </s.Qtd>
                <p>receba em até 5 dias</p>
                <div>
                    <TitleDiscount>De: R$ {discount},00</TitleDiscount>
                    <h4>Por: R$ {price},00</h4>
                </div>
            </s.ItemCart>
            <s.HorizontalLine />
        </s.ItemCartContainer>
    )
}