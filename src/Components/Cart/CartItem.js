import React from "react";

export default function CartItem({item,value}){
    const{id,img,price,title,total,count} = item;
    const {increment,decrement,removeItem} = value; 
    return(
        <div className="row my-2 text-center text capitalize">
            <div className="col-10 max-auto col-lg-2">
                <img src={img} style={{width:'5rem', height:'5rem'}} className="img-fluid" alt="product"></img>
            </div>
            <div className="col-10 max-auto col-lg-2">
                <span className="d-lg-none">Product:</span>
                {title}
            </div>
            <div className="col-10 max-auto col-lg-2">
                <span className="d-lg-none">Price:</span>
                {price}
            </div>
            <div className="col-10 max-auto col-lg-2">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={()=>decrement(id)}>
                            -
                        </span>
                        <span className="btn btn-black mx-1">
                            {count}
                        </span>
                        <span className="btn btn-black mx-1" onClick={()=>increment(id)}>
                            +
                        </span>
                    </div>
                </div>
            </div>
            <div className="col-10 max-auto col-lg-2">
                <div className="cart-icon" onClick={()=>removeItem(id)}>
                    <i className="fas fa-trash"></i>
                </div>
            </div>
            <div className="col-10 max-auto col-lg-2">
                <strong>Total: <img src="./icons/currency.png" height="15px"></img>{total}</strong>
            </div>
        </div>
    );
}