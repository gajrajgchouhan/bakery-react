import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

export default function Nav() {
    const navigate = useNavigate();
    return (
        <nav className="flex justify-between items-center gap-4 px-2 md:px-4">
            <div
                className=" bg-white w-[4.5rem] cursor-pointer"
                onClick={() => navigate("/")}
            >
                <img src="/logo-2.png" alt="logo" />
            </div>
            <ul className="hidden md:visible md:flex gap-6 text-gray-400">
                <li
                    onClick={() => navigate("/")}
                    className="cursor-pointer transition text-black"
                >
                    Home
                </li>
                <li className="cursor-pointer transition hover:text-black">
                    About Us
                </li>
                <li className="cursor-pointer transition hover:text-black">
                    Services
                </li>
                <li className="cursor-pointer transition hover:text-black">
                    Contact Us
                </li>
            </ul>
            <div
                className="flex items-center px-4 py-2 cursor-pointer border-2 border-orange-200 bg-orange-200 rounded-sm hover:bg-white transition duration-200"
                onClick={() => navigate("/cart")}
            >
                <span className="mr-2">Cart</span>
                <HiShoppingCart />
            </div>
        </nav>
    );
}
