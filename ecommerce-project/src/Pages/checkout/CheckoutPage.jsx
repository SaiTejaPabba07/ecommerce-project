import axios from "axios";
import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";
import { useEffect, useState } from "react";
import "./checkoutpage.css";
import "./checkout-header.css";
//--> Sequence of events on checkout page load/refresh:
// /checkout refresh
// ↓
// intial App renders (cartItems = [])
// ↓
// intial CheckoutPage renders (deliveryOptions = [])
// ↓
// CheckoutPage comp useEffect → delivery options API
// ↓
// App comp useEffect → cart items API
// ↓
// deliveryOptions arrive → CheckoutPage re-render
// ↓
// cartItems arrive → App + CheckoutPage re-render
// ↓
// Full checkout page visible

export function CheckoutPage({ cartItems }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState(null);
  useEffect(() => {
    console.log("mounted");
    axios
      .get("/api/delivery-options?expand=estimatedDeliveryTime")
      .then((response) => setDeliveryOptions(response.data));
    console.log(deliveryOptions);
    axios
      .get("/api/payment-summary")
      .then((response) => setPaymentSummary(response.data));
    return () => {
      console.log("unmounted");
    };
  }, []);
  return (
    <>
      <title>Checkout</title>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <a href="/">
              <img className="logo" src="images/logo.png" />
              <img className="mobile-logo" src="images/mobile-logo.png" />
            </a>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <a className="return-to-home-link" href="/">
              3 items
            </a>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src="images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cartItems={cartItems} deliveryOptions={deliveryOptions} />
          {paymentSummary && (
            <PaymentSummary paymentSummary={paymentSummary} />
          )}
        </div>
      </div>
    </>
  );
}
