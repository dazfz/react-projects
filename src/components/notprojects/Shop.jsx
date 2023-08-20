import { useState, createContext } from 'react';

// Crear el contexto
export const ShopContext = createContext({
  products: [],
  cartItems: [],
  addToCart: () => {},
});

// Para pasar el contexto usar el Provider

// Luego, en el Componente.jsx se puede:
// const { cartItems } = useContext(ShopContext); o
// const { products, addToCart } = useContext(ShopContext);
export default function App() {
  const [cartItems, setCartItems] = useState([
    /* List of Items in Cart */
  ]);
  const products = 1/* some custom hook that fetches products and returns the fetched products */

  const addToCart = () => {
    // add to cart logic (this adds to cartItems)
  };

  return (
    /* We are going to pass the things that we want to inject to these components using the value prop */
    /* This value prop will overwrite the default value */
    <ShopContext.Provider value={{ cartItems, products, addToCart }}>
      <Header />
      <ProductDetail />
    </ShopContext.Provider>
  );
}