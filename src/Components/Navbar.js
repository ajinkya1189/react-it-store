import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Octa_Logo.png';
import styled from 'styled-components';
import {ButtonContainer} from './Button';

export default class Navbar extends Component {
    render() {
        return (
            <NavContainer className="navbar navbar-expand-sm navbar-dark px-sm-5">
                <Link to="/">
                    <img src={logo} alt="Octa IT Solution" className="navbar-brand" height="50px"></img>
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Products
                    </Link>
                    </li>
                </ul>
                <Link to="/Cart" className="ml-auto">
                    <ButtonContainer>
                        <span className="mr-2">
                        <i className="fas fa-cart-plus"></i>
                        </span>
                        my cart
                    </ButtonContainer>
                </Link>
            </NavContainer>

        )
    }
}



const NavContainer = styled.nav`
    background: var(--lightBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 15px !important;
    }
`;