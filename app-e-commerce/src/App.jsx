import { useState } from 'react'
import { dataProducts } from './components/products/Products'
import { Header } from './components/header/Header'
import { Main } from './components/main/Main'

function App() {
  const [product, setProduct] = useState(dataProducts)
    
  return (
    <body>
      <Header />
      <Main
        product={product}
      />
      <footer></footer>
    </body>
  )
}

export default App
