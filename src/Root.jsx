import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import Cart from "./components/Cart";
import App from "./App";

const Root = () => {
    const [cart, setCart] = useState({});
    const addProductToCart = (product) => {
        const newCart = { ...cart };
        if (newCart[product.id]) {
            newCart[product.id].quantity++;
        } else {
            newCart[product.id] = { ...product, quantity: 1 };
        }
        setCart(newCart);
    };
    const removeProductFromCart = (product) => {
        const newCart = { ...cart };
        if (newCart[product.id].quantity == 1) {
            delete newCart[product.id];
        } else {
            newCart[product.id].quantity--;
        }
        setCart(newCart);
    };
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <App
                            {...{
                                addProductToCart,
                                removeProductFromCart,
                            }}
                        />
                    }
                />
                <Route path="/cart" element={<Cart {...{ cart }} />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Root;
