import Confirm from "../img/done.svg"
import * as s from "./styledPageConfirm"
import { TitleDiscount } from "../card/styledCard"



export function PageConfirm(props) {
    const {cart, setScreen} = props
    
    return (
        <s.ScreenConfirm>
            {cart.length ?
                <s.ScreenConfirm>
                    <div>
                        <h1>Compra Realizada com Sucesso!!!</h1>
                        <img src={Confirm} alt="confirm" />
                    </div>
                        <h4>seus produtos:</h4>
                    <div>
                        { 
                            cart.map((item) => {
                                <div>
                                    <img src={item.image} />
                                    <h4>{item.description}</h4>
                                    <TitleDiscount>De:{item.discount}</TitleDiscount>
                                    <h4>Por:{item.price}</h4>
                                </div>
                            })
                        }
                    </div>
                    <s.Home onClick={()=>setScreen('main')}>Volte Sempre a nossa Loja!</s.Home>
                </s.ScreenConfirm>
                :
                <s.ScreenConfirm>
                    <h1>Ops...Seu Carrinho Está Vazio!</h1>
                    <s.Home onClick={()=>setScreen('main')}>Volte agora a Nossa Loja!!!</s.Home>
                </s.ScreenConfirm>}

        </s.ScreenConfirm>
    )

}