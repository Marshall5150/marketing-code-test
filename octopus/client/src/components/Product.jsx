import React from "react";

const Product = (props) => {

    return (
        <section className="product-block" id="main">
            <div className="container">
                <img
                    className="product-block__image"
                    src={props.product.imgUrl}
                    alt={props.product.name}
                />
                <div className="product-block__info">
                    <h1>{props.product.name}</h1>
                    <p>{props.product.power}</p>
                    <p>{props.product.quantity}</p>
                </div>
            </div>
        </section>
    );
};

export default Product;
