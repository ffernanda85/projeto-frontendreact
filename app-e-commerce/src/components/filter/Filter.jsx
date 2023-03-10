import { dataProducts } from "../products/Products";

export function Filter(props) {
    const { gender, setProduct, description, vMin, vMax, setDescription } = props
    let copyProducts = [...dataProducts]

    if (gender && gender === 'todos') {
        setProduct(copyProducts)
        return    
    } 
    if (vMax > 0 && vMin >= 0) {
        copyProducts = copyProducts.filter(e =>
            e.priceProduct >= +vMin && e.priceProduct <= +vMax
        )
    } 
    if (description && description.length > 0) {
        copyProducts = copyProducts.filter(e => e.descriptionProduct.toLowerCase().includes(description.toLowerCase()))
    } 
    if (gender && gender.length > 0) {
        copyProducts = copyProducts.filter(e => e.genderProduct === gender)
    }

    setProduct(copyProducts)
    setDescription('')
    return
}

export function SortingArray(arrayProducts, type) {

    if (type === 'down') {
        return arrayProducts.sort((a, b) => a.priceProduct - b.priceProduct)
        
    } else if (type === 'up') {
        return arrayProducts.sort((a, b) => b.priceProduct - a.priceProduct)
        
    } else if (type === 'relevance') {
        return arrayProducts.sort((a, b) => +b.codeProduct - +a.codeProduct)
    }
}
