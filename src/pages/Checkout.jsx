import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import apple from "../assets/products/apple.png";
import Button from "../components/Button";
import axios from "axios";

const cart = [
  {
    description: "200g cheese block",
    id: 1,
    image:
      "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/cheese.png",
    name: "Cheese",
    price: 10,
    price_id: "price_1HuavSGuhXEITAut56IgndJf",
    quantity: 3,
  },
  {
    description: "1 piece of tomato",
    id: 3,
    image:
      "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/tomato.png",
    name: "Tomato",
    price: 2.75,
    price_id: "price_1HxW4YGuhXEITAutgcWugXH7",
    quantity: 3,
  },
  {
    description: "500g pineapple",
    id: 4,
    image:
      "https://res.cloudinary.com/dbfn5lnvx/image/upload/q_auto/v1607769454/react-tutorial/products/final/pineapple.png",
    name: "Pineapple",
    price: 3.25,
    price_id: "price_1HxW59GuhXEITAutCwoYZoOJ",
    quantity: 2,
  },
  {
    description: "200ml milk bottle",
    id: 2,
    image: apple,
    name: "Apple",
    price: 5,
    price_id: "price_1HxVriGuhXEITAutt5KUKo2V",
    quantity: 1,
  },
];
const totalPrice = cart.reduce((total, product) => {
  total + product.price * product.quantity, 0;
});
console.log(totalPrice);
const states = [
  { value: "IN-AN", label: "Andaman and Nicobar Islands" },
  { value: "IN-AP", label: "Andhra Pradesh" },
  { value: "IN-AR", label: "Arunachal Pradesh" },
  { value: "IN-AS", label: "Assam" },
  { value: "IN-BR", label: "Bihar" },
  { value: "IN-CH", label: "Chandigarh" },
  { value: "IN-CT", label: "Chhattisgarh" },
  { value: "IN-DN", label: "Dadra and Nagar Haveli" },
  { value: "IN-DD", label: "Daman and Diu" },
  { value: "IN-DL", label: "Delhi" },
  { value: "IN-GA", label: "Goa" },
  { value: "IN-GJ", label: "Gujarat" },
  { value: "IN-HR", label: "Haryana" },
  { value: "IN-HP", label: "Himachal Pradesh" },
  { value: "IN-JK", label: "Jammu and Kashmir" },
  { value: "IN-JH", label: "Jharkhand" },
  { value: "IN-KA", label: "Karnataka" },
  { value: "IN-KL", label: "Kerala" },
  { value: "IN-LA", label: "Ladakh" },
  { value: "IN-LD", label: "Lakshadweep" },
  { value: "IN-MP", label: "Madhya Pradesh" },
  { value: "IN-MH", label: "Maharashtra" },
  { value: "IN-MN", label: "Manipur" },
  { value: "IN-ML", label: "Meghalaya" },
  { value: "IN-MZ", label: "Mizoram" },
  { value: "IN-NL", label: "Nagaland" },
  { value: "IN-OR", label: "Odisha" },
  { value: "IN-PY", label: "Puducherry" },
  { value: "IN-PB", label: "Punjab" },
  { value: "IN-RJ", label: "Rajasthan" },
  { value: "IN-SK", label: "Sikkim" },
  { value: "IN-TN", label: "Tamil Nadu" },
  { value: "IN-TG", label: "Telangana" },
  { value: "IN-TR", label: "Tripura" },
  { value: "IN-UT", label: "Uttarakhand" },
  { value: "IN-UP", label: "Uttar Pradesh" },
  { value: "IN-WB", label: "West Bengal" },
];

