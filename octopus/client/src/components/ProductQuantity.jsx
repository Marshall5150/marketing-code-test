import React, { useState } from "react";

const ProductQuantity = (props) => {
    const [count, setCount] = useState(1);
    const [cart, updateCart] = useState([]);
    const handleMinusClick = () =>
        count > 1 ? setCount(count - 1) : setCount(count - 0);

    const addToBasket = () => {
        for (let i = 0; i < count; i++) {
            updateCart((cart) => [...cart, props.product]);
        }
    };

    console.log(cart);

    return (
        <section className="background-deep-navy">
            <div className="container">
                <p>Add to cart area</p>
                <button onClick={handleMinusClick}>minus</button>
                <p>{count}</p>
                <button onClick={() => setCount(count + 1)}>plus</button>

                <button onClick={addToBasket}>Add to cart</button>
            </div>
        </section>
    );
};

export default ProductQuantity;
