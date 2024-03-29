import React from "react";
import "./Checkout.css";
import { useStateValue } from "../../StateProvider";

import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import Subtotal from "../SubTotal/Subtotal";

const Checkout = () => {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your shopping basket is empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            {/* List out all of the Checkout Products */}
            <h3>Hello, {user?.email}</h3>
            <h2 className="checkout__title">Your Shopping Basket</h2>

            {/* List out all of the checkout products */}
            {basket?.map((item) => (
              <CheckoutProduct
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
      </div>
      {/* Checkout Summary */}
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
};

export default Checkout;
