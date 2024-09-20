import React from 'react'
import './FeatureProduct.css';
import { NavLink } from 'react-router-dom';

const ProductImage = (currentElement) => {

  const { id, name, image, } = currentElement;

  return (
    <>
      <div className="main-image">
        <a href="#">
          <img src={image} alt="shopping" />
        </a>
        <span>
          <a href="#">
            <i className='bx bx-heart active'></i>
          </a>
          <a href="#">
            <i className='bx bx-share-alt'></i>
          </a>
          <a href="#">
            <i className='bx bx-transfer-alt'></i>
          </a>
        </span>
      </div>
      <div className="image-information">
        <small>
          <i className='bx bxs-star'></i>
          <i className='bx bxs-star'></i>
          <i className='bx bxs-star'></i>
          <i className='bx bxs-star'></i>
          <i className='bx bxs-star-half'></i>
          <p>(2,221)</p>
        </small>
        <h1>{name}</h1>
        <h5><span>Price</span><span>$499.00</span></h5>
        <h6><span>Stock</span><span>Sold</span></h6>
      </div>
    </>
  )
}

export default ProductImage;
