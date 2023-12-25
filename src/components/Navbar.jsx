import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { setAuth } from "../actions/authActions";
import { resetCart } from "../actions/cartActions";

import { useNavigate } from "react-router-dom";

function Navbar() {
  const cart = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(setAuth(null));
    dispatch(resetCart());
    navigate("/");
  };

  return (
    <header className="head">
      <ul className="nav">
        <li className="nav-list">
          <Link to="/">Product</Link>
        </li>
        {user && (
          <li className="nav-list">
            <Link to="/cart">
              Cart{" "}
              <span className="cart-num">
                {cart.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </Link>
          </li>
        )}
        <li className="nav-list">
          {user ? (
            <button onClick={handleSignOut}>Sign out</button>
          ) : (
            <Link to="/signin">Sign in</Link>
          )}
        </li>
      </ul>
    </header>
  );
}

export default Navbar;
