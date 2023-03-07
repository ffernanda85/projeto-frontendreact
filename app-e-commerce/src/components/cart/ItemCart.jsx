import * as s from './styledCartShop'

export function ItemCart() {
    return (
        <s.ItemCartContainer>
            <s.ItemCart>
                <img src="" alt="img product" />
                <p>descrição:</p>
                <div>
                    <div>fazer button qtd</div>
                    <p>remover</p>
                </div>
                <p>receba em até 5 dias</p>
                <div>
                    <p>R$ discount</p>
                    <h5>R$ Price</h5>
                </div>
            </s.ItemCart>
            <s.HorizontalLine />
        </s.ItemCartContainer>
    )
}