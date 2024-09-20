import styled from 'styled-components'
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import '../New_Home_page/slide_image.css';

import Swiper_Slide from './slide_image';
import FeatureProduct from '../../Other_Pages/FeatureProduct';
import Multi_links from './Multi-links';


const New_Home_page = () => {

  const Main = styled.section`
    
        .Main-containt{
            display: block;
            width: 100%;
            max-height:100%;
            padding:7rem 1% 2rem;
            justify-content: center;
            background-color: var(--bg-color);
        }

        .Main-containt .second-menu{
          width: 100%;
          max-height: 100%;
          background-color: var(--main-color);
        }

        .Main-containt .image-swapping{
          margin: 1.9rem 0 0;
          left: 23%;
          width: 69%;
          height: 100%;
          position: relative;
        }

        .Main-containt .products{
          top: 3rem;
          position: relative;
          width: 100%;
          max-height: 100%;
          overflow-x: hidden;
        }

        .Main-containt .other {
          top: 5rem;
          position: relative;
          background-color: black;
        }

        @media(max-width: 551px){

          .Main-containt{
            padding: 0;
          }

          .Main-containt .image-swapping{
            top: 1rem;
            left: 0;
            margin: auto;
            height: 100%;
            position: relative;
          }

        }
    `

  return (
    <Main>
      <div className='Main-containt'>
        <div className="second-menu">
          <Multi_links/>
        </div>
        <div className="image-swapping">
          <Swiper_Slide />
        </div>
        <div className="products">
          <FeatureProduct />
        </div>
        <div className="other">
          <h1>This is new wrigting here some thing.</h1>
        </div>
      </div>
    </Main>
  )
}

export default New_Home_page
