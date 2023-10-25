import './App.css'
import { sampleProducts } from './data'

function App() {

  return (
    <div>
      <header>
        ECommerce
      </header>
      <main>
        <ul>
          {
            sampleProducts.map(product => (
            <li key={product.slug}>
              <h2>{product.name}</h2>
              <img src={product.image} alt={product.name} className='product-image' />
              <p>Price: {product.price} $</p>
            </li>))
          }
        </ul>
      </main>
      <footer>
          Information
      </footer>
    </div>
  )
}

export default App
