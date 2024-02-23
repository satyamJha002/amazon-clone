import React from "react";
import "./Home.css";
import Product from "../Product/Product";
const Home = () => {
  return (
    <div className="home">
      <img
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="amazon-img"
        className="home__img"
      />

      {/* Product id, title, price, rating, image */}
      <div className="home__row">
        <Product
          id="12321341"
          title="The Lean Startup"
          price={29.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="12321343"
          title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
          price={159.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_UL600_SR600,400_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321231"
          title="Samsung Smart watch"
          price={29.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        />
        <Product
          id="12321341"
          title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
          price={98.99}
          rating={5}
          image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
        />
        <Product
          id="12321341"
          title="New Apple iMac with Retina 5K display 2020 (27 inch) Space Grey"
          price={999.99}
          rating={5}
          image="https://www.apple.com/v/mac/home/bx/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png"
        />
      </div>
      <div className="home__row">
        <Product
          id="12321341"
          title="Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED "
          price={999.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        />
      </div>

      {/* Product */}
    </div>
  );
};

export default Home;
