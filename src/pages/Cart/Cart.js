import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCart, removeFromCart } from "../../api/cartApi";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/login");
      return;
    }
    const fetchCart = async () => {
      const response = await getCart(token);
      setCart(response.data);
    };
    fetchCart();
  }, [token]);

  return (
    <div>
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item._id}>
          <p>{item.name}</p>
          <button onClick={() => removeFromCart(item._id, token)}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
