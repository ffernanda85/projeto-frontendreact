import { TitleDiscount } from '../card/styledCard'
import Remove from '../img/remove.svg'
import Add from '../img/add.svg'
import * as s from './styledCartShop'

export function ItemCart(props) {
    const { item, setCart, cart, index, setTotalItems, setTotalValue } = props

    let copyCart = [...cart]

    function handleBtnDown(e) {
        const index = e.target.dataset.index
        if (copyCart[index].amount === 1) return
        copyCart[index].amount -= 1
        setCart(copyCart)
        setTotalItems(prevState => prevState - 1)
        setTotalValue(prevState => prevState - copyCart[index].priceProduct)
    }

    function handleBtnUp(e) {
        const index = e.target.dataset.index
        copyCart[index].amount += 1
        setCart(copyCart)
        setTotalItems(prevState => prevState + 1)
        setTotalValue(prevState => +prevState + +copyCart[index].priceProduct)
    }

    function remove(e) {
        const codeProduct = e.target.dataset.codeproduct
        const amount = e.target.dataset.amount
        const priceProduct = e.target.dataset.priceproduct

        copyCart = copyCart.filter(item => item.codeProduct !== codeProduct)

        setCart(copyCart)
        setTotalItems(prevState => prevState - amount)
        setTotalValue(prevState => prevState - (amount * priceProduct))
    }

    return (
        <s.ItemCartContainer>
            <s.ItemCart>
                <s.ImgProduct src={item.imageProduct} alt="img product" />
                <p>{item.descriptionProduct}</p>
                <s.Qtd>
                    <s.AmountContainer>
                        <s.BtnDown src={Remove} alt="-" data-index={index} onClick={(e)=>handleBtnDown(e)} />{item.amount}
                        <s.BtnUp src={Add} alt="+" data-index={index} onClick={(e)=>handleBtnUp(e)}/>
                    </s.AmountContainer>

                    <p
                        data-codeproduct={item.codeProduct}
                        data-amount={item.amount}
                        data-priceproduct = {item.priceProduct}
                        onClick={(e) => remove(e)}
                    >remover</p>
                </s.Qtd>
                <p>receba em até 5 dias</p>
                <div>
                    <TitleDiscount>De: R$ {item.discount},00</TitleDiscount>
                    <h4>Por: R$ {item.priceProduct},00</h4>
                </div>
            </s.ItemCart>
            <s.HorizontalLine />
        </s.ItemCartContainer>
    )
}