import React from "react";
import { dataProducts } from "../products/Products";

export function Filter(props) {
    const { gender, setProduct } = props
    let copyProducts = [...dataProducts]

    if (gender === 'todos') {
        copyProducts = dataProducts.map(e => e)
        setProduct(copyProducts)    
        return
    }
    if (gender && gender.length>0) {
        copyProducts = dataProducts.filter(e => e.genderProduct === gender)
        setProduct(copyProducts)    
    }
}