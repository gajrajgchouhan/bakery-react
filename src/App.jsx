import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import { FiSearch } from "react-icons/fi";
import { productsInitialState } from "./State";

function App({ addProductToCart, removeProductFromCart }) {
    const [products, setProducts] = useState(productsInitialState);
    const [search, setSearch] = useState("");

    useEffect(() => {
        if (search == "") {
            setProducts(productsInitialState);
        } else {
            const filteredProducts = productsInitialState.filter((product) =>
                product.name.toLowerCase().includes(search.toLowerCase())
            );
            setProducts(filteredProducts);
        }
    }, [search]);

    return (
        <div>
            <Nav />
            <div>
                <img src="/landing.jpg" alt="landing" />
            </div>
            <hr className="border-2 border-black" />
            <div className="flex flex-wrap gap-4 items-center my-2 mx-2 lg:ml-8 lg:my-12">
                <h1 className="text-4xl font-bold tracking-wider">
                    Our Products !
                </h1>
                <div className="flex border-1 gap-0 items-center p-4">
                    <input
                        type="text"
                        value={search}
                        className="border-2 p-2"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <FiSearch size={30} />
                </div>
            </div>
            <div className="grid gap-3 grid-cols-1 md:grid-cols-4 mb-4 px-4">
                {products.length == 0 && (
                    <div className="text-xl my-4 text-center">
                        No Products Found
                    </div>
                )}
                {products.length > 0 &&
                    products.map((product) => (
                        <div
                            key={product.id}
                            className="border-2 rounded-md px-4 md:px-2 xl:px-8 py-2"
                        >
                            <div className="overflow-hidden">
                                <img
                                    src={product.url}
                                    alt={product.name}
                                    className="rounded-md hover:scale-125 transition duration-200"
                                />
                            </div>
                            <div className="flex flex-col mt-2 text-center gap-2">
                                <div className="text-lg md:text-base lg:text-xl font-bold flex flex-wrap justify-between items-center">
                                    <p>{product.name}</p>
                                    <p className="text-sm">
                                        Price: ${product.price}
                                    </p>
                                </div>
                                <p className="text-left italic">
                                    {product.description}
                                </p>
                                <div className="">
                                    <div>Cart Options: </div>
                                    <div
                                        onClick={() => {
                                            addProductToCart(product);
                                        }}
                                        className="mb-1 mx-2 md:mx-4 cursor-pointer bg-white text-black rounded-full px-1 lg:px-3 py-2 hover:bg-black hover:text-white transition duration-100 border border-black"
                                    >
                                        Add
                                    </div>
                                    <div
                                        onClick={() => {
                                            removeProductFromCart(product);
                                        }}
                                        className="mt-1 mx-2 md:mx-4 cursor-pointer bg-white text-black rounded-full px-1 lg:px-3 py-2 hover:bg-black hover:text-white transition duration-100 border border-black"
                                    >
                                        Remove
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}

export default App;