export default function Checkout() {
  // const [data, setData] = useState({ fname: "", lname: "", street: "", pincode: "", phoneNumber: "" });
  // const handleChange = ({ currentTarget: input }) => {
  //   setData({ ...data, [input.name]: input.value });
  // };
  // useEffect(() => {
  // });
  const handleSubmit = () => {
    console.log("submitted");
  };
  return (
    <>
      {cart.length > 0 && (
        <div className="grid grid-cols-3 gap-2 my-2 mx-2">
          <div className="col-span-2 p-4">
            <h4 className="text-black font-medium text-md my-1">
              Billing Information
            </h4>
            <form
              className="space-y-6 mb-10"
              action="#"
              method="POST"
              // onSubmit={(e) => handleLogin(e)}
            >
              <div className="flex col-span-2 justify-start gap-8">
                <div className="flex flex-col gap-2">
                  <label
                    htmlFor="firstName"
                    className="block text-xs font-medium leading-6 text-gray-900"
                  >
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="fname"
                    type="text"
                    autoComplete="name"
                    //   onChange={handleChange}
                    placeholder="Your First Name"
                    required
                    className="block w-full rounded-lg border-0 px-2 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="flex flex-col col-span-2 gap-2">
                  <label
                    htmlFor="lastName"
                    className="block text-xs font-medium leading-6 text-gray-900"
                  >
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lname"
                    type="text"
                    autoComplete="name"
                    //   onChange={handleChange}
                    placeholder="Your Last Name"
                    required
                    className="block w-full rounded-lg border-0 px-2 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              {/* STREET */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="street"
                  className="block text-xs font-medium leading-6 text-gray-900"
                >
                  Street Address
                </label>
                <input
                  id="street"
                  name="street"
                  type="text"
                  autoComplete="street"
                  //   onChange={handleChange}
                  placeholder="Street"
                  required
                  className="block w-full rounded-lg border-0 px-2 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                />
              </div>
              <div className="flex col-span-2">
                <div className="flex gap-8">
                  {/* COUNTRY */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="country"
                      className="block text-xs font-medium leading-6 text-gray-900"
                    >
                      Country / Region
                    </label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      // autoComplete="street"
                      //   onChange={handleChange}
                      // placeholder="Country"
                      disabled
                      value="India"
                      readOnly
                      required
                      className="block w-full rounded-lg border-0 px-2 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                    />
                  </div>
                  {/* STATE */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="firstName"
                      className="block text-xs font-medium leading-6 text-gray-900"
                    >
                      State
                    </label>
                    <select
                      id="state"
                      name="state"
                      // type="dropdown"
                      title="State"
                      //   onChange={handleChange}
                      placeholder="State"
                      required
                      className="block w-full rounded-lg border-0 px-2 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                    >
                      {states.map((state) => (
                        <option key={state.value} value={state.value}>
                          {state.label}
                        </option>
                      ))}
                    </select>
                  </div>
                  {/* PINCODE */}
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="pincode"
                      className="block text-xs font-medium leading-6 text-gray-900"
                    >
                      Pincode
                    </label>
                    <input
                      id="pincode"
                      name="pincode"
                      type="number"
                      autoComplete="pincode"
                      //   onChange={handleChange}
                      placeholder="Pincode"
                      required
                      maxLength="6"
                      className="block w-full rounded-lg border-0 px-2 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                {/* PHONE NUMBER */}
                <div className="flex flex-col gap-2 max-w-[150px]">
                  {/* <div className="flex flex-col col-span-1"> */}
                  <label
                    htmlFor="phoneNumber"
                    className="block text-xs font-medium leading-6 text-gray-900"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phoneNumber"
                    name="phoneNumber"
                    type="number"
                    autoComplete="tel"
                    //   onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    maxLength="10"
                    className="block w-full rounded-lg border-0 px-2 py-1.5 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-secondary sm:text-sm sm:leading-6"
                  />
                  {/* </div> */}
                </div>
              </div>
            </form>
          </div>
          <div className="flex flex-col p-4">
            <div className="px-4 ml-10 border border-gray-100 text-gray-700 rounded-md">
              <h2 className="text-gray-900 text-lg font-medium py-2">
                Order Summary
              </h2>
              <div>
                {cart.map((product) => {
                  return (
                    <div
                      className="flex gap-1 items-center  justify-between"
                      key={product.id}
                    >
                      <div className="flex items-center">
                        <img
                          src={product.image}
                          width="20"
                          height="20"
                          alt=""
                        />
                        <span className="text-xs text-black ml-2">
                          {product.name} x {product.quantity}
                        </span>
                      </div>
                      <p className="text-xs text-black">₹{product.price}</p>
                    </div>
                  );
                })}
              </div>
              <div className="grid grid-cols-4 border-b border-gray-200">
                <p className="col-span-3 text-xs pt-4 pb-2 text-gray-700 font-small">
                  Subtotal
                </p>
                <span className="text-xs pt-4 pb-2 font-small text-right text-black">
                  ₹{totalPrice || 100}
                </span>
              </div>
              <div className="grid grid-cols-4 border-b border-gray-200">
                <p className="col-span-3 text-xs py-2 text-gray-700 font-small">
                  Shipping
                </p>
                <span className="text-xs py-2 font-small text-right text-black">
                  Free
                </span>
              </div>
              <div className="grid grid-cols-4">
                <p className="col-span-3 text-xs py-2 text-gray-700 font-small">
                  Total
                </p>
                <span className="text-xs py-2 text-gray-700 font-small text-right">
                  <strong>₹{totalPrice || 100}</strong>
                </span>
              </div>
              <h3 className="text-gray-900 text-sm font-medium py-2">
                Payment Method
              </h3>
              <div className="flex flex-col gap-2">
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="text-xs h-3 "
                    name="paymentMethod"
                    value="cod"
                  />
                  <span className="ml-2 text-xs">Cash on Delivery</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="text-xs h-3 "
                    name="paymentMethod"
                    value="card"
                  />
                  <span className="ml-2 text-xs">Card</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="text-xs h-3"
                    name="paymentMethod"
                    value="upi"
                  />
                  <span className="ml-2 text-xs">UPI</span>
                </label>
                <Link to="/success" className="pb-4 pt-2">
                  <Button
                    className=" text-white font-sm bg-primary text-xs py-2 px-3 rounded-full text-center"
                    onClick={handleSubmit} type="submit"
                  >
                    Place Order
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* </div> */}
    </>
  );
}