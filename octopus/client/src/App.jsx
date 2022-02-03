import React from 'react';
import { useQuery, gql } from '@apollo/client'

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
`

const App = () => {
    const { loading, error, data } = useQuery(PRODUCTS_LIST);

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error</p>;

    console.log('test')
    console.log(data.product)
    return (
        <div>
            <h1>Hello World</h1>
            {data.product.name}

        </div>
    )
};

export default App;
