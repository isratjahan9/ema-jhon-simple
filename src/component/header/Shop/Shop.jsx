import React, { useState } from 'react';
import fakeData from '../../../fakeData';
import './Shop.css';
import Product from '../product/product'
import Cart from '../Cart/Cart';



const Shop = () => {
    const first10=fakeData.slice(0,10)
   const [products,setProducts] = useState(first10);
   const [cart,setCart] = useState([]);
   const handleAddedProduct=(product)=>{
   const newCart=[...cart,product];
       setCart(newCart);
   }
   
    return (
        <div className="shop-container">
           
           <div className="product-container">
           {
               products.map(pd => <Product key={pd.key} 
                handleAddedProduct={handleAddedProduct}
                product={pd}></Product> )
           }
           </div>
           <div className="cart-container">
           <Cart cart={cart}></Cart>
           </div>
           
        </div>
    );
};

export default Shop;
