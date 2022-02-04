import React from "react";

const ProductDescription = (props) => {
    return (
        <section className="background-lighter-navy">
            <div className="container">
                <h2 className="mb-1">Description</h2>
                <p>{props.product.description}</p>
            </div>
        </section>
    );
};

export default ProductDescription;
