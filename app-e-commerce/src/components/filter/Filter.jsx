import { dataProducts } from "../products/Products";

export function Filter(props) {
    let { gender, setProduct, description, vMin, vMax, setDescription, setTriage } = props
   
    vMax = +vMax === 0 ? Infinity : vMax

    let copyProducts = [...dataProducts]  
    
    if ( gender !== 'todos') {
        copyProducts = copyProducts.filter(e => e.genderProduct === gender)
    } 

    if (vMax > 0 && vMin >= 0) {
        copyProducts = copyProducts.filter(e =>
            e.priceProduct >= +vMin && e.priceProduct <= +vMax
        )
    }

    if (description && description.length > 0) {
        copyProducts = copyProducts.filter(e => e.descriptionProduct.toLowerCase().includes(description.toLowerCase()))
    }
    setProduct(copyProducts)
    setTriage('relevance')
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

export function currencyBrazilValue (value, symbol) {
    if (!value) return null
    if (symbol) {
      return value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
    }
    return value.toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }