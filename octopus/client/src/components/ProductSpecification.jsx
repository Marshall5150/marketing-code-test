import React from "react";

const ProductSpecification = (props) => {
    return (
        <section className="background-deep-navy">
            <div className="container">
                <h2 className="mb-1">Specifications</h2>
                <ul className="list-block">
                    <li className="list-block__item">
                        Brand <span>{props.product.brand}</span>
                    </li>
                    <li className="list-block__item">
                        Item weight <span>{props.product.weight}</span>
                    </li>
                    <li className="list-block__item">
                        Dimensions{" "}
                        <span>
                            {props.product.height}x{props.product.width}x
                            {props.product.length}
                        </span>
                    </li>
                    <li className="list-block__item">
                        Item model number <span>{props.product.modelCode}</span>
                    </li>
                    <li className="list-block__item">
                        Colour <span>{props.product.colour}</span>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default ProductSpecification;
