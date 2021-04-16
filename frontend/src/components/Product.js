import React from 'react'
import { Card, CardImg } from 'react-bootstrap'
import Rating from './Rating'

const Product = ({ product }) => {
    return (
        <>
            <Card className='my-3 p-3 rounded'>
                <a href={`/products/${product._id}`}>
                    <CardImg src={product.image} variant='top'></CardImg>
                </a>

                <Card.Body>
                    <a href={`/products/${product._id}`}>
                        <Card.Title as='div'>
                            <strong>
                                {product.name}
                            </strong>
                        </Card.Title>
                    </a>

                    <Card.Text as='div'>
                        <Rating value={product.rating} text={`${product.numReviews} reviews`}>
                            
                        </Rating>
                    </Card.Text>

                    <Card.Text as='h3'>
                        ${product.price}
                    </Card.Text>
                </Card.Body>
            </Card>  
        </>
    )
}
export default Product
