import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/landing/hero.png";
import Button from "../components/Button";
import shippingIcon from "../assets/landing/icon-1.png";
import guaranteeIcon from "../assets/landing/icon-2.png";
import secureIcon from "../assets/landing/icon-3.png";
import arrow from "../assets/products/arrow.png";

import Product from "../components/Product";
import Category from "../components/Category";
import vegetables from "../assets/vegetables.png";
import fruits from "../assets/fruits.png";
import drinks from "../assets/drinks.png";
import snacks from "../assets/snacks.png";
import farmer from "../assets/farmer-1.png";
import farmer2 from "../assets/farmer-2.png";
import check from "../assets/check.png"
function Landing() {
  return (
    <>
      {/* HERO */}
      <section className="flex w-auto mt-2 bg-green-50">
        <img src={heroImage} alt="vegetable basket" className="" height={800} width={500} />
        <div className="block mt-10 ml-10 w-2/5">
          <p className="text-secondary text-xs">WELCOME TO HARVESTLY</p>
          <h1 className="text-black mt-2 text-5xl font-semibold">
            Fresh & Healthy Organic Food
          </h1>
          <h2 className="text-black mt-5 text-3xl font-semibold">
            Sale up to <span className="text-orange-500">30% OFF</span>
          </h2>
          <p className="text-gray-500 text-xs mt-1">
            Free shipping on all your order. We deliver, you enjoy!
          </p>
          <Link to="/shop">
            <Button className="flex items-center mt-5 h-10 w-auto px-3 py-4 rounded-3xl font-light text-sm text-white bg-primary hover:bg-secondary">
              {`Shop Now`}
            </Button>
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="flex justify-center space-x-8 my-4 text-black">
        <div className="flex flex-col items-center">
          <img src={shippingIcon} />
          <p className="text-xs mt-2 font-semibold">Free Shipping</p>
          <p className="text-gray-500 text-xs mt-2">
            Free shipping with discount
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={secureIcon} />
          <p className="text-xs mt-2 font-semibold">100% Secure Payment</p>
          <p className="text-gray-500 text-xs mt-2">
            We ensure your money is safe
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img src={guaranteeIcon} />
          <p className="text-xs mt-2 font-semibold">Money-Back Guarantee</p>
          <p className="text-gray-500 text-xs mt-2">30 days money-back</p>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="flex flex-col justify-start px-5 mb-5">
        <div className="flex items-center justify-between">
          <h2 className="text-black font-semibold text-3xl">
            Featured Products
          </h2>
          <Link to="/*">
            <div className="flex items-center">
              <span className="text-secondary font-medium">View All</span>
              <img src={arrow} className="h-3 w-5 ml-1" />
            </div>
          </Link>
        </div>
        <div className="flex justify-between items-center">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>

      {/* SHOP BY CATEGORY */}
      <section className="flex flex-col justify-start bg-gray-50 pb-24">
        <div className="flex flex-col px-5">
          <h2 className="text-black font-semibold text-3xl mt-5">
            Shop by Category
          </h2>
          <div className="flex justify-around items-center mt-5">
            <Category img={vegetables} text="Vegetables" />
            <Category img={snacks} text="Snacks" />
            <Category img={fruits} text="Fruits" />
            <Category img={drinks} text="Soft Drinks" />
          </div>
        </div>
      </section>

      {/* SHOP BY CATEGORY */}
      <section className="flex justify-center items-start">
        <img src={farmer} alt="vegetable basket" className="h-80 w-72 mr-5" style={{paddingLeft: "5%"}}/>
        <img src={farmer2} alt="vegetable basket" height={450} width={450} />
        <div className="block mt-10 ml-10 w-2/5">
          <h1 className="text-black mt-2 text-5xl font-semibold">
            100% Trusted Organic Food Store
          </h1>
          <div className="flex items-center">
          <img src={check} className="inline-block mr-1 my-3"/>
          <p className="text-black text-xl mt-1 inline-block">Healthy & natural food for lovers of healthy food
          </p></div>

          <div className="flex items-center">
          <img src={check} className="inline-block mr-1"/>
          <p className="text-black text-xl mt-1 inline-block">Every day fresh and quality products for you.
          </p></div>
          
          <Link to="/shop">
            <Button className="flex items-center mt-5 h-10 w-auto px-3 py-4 rounded-3xl font-medium text-sm text-white bg-primary hover:bg-secondary">
              {`Shop Now`}
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Landing;