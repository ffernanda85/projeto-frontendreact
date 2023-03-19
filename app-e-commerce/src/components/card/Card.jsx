import { useEffect } from "react"
import { CardContent, CardText, TitleDiscount, ImgCard, BtnAdd } from "./styledCard"


export function Card(props) {
    const { item, setCart, cart, setTotalItems, setTotalValue} = props

    useEffect(() => {
        if (localStorage.cartShop) {
            setCart(JSON.parse(localStorage.cartShop))
        }
    }, [])

    useEffect(() => {
        let totalItems = 0
        let totalValue = 0

        if (cart.length) {
            cart.forEach(e => {
                totalItems += e.amount
                totalValue += (e.amount * e.priceProduct)
            });   
            setTotalItems(totalItems)
            setTotalValue(totalValue)
            localStorage.cartShop = JSON.stringify(cart)
        }
    }, [cart])

    function insertItemCart(e) {

        let copyCart = [...cart]
        let test = []
        
        const codeProduct = e.target.dataset.codeproduct
        const imageProduct = e.target.dataset.imageproduct
        const descriptionProduct = e.target.dataset.descriptionproduct
        const discount = e.target.dataset.discount
        const priceProduct = e.target.dataset.priceproduct
        
         if (copyCart.length) {
            test = copyCart.filter(item => item.codeProduct === codeProduct)
        }
       
        if (!test.length) {
            copyCart = [...cart,
                {
                    codeProduct: codeProduct,
                    imageProduct: imageProduct,
                    descriptionProduct: descriptionProduct,
                    discount: discount,
                    priceProduct: priceProduct,
                    amount: 1
                }
            ]
        } else {
            copyCart = copyCart.map(item => {
                if (item.codeProduct === codeProduct) {
                    item.amount += 1
                }
                return item
            })
        }
        setCart(copyCart)
        setTotalItems(prevState => prevState + 1)
        setTotalValue(prevState => +prevState + +priceProduct)
    }

    return (
        <CardContent>
            <ImgCard src={item.imageProduct} alt={item.codeProduct} />
            <CardText>
                <h4>{item.descriptionProduct}</h4>
                <TitleDiscount>De R$ {item.discount}.00</TitleDiscount>
                <h3>Por R$ {item.priceProduct}.00</h3>
                <BtnAdd
                    onClick={(e) => insertItemCart(e)}
                    data-codeproduct={item.codeProduct}
                    data-imageproduct={item.imageProduct}
                    data-descriptionproduct={item.descriptionProduct}
                    data-discount={item.discount}
                    data-priceproduct={item.priceProduct}
                >Adicionar</BtnAdd>
            </CardText>
        </CardContent>
    )
}