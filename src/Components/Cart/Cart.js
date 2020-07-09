import React, { Component } from 'react';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import {DataConsumer} from '../../context';
import CartList from './CartList';
import CartTotals from './CartTotals';

export default class Cart extends Component{
    render(){
        return(
            <section>
                <DataConsumer>
                    {value => {
                            const {cart} = value;
                            if(cart.length>0){
                               return( 
                                <React.Fragment>
                                    <Title name="Your" title="cart"></Title>
                                    <CartColumns></CartColumns>
                                    <CartList value={value}></CartList>
                                    <CartTotals value={value}></CartTotals>
                                </React.Fragment>
                               );
                            }
                            else{
                                return (<EmptyCart></EmptyCart>);
                            }
                        }
                    }
                </DataConsumer>                                
            </section>
        )
    }
}