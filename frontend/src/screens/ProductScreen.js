import React, { useEffect, useState } from 'react';
import { Link, useParams} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Image, ListGroup, Button, Card } from 'react-bootstrap';
import Rating from '../components/Rating';
import Loader from "../components/Loader";
import Message from "../components/Message";
import axios from 'axios';
import { listProductDetails } from '../actions/productActions';

function ProductScreen() {
  const { id } = useParams();
  const dispatch = useDispatch()
  const productDetails = useSelector(state => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(id))
}, [id, dispatch])

  return (
    <div>
      <Link to='/' className='btn btn-light my-3'>Go Back</Link>
      {loading ?
      <Loader />
      : error
      ? <Message variant='danger'>{error}</Message>
      : (
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={product.rating} text={`${product.num_reviews} reviews`} />
            </ListGroup.Item>
            <ListGroup.Item>
              Price: ${product.price}
            </ListGroup.Item>
            <ListGroup.Item>
              Description: {product.description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
        <Card>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <Row>
                <Col>
                  Price:
                </Col>
                <Col>
                <strong>${product.price}</strong>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <Row>
                  <Col>
                    Status:
                  </Col>
                  <Col>
                  {product.count_in_stock > 0 ? 'In Stock' : 'Out of Stock'}
                  </Col>
                </Row>
            </ListGroup.Item>
            <ListGroup.Item>
              <div class="d-grid gap-2 col-12 mx-auto">
                <Button type='button' disabled={product.count_in_stock === 0}>Add to Cart</Button>
              </div>
            </ListGroup.Item>
          </ListGroup>
        </Card>
        </Col>
      </Row>)
      }

    </div>
  )
}

export default ProductScreen;