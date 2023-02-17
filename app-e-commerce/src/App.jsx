import { useState } from 'react'
import { dataProducts } from './components/products/Products'
import { Header } from './components/header/Header'
import { Main } from './components/main/Main'
import { Filter } from './components/filter/Filter'

function App() {
  const [product, setProduct] = useState(dataProducts)
  const [gender, setGender] = useState('')
  const [isOn, setIsOn] = useState(false)

  if (isOn) {
    Filter({ setProduct, gender })
    setIsOn(false)
  } 
  
  return (
    <body>
      <Header
        setGender={setGender}
        setIsOn={setIsOn}
      />
      <Main
        product={product}
      />
      <footer></footer>
    </body>
  )
}

export default App
