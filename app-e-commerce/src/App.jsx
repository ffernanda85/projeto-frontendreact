import { useState } from 'react'
import { dataProducts } from './components/products/Products'
import { Header } from './components/header/Header'
import { Main } from './components/main/Main'
import { Filter, SortingArray } from './components/filter/Filter'
import {Test} from './Fla' 

function App() {
  const [product, setProduct] = useState(dataProducts)
  const [gender, setGender] = useState('')
  const [isOn, setIsOn] = useState(false)
  const [description, setDescription] = useState('')
  const [triage, setTriage] = useState('relevance')
  const [isOnTriage, setIsOnTriage] = useState(false)
  const [vMin, setvMin] = useState(0)
  const [vMax, setvMax] = useState(0)

  function setFilterIsOn() {
    setIsOn(true)
  }

  function qtdProducts() {
    return product.length
  }

  if (isOn) {
    Filter({ setProduct, gender, description, vMin, vMax })
    setIsOn(false)
  }

  if (isOnTriage) {
    SortingArray(product, triage)
    setIsOnTriage(false)
  }

  return (
    <body>
      <Header
        setGender={setGender}
        setIsOn={setIsOn}
        description={description}
        setDescription={setDescription}
        setFilterIsOn={setFilterIsOn}
      />
      <Main
        product={product}
        qtdProducts={qtdProducts}
        triage={triage}
        setTriage={setTriage}
        SortingArray={SortingArray}
        setIsOnTriage={setIsOnTriage}
        vMin={vMin}
        vMax={vMax}
        setvMin={setvMin}
        setvMax={setvMax}
        setIsOn={setIsOn}
        setFilterIsOn={setFilterIsOn}
      />
      <footer></footer>
    </body>
  )
}

export default App
