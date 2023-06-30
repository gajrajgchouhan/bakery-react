import React from "react";
import Nav from "./Nav";

const Cart = ({ cart }) => {
    console.log(cart);
    const cartSize = Object.keys(cart).length;
    return (
        <div>
            <Nav />
            <h1 className="text-3xl px-4">Cart</h1>
            {cartSize == 0 && (
                <div className="text-xl my-4 text-center">Cart is Empty</div>
            )}
            {cartSize > 0 && (
                <div className="flex flex-col gap-4">
                    <div className="p-4 grid gap-2 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                        {Object.values(cart).map((product) => (
                            <div
                                key={product.id}
                                className="flex border-2 rounded-md gap-4 p-8"
                            >
                                <div className="w-32">
                                    <img
                                        src={product.url}
                                        alt={product.name}
                                        className="rounded-md"
                                    />
                                </div>
                                <div className="flex flex-col justify-between text-left gap-2">
                                    <div className="text-lg md:text-base font-bold">
                                        <p>{product.name}</p>
                                        <p>Price: ${product.price}</p>
                                    </div>
                                    <div>
                                        <p>Quantity: {product.quantity}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div
                        className="mx-auto cursor-pointer mb-2 w-[10rem] text-center rounded-full px-4 py-2 border-black border-2"
                        onClick={() => alert(JSON.stringify(cart, null, 4))}
                    >
                        Checkout
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;
