import React, { Component } from 'react';
import styles from 'styled-components';
import {Link} from 'react-router-dom'
import {DataConsumer} from '../context';
import styled from 'styled-components';

export default class Product extends Component{    
    render(){
        const {id, title, img, price, inCart} = this.props.product;
        return(
            <ProductWraper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
                <div className="card">
                   <DataConsumer>
                       {(value) => (
                           <div className="img-container p-5" onClick={() => value.handleDetail(id)}>
                           <Link to="/ProductDetails">
                               <img src={img} alt="product" className="card-img-top"></img>
                           </Link>
                           <button className="cartbtn" disabled={inCart?true:false} onClick={()=>{value.addToCart(id); value.openModal(id)}}>
                           {inCart?(
                           <p className="text-capitalize mb-0" disabled>
                               {" "}
                               In Cart
                           </p>):(<i className="fas fa-cart-plus"></i>)}
                           </button>                                             
                       </div>
                       )}
                    
                    </DataConsumer>
                    {/*card footer */}
                    <div className="card-footer d-flex justify-content-between">
                            <p className="align-self-center mb-0">{title}</p>
                            <h5 className="text-blue font-italic mb-0">
                                <span className="mr-1"><img src="./icons/currency.png" height="18px"></img></span>
                                {price}
                            </h5>
                    </div>
                </div>
            </ProductWraper>            
        )
    }
}

const ProductWraper = styled.div`
.card{
    border-color: transparent;
    transition: all ls linear;
}
.card-footer{
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
}
&:hover{
    .card{
        boder: 10px solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background: rgba(247,247,247);
    }
}
.img-container{
    position: relative;
    overflow: hidden;    
}
.card-img-top{
    transition: all 1s linear;
}
.img-container:hover .card-img-top{
    transform: scale(1.2);

}
.cartbtn{
    position: absolute;
    bottom:0;
    right:0;
    padding: 5px 5px;
    background: var(--lightBlue);
    border:none;
    color: var(--mainBlue);
    font-size: 20px;
    border-radius: 8px 0px 0px 0px;
    transform: translate(100%,100%);
    transition: all 1s linear; 
}
.img-container:hover .cartbtn{
    transform: translate(0,0);
}
.cartbtn:hover{
    color:var(--mainBlue);
    cursor: pointer;
}
`;