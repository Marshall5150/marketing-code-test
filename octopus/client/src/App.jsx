import React from "react";
import { useQuery, gql } from "@apollo/client";

// components
import Navigation from "./components/Navigation";
import Product from "./components/Product";
import ProductDescription from "./components/ProductDescription";
import ProductSpecification from "./components/ProductSpecification";

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

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error</p>;

    return (
        <React.Fragment>
            <Navigation />
            <Product product={data.product} />
            <ProductDescription product={data.product} />
            <ProductSpecification product={data.product} />
        </React.Fragment>
    );
};

export default App;
