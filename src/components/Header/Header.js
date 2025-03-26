import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./Header.css";

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo">🛒 MyShop</Link>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/product">Products</Link>
          {user ? (
            <>
              <Link to="/cart">Cart</Link>
              <button onClick={logout} className="logout-btn">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
