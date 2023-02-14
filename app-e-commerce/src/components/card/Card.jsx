import { CardContent,TitleDiscount } from "./styledCard"

export function Card(props) {
    const {codeProduct, discount, descriptionProduct, imageProduct, colorProduct, sizeProduct, priceProduct, genderProduct} = props.item

    return (
        <CardContent>
            <img src={imageProduct} alt='' />
            <h4>{descriptionProduct}</h4>
            <TitleDiscount>De R$ {discount}.00</TitleDiscount>
            <h3>Por R$ {priceProduct}.00</h3>
            <button>Adicionar</button>
        </CardContent>
    )
}