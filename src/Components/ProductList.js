import React, { Component } from 'react';
import Product from './Product';
import Title from './Title';
import { DataConsumer } from '../context';

export default class ProductList extends Component{   
    render(){        
        return(
            <React.Fragment>
                <div className="py-5">
                    <div className="container">                        
                        <Title name="our" title="product"></Title>
                        <div className="row">
                            <DataConsumer>
                                {value => {
                                    return value.products.map(product => {
                                        return <Product key={product.id} product={product}></Product>
                                    })
                                }}
                            </DataConsumer>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}