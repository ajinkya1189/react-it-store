import React, { Component } from 'react';

export default class EmptyCart extends Component{
    render(){
        return(
            <div className="container mt-5">                
                <div className="col-10 mx-auto text-center text-title">
                    <h1>Cart is empty</h1>
                </div>
            </div>
        )
    }
}