import Confirm from "../img/done.svg"
import * as s from "./styledPageConfirm"
import { TitleDiscount } from "../card/styledCard"



export function PageConfirm(props) {
    const { cart, setCart, setScreen, setTotalItems, setClear } = props

    return (
        <s.ScreenConfirm>
            {cart.length ?
                <s.ScreenConfirm>
                    <s.Title>
                        <h1>Compra Realizada com Sucesso!!!</h1>
                        <s.ImgConfirm src={Confirm} alt="confirm" />
                    </s.Title>
                    <h4>seus produtos:</h4>
                    <s.ContainerProducts>
                        {
                            cart.map((e) =>
                                <s.Product>
                                    <s.ImgProduct src={e.imageProduct} />
                                    <s.DetailsProduct>
                                        <p>Qtd: {e.amount}</p>
                                        <h4>{e.descriptionProduct}</h4>
                                        <TitleDiscount>De: R$ {e.discount}.00</TitleDiscount>
                                        <h4>Por: R$ {e.priceProduct}.00 cada</h4>
                                        <p>Total R$ {e.amount * e.priceProduct}.00 </p>
                                    </s.DetailsProduct>
                                </s.Product>
                            )
                        }
                    </s.ContainerProducts>
                    <s.Home onClick={() => {
                        setScreen('main')
                        setCart([])
                        setTotalItems(0)
                        setClear(true)
                    }}
                    >Volte Sempre a nossa Loja!
                    </s.Home>
                </s.ScreenConfirm>
                :
                <s.ScreenConfirm>
                    <h1>Ops...Seu Carrinho Está Vazio!</h1>
                    <s.Home onClick={() => setScreen('main')}>Volte agora a Nossa Loja!!!</s.Home>
                </s.ScreenConfirm>}

        </s.ScreenConfirm>
    )

}