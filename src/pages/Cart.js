
import { CartCard } from '../components/CartCard'
import { useTitle } from '../hooks/useTitle'

export const Cart = () => {
    useTitle('Shopping Cart - Cart')
    const products =[{"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/images/1001.png",},
                         {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/logo.png",}]
                     
  return (
    <main>
    <section className="products">
      { products.map((product) => (
        <CartCard key={product.id} product={product} />
      )) }        
    </section>
  </main>
  )
}
