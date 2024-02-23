import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Checkout from "./components/Checkout/Checkout";
import React, { useEffect } from "react";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders/Orders";

const promise = loadStripe(
  "pk_test_51OmO1rSJKOGAIHS8hURckjUTUgTcHllNs6Zzq4v58dI4viMwb64KwUpij9AfsokQ8yb3gOCAdEJ4Zsek7OEIbDMx00BD3gCnTs"
);
function App() {
  // eslint-disable-next-line
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);
      if (authUser) {
        // the user just logged in/ the user was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <>
      <BrowserRouter>
        <div className="app">
          <Routes>
            <Route
              path="/orders"
              element={
                <>
                  <Header />
                  <Orders />
                </>
              }
            />
            <Route
              path="/"
              element={
                <>
                  <Header />
                  <Home />
                </>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/checkout"
              element={
                <>
                  <Header />
                  <Checkout />
                </>
              }
            />
            <Route
              path="/payment"
              element={
                <>
                  <Header />
                  <Elements stripe={promise}>
                    <Payment />
                  </Elements>
                </>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
