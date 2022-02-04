import React, { useState } from "react";

const Product = (props) => {
    const [count, setCount] = useState(1);
    const [cart, updateCart] = useState([]);
    const handleMinusClick = () =>
        count > 1 ? setCount(count - 1) : setCount(count - 0);

    const addToBasket = () => {
        for (let i = 0; i < count; i++) {
            updateCart((cart) => [...cart, props.product]);
        }
    };

    return (
        <section className="product-block" id="main">
            <div className="product-block__inner">
                <img
                    className="product-block__image"
                    src={props.product?.imgUrl}
                    alt={props.product?.name}
                />
                <div className="product-block__info">
                    <div className="product-block__content">
                        <h1 className="mb-1">{props.product?.name}</h1>
                        <p className="font-colour-blue-grey">
                            {props.product?.power} // Packet of {props.product?.quantity}
                        </p>
                    </div>

                    <div className="product-block__cta-container background-deep-navy">
                        <div className="flex flex-space-between flex-align-center">
                            <h2>{(props.product?.price / 100).toFixed(2)}</h2>
                            <div className="flex flex-align-center quantity-block">
                                <button
                                    data-testid="decrementBtn"
                                    onClick={handleMinusClick}
                                    className="quantity-block__btn"
                                >
                                    -
                                </button>
                                <h3
                                    data-testid="counter"
                                    className="quantity-block__counter"
                                >
                                    {count}
                                </h3>
                                <button
                                    data-testid="incrementBtn"
                                    onClick={() => setCount(count + 1)}
                                    className="quantity-block__btn"
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        <button
                            data-testid="addToBasketBtn"
                            onClick={addToBasket}
                            className="button button--pink mt-2"
                        >
                            Add to cart
                        </button>

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
