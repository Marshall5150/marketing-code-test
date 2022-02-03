import React from "react";
import { useQuery, gql } from "@apollo/client";

// components
import Navigation from "./components/Navigation";
import Product from "./components/Product";
import ProductQuantity from "./components/ProductQuantity";

const PRODUCTS_LIST = gql`
    {
        product(productId: 1) {
            id
            name
            power
            description
            price
            quantity
            brand
            weight
            height
            width
            length
            modelCode
            colour
            imgUrl
        }
    }
`;

const App = () => {
    const { loading, error, data } = useQuery(PRODUCTS_LIST);
    let basket = [];

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    console.log("test");
    console.log(data.product);
    // console.log(basket);

    return (
        <React.Fragment>
            <Navigation />
            <Product product={data.product}/>
            <ProductQuantity product={data.product}/>
            <section className="background-lighter-navy">
                <div className="container">
                    <h2>Description</h2>
                    <p>{data.product.description}</p>
                </div>
            </section>
        </React.Fragment>
    );
};

export default App;
