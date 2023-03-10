import { useState } from 'react'
import { dataProducts } from './components/products/Products'
import { Header } from './components/header/Header'
import { Main } from './components/main/Main'
import { Filter, SortingArray } from './components/filter/Filter'
import { CartShop } from './components/cart/CartShop'
import { PageConfirm } from './components/pageConfirm/PageConfirm'

function App() {
  const [product, setProduct] = useState(dataProducts)
  const [gender, setGender] = useState('')
  const [isOn, setIsOn] = useState(false)
  const [description, setDescription] = useState('')
  const [triage, setTriage] = useState('relevance')
  const [isOnTriage, setIsOnTriage] = useState(false)
  const [vMin, setvMin] = useState(0)
  const [vMax, setvMax] = useState(0)
  const [screen, setScreen] = useState('main')
  const [cart, setCart] = useState([])
  const [totalItems, setTotalItems] = useState(0)
  const [totalValue, setTotalValue] = useState(0)

  function setFilterIsOn() {
    setIsOn(true)
  }

  function qtdProducts() {
    return product.length
  }

  if (isOn) {
    Filter({ setProduct, gender, description, vMin, vMax, setDescription })
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
        setScreen={setScreen}
        totalItems={totalItems}
      />
      {
        screen === 'main' ?
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
            setCart={setCart}
            cart={cart}
            setTotalItems={setTotalItems}
            setTotalValue={setTotalValue}
          />
          :
          screen === 'Cart' ?
            <CartShop
              setScreen={setScreen}
              cart={cart}
              setCart={setCart}
              totalItems={totalItems}
              setTotalItems={setTotalItems}
              totalValue={totalValue}
              setTotalValue={setTotalValue}
            />
            :
            <PageConfirm
              cart={cart}
              setCart={setCart}
              setTotalItems={setTotalItems}
              setScreen={setScreen}
            />
      }
      <footer></footer>
    </body>
  )
}

export default App
