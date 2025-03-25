import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Home.css";

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="home-container">
      {/* Home Page Content */}
      <div className="home-content">
        <h1>Welcome to MyShop 🛍️</h1>
        <p>Find the best products at the best prices!</p>
        <div className="buttons">
          <Link to="/products" className="btn">Browse Products</Link>
          {user ? <Link to="/cart" className="btn">Go to Cart</Link> : <Link to="/login" className="btn">Login to Shop</Link>}
        </div>
      </div>
    </div>
  );
};

export default Home;
