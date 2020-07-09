import React, { Component } from 'react';
import {DataConsumer} from '../context';
import {Link} from 'react-router-dom';
import {ButtonContainer} from './Button';

export default class ProductDetails extends Component{
    render(){
        return(
            <DataConsumer>
                {value => {
                   const {id,company,img,info,price,title,inCart} = value.detailProduct;
                   return(
                        <div className="container py-5">
                            {/*Title */}
                            <div className="row ">
                                <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                                    <h1>{title}</h1>
                                </div>
                            </div>
                            {/*end title */}
                            {/*Product info */}
                            <div className="row">
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <img src={img} className="img-fluid" alt="Product"></img>
                                </div>
                                {/*Product info */}
                                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                    <h1>Model: {title}</h1>
                                    <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                                        Manufacturer: <span className="text-uppercase">
                                            {company}
                                        </span>
                                    </h4>
                                    <h4 className="text-blue"> 
                                        <strong>
                                            Price: <span><img src="./icons/currency.png" height="18px"></img></span>
                                            {price}
                                        </strong>
                                    </h4>
                                    <p className="text-capitalize font-weight-bold mt-3 mb-0">
                                        Product info:
                                    </p>
                                    <p className="text-muted lead">{info}</p>
                                    {/*buttons */}
                                    <div>
                                    <Link to="/">
                                        <ButtonContainer>Back to products</ButtonContainer>
                                    </Link>
                                        
                                    <ButtonContainer disabled={inCart?true:false} onClick={()=>{value.addToCart(id);value.openModal(id);}}>
                                        {inCart?"In Cart":"Add to cart"}
                                    </ButtonContainer>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                   )
                }}
            </DataConsumer>
        )
    }
}