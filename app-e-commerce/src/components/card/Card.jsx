import { CardContent, CardText, TitleDiscount, ImgCard, BtnAdd } from "./styledCard"


export function Card(props) {
    const { codeProduct, discount, descriptionProduct, imageProduct, priceProduct } = props.item
    const {setCart, cart} = props

    function insertItemCart(e) {
        console.log(e.target.dataset.code)
        const newItem = {
            image: e.target.dataset.image,
            description: e.target.dataset.description,
            discount: e.target.dataset.discount,
            price: e.target.dataset.price,
            amount: 1
        }
        const copyCart = [...cart, newItem]
        setCart(copyCart)
    }
console.log(cart)

    return (
        <CardContent>
            <ImgCard src={imageProduct} alt={codeProduct} />
            <CardText>
                <h4>{descriptionProduct}</h4>
                <TitleDiscount>De R$ {discount}.00</TitleDiscount>
                <h3>Por R$ {priceProduct}.00</h3>
                <BtnAdd
                    onClick={(e) => insertItemCart(e)}
                    data-code={codeProduct}
                    data-image={imageProduct}
                    data-description={descriptionProduct}
                    data-discount={discount}
                    data-price={priceProduct}
                >Adicionar</BtnAdd>
            </CardText>
        </CardContent>
    )
}