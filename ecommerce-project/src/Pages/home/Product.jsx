import { formatMoney } from "../../utils/money";
import axios from "axios";
import { useState,useRef} from "react";
export function Product({ product, fetchCartItems }) {
  const [quantity, setQuantity] = useState(1);
  const divref=useRef(null);
  const addToCart = async () => {
    await axios.post("/api/cart-items", {
      productId: product.id,
      quantity: quantity,
    });
    divref.current.style.opacity=1;
    setTimeout(() => {
      divref.current.style.opacity=0;
    }, 2000);
    await fetchCartItems();

    // order of execution explanation:
    // Call Stack:
    // addToCart()
    // ↓
    // await axios.post() → pause function
    // ↓
    // (Call stack empty)

    // Web API:
    // HTTP POST request in progress
    // ↓
    // Promise resolved

    // Microtask Queue:
    // resume addToCart
    // ↓
    // await fetchCartItems() → pause again
    // ↓
    // HTTP GET request in progress
    // ↓
    // Promise resolved

    // Microtask Queue:
    // resume addToCart
    // ↓
    // function completes
  };
  const onQuantityChange = (event) => {
    setQuantity(Number(event.target.value));
  };
  return (
    <div className="product-container">
      <div className="product-image-container">
        <img className="product-image" src={product.image} />
      </div>

      <div className="product-name limit-text-to-2-lines">{product.name}</div>

      <div className="product-rating-container">
        <img
          className="product-rating-stars"
          src={`images/ratings/rating-${product.rating.stars * 10}.png`}
        />
        <div className="product-rating-count link-primary">
          {product.rating.count}
        </div>
      </div>

      <div className="product-price">{formatMoney(product.priceCents)}</div>

      <div className="product-quantity-container">
        <select value={quantity} onChange={onQuantityChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div className="product-spacer"></div>

      <div ref={divref} className="added-to-cart">
        <img src="images/icons/checkmark.png" />
        Added
      </div>

      <button className="add-to-cart-button button-primary" onClick={addToCart}>
        Add to Cart
      </button>
    </div>
  );
}
