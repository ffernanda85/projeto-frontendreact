import { CardContent, CardText, TitleDiscount, ImgCard, BtnAdd } from "./styledCard"

export function Card(props) {
    const { codeProduct, discount, descriptionProduct, imageProduct, priceProduct } = props.item

    return (
        <CardContent>
            <ImgCard src={imageProduct} alt={codeProduct} />
            <CardText>
                <h4>{descriptionProduct}</h4>
                <TitleDiscount>De R$ {discount}.00</TitleDiscount>
                <h3>Por R$ {priceProduct}.00</h3>
                <BtnAdd>Adicionar</BtnAdd>
            </CardText>
        </CardContent>
    )
}