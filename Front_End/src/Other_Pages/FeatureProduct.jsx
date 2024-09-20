import React from 'react'
import { useGlobleProducts } from '../Context_Data/Product'
import ProductImage from './ProductImage';
import ShowProduct from '../All_Arrys/Most_Wonted'
import './FeatureProduct.css';

const FeatureProduct = () => {

    const ShowProducts = (curVal,idx) => {
        if(idx < 6)
        {return <>
            <div className="single-item">
                <div className="main-image">
                    <a href="#">
                        <img src={curVal.src} alt="shopping" />
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
                    <small>31%</small>
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
                    <h1>{curVal.company}</h1>
                    <h5><span>Rs.{curVal.price}</span><span>Rs.{curVal.price + 500}</span></h5>
                    <h6><span>stock: {curVal.stock}</span><span>Sold:{curVal.sold}</span></h6>
                </div>
            </div>
        </>}
    }




    // const { isLoading, featureProduct } = useGlobleProducts();

    // if (isLoading) {
    //     return <div>...Loading...</div>;
    // }

    return (
        <div className="product-container">
            <div className="most-wanted">
                <h3>Popular</h3>
                <div className="main-image">
                    <a href="#">
                        <img src="../src/images/image23.jpg" alt="shopping" />
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
                    <small>31%</small>
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
                    <h1>Shopping products For Spcial Offer</h1>
                    <h5><span>$129.00</span><span>$499.00</span></h5>
                    <h6><span>stock: 111</span><span>Sold:3,999</span></h6>
                </div>
            </div>

            <div className="other-products most-wanted">
                {ShowProduct.map(ShowProducts)};
            </div>

            {/* <div className="single-item">
                {
                    featureProduct.map((currentElement) => {
                        return <ProductImage key={currentElement.id}{...currentElement} />
                    })
                }
            </div> */}
        </div>
    )
}

export default FeatureProduct
