import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";

import { addToCart } from "../actions/cartActions";

import { useNavigate } from "react-router-dom";

function Item({ product }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  function handleAddToCart() {
    if (!user) {
      navigate("/signin");
    } else {
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  }

  return (
    <div className="product">
      <h4>{product.title}</h4>
      <p>{product.price}</p>
      <button onClick={handleAddToCart}>Add To Cart</button>
    </div>
  );
}

Item.propTypes = {
  product: PropTypes.object,
};

export default Item;
