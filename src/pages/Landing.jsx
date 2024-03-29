import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/landing/hero.png";
import Button from "../components/Button";
import shippingIcon from "../assets/landing/icon-1.png";
import guaranteeIcon from "../assets/landing/icon-2.png";
import secureIcon from "../assets/landing/icon-3.png";
import arrow from "../assets/products/arrow.png";
import rightArrow from "../assets/landing/arrow.svg";

import Product from "../components/Product";
import Category from "../components/Category";
import vegetables from "../assets/category/vegetables.png";
import fruits from "../assets/category/fruits.png";
import drinks from "../assets/category/drinks.png";
import snacks from "../assets/category/snacks.png";
import farmer from "../assets/landing/farmer-1.png";
import farmer2 from "../assets/landing/farmer-2.png";
import check from "../assets/landing/check.png";

import apple from "../assets/products/apple.png";
import cauliflower from "../assets/products/cauliflower.png";
import chinese_cabbage from "../assets/products/chinese_cabbage.png";
import corn from "../assets/products/corn.png";
import cucumber from "../assets/products/cucumber.png";
import eggplant from "../assets/products/eggplant.png";
import green_capsicum from "../assets/products/green_capsicum.png";
import green_chilly from "../assets/products/green_chilly.png";
import lettuce from "../assets/products/lettuce.png";
import mango from "../assets/products/mango.png";
import okra from "../assets/products/okra.png";
import potato from "../assets/products/potato.png";
import red_capsicum from "../assets/products/red_capsicum.png";
import tomato from "../assets/products/tomato.png";

const products = [
  {
    description: "250g green capsicum",
    id: 10,
    image: green_capsicum,
    name: "Green Capsicum",
    price: 60,
    stockStatus: 256,
    price_id: "price_1HxW59GuhXEITAutCwoYZoOJcap",
    isWishlist: false,
    category: "vegetables",
    discount: 30,
  },
  {
    description: "500g chinese cabbage",
    id: 6,
    image: chinese_cabbage,
    name: "Chinese Cabbage",
    price: 30,
    stockStatus: 256,
    price_id: "price_1HxW59GuhXEITAutCwoYZoOJcc",
    isWishlist: false,
    category: "vegetables",
    discount: 0,
  },
  {
    description: "1kg red mango",
    id: 13,
    image: mango,
    name: "Red Mango",
    price: 250,
    stockStatus: 256,
    price_id: "price_1HxW59GuhXEITAutCwoYZoOJmango",
    isWishlist: false,
    category: "fruits",
    discount: 20,
  },
  {
    description: "250g green apple",
    id: 19,
    image: apple,
    name: "Green Apple",
    price: 100,
    stockStatus: 256,
    price_id: "price_1HxW59GuhXEITAutCwoYZoOJkash",
    isWishlist: false,
    category: "fruits",
    discount: 10,
  },
];

function Landing() {
  return (
    <>
      {/* HERO */}
      <section className="flex w-auto mt-2 bg-green-50">
        <img
          src={heroImage}
          alt="vegetable basket"
          className=""
          height={800}
          width={500}
        />
        <div className="block mt-10 ml-10 w-2/5">
          <p className="text-secondary text-xs">WELCOME TO HARVESTLY</p>
          <h1 className="text-black mt-2 text-5xl font-semibold">
            Fresh & Healthy Organic Food
          </h1>
          <h2 className="text-black mt-5 text-3xl font-semibold">
            Sale up to <span className="text-orange-500">30% OFF</span>
          </h2>
          <p className="text-gray-500 text-xs mt-1">
            Free shipping on all your orders. We deliver, you enjoy!
          </p>
          <Link to="/shop">
            <Button className="flex items-center group mt-5 h-10 w-32 px-3 py-4 rounded-3xl font-medium text-sm text-white bg-primary">
              Shop Now
              <img
                className="pl-2 transform group-hover:translate-x-3 transition-transform duration-300"
                src={rightArrow}
              />
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
          <Link to="/shop">
            <div className="flex items-center">
              <span className="text-secondary font-medium">View All</span>
              <img src={arrow} className="h-3 w-5 ml-1" />
            </div>
          </Link>
        </div>
        <div className="flex justify-between items-center">
          {products.map((product) => {
            return <Product key={product.id} details={product}></Product>;
          })}
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
            <Category img={snacks} text="Dairy" />
            <Category img={fruits} text="Fruits" />
            <Category img={drinks} text="Beverages" />
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="flex justify-center items-start mb-10">
        <img
          src={farmer}
          alt="vegetable basket"
          className="h-80 w-72 mr-5"
          style={{ paddingLeft: "5%" }}
        />
        <img src={farmer2} alt="vegetable basket" height={450} width={450} />
        <div className="block mt-10 ml-10 w-2/5">
          <h1 className="text-black mt-2 text-5xl font-semibold">
            100% Trusted Organic Food Store
          </h1>
          <div className="flex items-center">
            <img src={check} className="inline-block mr-1 my-3" />
            <p className="text-black text-xl mt-1 inline-block">
              Healthy & natural food for lovers of healthy food
            </p>
          </div>

          <div className="flex items-center">
            <img src={check} className="inline-block mr-1" />
            <p className="text-black text-xl mt-1 inline-block">
              Every day fresh and quality products for you.
            </p>
          </div>

          <Link to="/shop">
            <Button className="flex items-center group mt-5 h-10 w-32 px-3 py-4 mr-2 rounded-3xl font-medium text-sm text-white bg-primary">
              Shop Now{" "}
              <img
                className="pl-2 transform group-hover:translate-x-3 transition-transform duration-300"
                src={rightArrow}
              />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Landing;
