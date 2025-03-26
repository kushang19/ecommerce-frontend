import { useState, useEffect, useContext } from "react";
import { getAllProducts } from "../../api/productApi";
import { CartContext } from "../../context/CartContext";
import "./Product.css";

const Product = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext); // Get cart function

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getAllProducts();
      console.log("Products", response?.data?.products);
      
      setProducts(response?.data?.products);
    };
    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      <h2>🛍️ Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product._id} className="product-card">
            <img src={product.imageUrl} alt={product.name} className="product-img" />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart 🛒</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
