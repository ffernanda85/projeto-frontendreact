import { TitleDiscount } from '../card/styledCard'
import * as s from './styledCartShop'

export function ItemCart(props) {
    const {image, description, discount, price, amount} = props.item
    
    console.log(props)
    
    return (
        <s.ItemCartContainer>
            <s.ItemCart>
                <s.ImgProduct src={image} alt="img product" />
                <p>{description}</p>
                <div>
                    <div>{ amount }</div>
                    <p>remover</p>
                </div>
                <p>receba em até 5 dias</p>
                <div>
                    <TitleDiscount>R$ { discount },00</TitleDiscount>
                    <h4>R$ { price },00</h4>
                </div>
            </s.ItemCart>
            <s.HorizontalLine />
        </s.ItemCartContainer>
    )
}