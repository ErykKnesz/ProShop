import React, { useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap';
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions';

const CartScreen = () => {
    const { search } = useLocation();
    const { productid } = useParams();
    const qty = search ? Number(search.split('=')[1]) : 1;

    const dispatch = useDispatch();
  
    const cart = useSelector((state) => state.cart);
  
    const { cartItems } = cart;
    console.log('cartItems', cartItems)
  
    useEffect(() => {
        if (productid) {
            dispatch(addToCart(productid, qty))
        }
    }, [dispatch, productid, qty]);

}   
export default CartScreen;