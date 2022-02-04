import React, { useState } from "react";

const Product = (props) => {
    const [count, setCount] = useState(1);
    const [cart, updateCart] = useState([]);

    // Only decreases the quantity if the current value is larger than 1
    const handleMinusClick = () =>
        count > 1 ? setCount(count - 1) : setCount(count - 0);

    // Loops through the quantity and updates array
    const addToBasket = () => {
        for (let i = 0; i < count; i++) {
            updateCart((cart) => [...cart, props.product]);
        }
    };

    return (
        <section className="product-block">
            <div className="product-block__inner">
                <img
                    className="product-block__image"
                    src={props.product?.imgUrl}
                    alt={props.product?.name}
                />
                <div className="product-block__content">
                    <div className="product-block__info">
                        <h1 className="mb-1">{props.product?.name}</h1>
                        <p className="font-colour-blue-grey">
                            {props.product?.power} // Packet of {props.product?.quantity}
                        </p>
                    </div>

                    <div className="product-block__cta-container background-deep-navy">
                        <div className="flex flex-space-between flex-align-center">
                            <h2>{(props.product?.price / 100).toFixed(2)}</h2>
                            <div className="flex flex-align-center">
                                <button
                                    data-testid="decrementBtn"
                                    onClick={handleMinusClick}
                                    className="button button--icon-btn"
                                    aria-label={"Decrease quantity, current value is: " + count}
                                >
                                    -
                                </button>
                                <h3
                                    data-testid="counter"
                                    className="ml-1 mr-1"
                                >
                                    {count}
                                </h3>
                                <button
                                    data-testid="incrementBtn"
                                    onClick={() => setCount(count + 1)}
                                    className="button button--icon-btn"
                                    aria-label={"Increase quantity, current value is: " + count}
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <button
                            data-testid="addToBasketBtn"
                            onClick={addToBasket}
                            className="button button--pink mt-2"
                            aria-label={"Add these " + count + " item(s) to your basket"}
                        >
                            Add to cart
                        </button>

                        {/* This is just a mockup to show the items get added to the basket.
                            Ideally I would have liked to return this data to the parent and then display a message such as a toast
                            to inform the user how many items had been added to their basket
                        */}
                        <div data-testid="basket">
                            {cart.length !== 0 ? <p aria-live="assertive" role="alert">You have {cart.length} items in your basket</p> : null}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Product;
