// 5. Display the shopping cart before the online delivery (Add to cart funcGonality}
//     Product.js :-
//     import React from 'react';
//     function Product({ product, onAddToCart }) {
//      const handleAddToCart = () => {
//      onAddToCart(product);
//      };
//      return (
//      <div>
//      <h2>{product.name}</h2>
//      <img src={product.imageUrl} alt={product.name} />
//      <p>{product.price}</p>
//      <button onClick={handleAddToCart}>Add to Cart</button>
//      </div>
//      );
//     }
//     export default Product;
//     Cart.js :-
//     import React from 'react';
//     function Cart({ cartItems }) {
//      return (
//      <div>
//      <h2>Cart</h2>
//      <ul>
//      {cartItems.map((item) => (
//      <li key={item.id}>
//      {item.name} - {item.price}
//      </li>
//      ))}
//      </ul>
//      </div>
//      );
//     }
//     export default Cart;
//     App.js:-
//     import React, { useState } from 'react';
//     import Product from './Product';
//     import Cart from './Cart';
//     function App() {
//      const [cartItems, setCartItems] = useState([]);
//      const handleAddToCart = (product) => {
//      setCartItems([...cartItems, product]);
//      };
//      return (
//      <div>
//      <h1>My Online Store</h1>
//      <Product
//      product={{
//      id: 1,
//      name: 'Product 1',
//      price: 10.99,
//      imageUrl: 'https://via.placeholder.com/150',
//      }}
//      onAddToCart={handleAddToCart}
//      />
//      <Product
//      product={{
//      id: 2,
//      name: 'Product 2',
//      price: 19.99,
//      imageUrl: 'https://via.placeholder.com/150',
//      }}
//      onAddToCart={handleAddToCart}
//      />
//      <Cart cartItems={cartItems} />
//      </div>
//      );
//     }
//     export default App;