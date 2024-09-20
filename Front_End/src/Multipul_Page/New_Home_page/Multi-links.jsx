import React from 'react'
import styled from 'styled-components'

const Multi_links = () => {

  const Search = styled.div`
    .search {
      display: flex;
      width: 100%;
      max-height: 100%;
      color: white;
      align-items: center;

      .Products{
        width: 22%;
        min-height: 100%;
        margin: 1.5rem 3.5rem 0;
        position: relative;
        background-color: var(--secound-bg-color);
        border-radius: 13px 13px 0 0;

        h1 {
          width: 100%;
          text-align: center;
          padding: 1.5rem;
          color: var(--main-color);
          background-color: white;
          border-radius: 13px 13px 0 0;
          font-size: 2.3rem;
        }

        .main-link {
          position: absolute;
          width: 100%;
          left: 0;
          font-size: 1.5rem;
          list-style: none;
          border: 1px solid black;
          background-color: var(--main-color);

          .main-link-name {
            width: 100%;
            display: block;
            color: var(--secound-bg-color);
            padding: 1.19rem 0;
            padding-left: 3.1rem;
            font-size: 1.5rem;
            border-bottom: 1px solid gray;
            :hover,
            :active{
              color: var(--main-color);
              background: white;
            }

            >i:first-child {
              position: absolute;
              left: 5%;
            }
            >i:last-child {
              position: absolute;
              left: 87%;
            }
          }
        }
      }
    }

    .main-link .full-link {
      position: relative;
      list-style: none;
      transition: all 0.1s linear;
      :hover .sub-link {
        display: block;
      }
    }

    .main-link .sub-link {
      top: 0;
      display: none;
      width: 100%;
      z-index: 3;
      padding: 1.5rem 3rem;
      position: absolute;
      background: url("../src/images/image5.jpg");
      bbackground-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      left: 101%;
      ::before{
        content: '';
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: -1;
        position: absolute;
        background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%);
      }
    }

    .main-link .sub-link > ul {
      position: relative;
      list-style: none;

      >li >a {
        display: block;
        color: black;
        padding: 0.7rem 0;
      }
      li >a:hover{
        text-decoration: underline;
      }
    }

    .search .right-search{
      width: 100%;
      display: flex;
      position: relative;
      align-items: center;
      justify-content: left;
    }

    .right-search .input-search {
      width: 80%;
      display: flex;
      position: relative;
      align-items: center;
      font-size: 1.7rem;
    }

    .input-search i {
      left: 1%;
      position: absolute;
      font-size: 2.3rem;
      color: black;
      z-index: 1;
    }

    .input-search input {
      width: 100%;
      border-radius: 11px;
      padding: 0.7rem 7rem 0.7rem 3.7rem;
      font-size: 1.7rem;
      text-transform: capitalize;
      border: 3px solid white;
    }

    .input-search input::placeholder {
      align-items: center;
      color: gray;
      text-transform: capitalize;
    }

    .input-search a {
      position: absolute;
      right: 0%;
      padding:1rem 2.8rem;
      background:white;
      border-radius:0 11px 11px 0;
      font-size:1.6rem;
      color:var(--secound-bg-color);
      letter-spacing:-0.1rem;
      font-weight:600;
      transition:all 0.5s ease;
    }

    .right-search .shop{
      position: absolute;
      right: 3%;
      margin-top: 1rem;
      text-align: center;
      align-items: center;
      color: white;
      font-size: 3rem;
    }

    .right-search .shop span{
      top: -7%;
      right: -3%;
      display: block;
      position: absolute;
      background: red;
      width: 15px;
      color: white;
      font-size: 1.3rem;
      border-radius: 50%;
      aspect-ratio: 1/1;
    }

    @media(max-width:551px) {
      .Products{
        display: block;
        visibility: hidden;

      }
    }
`

  return (
    <Search>
      <div className="search">
        <div className="Products">
          <h1>All Products</h1>
          <div className="main-link">
            <ul>
              <li className='full-link'>
                <a href="#" className='main-link-name'>
                  <i className='bx bx-wink-smile'></i>
                  Beauty
                  <i className='bx bx-chevron-right'></i>
                </a>
                <div className="sub-link">
                  <ul>
                    <li><a href="#">Mackup</a></li>
                    <li><a href="#">Skin Care</a></li>
                    <li><a href="#">Hair Care</a></li>
                    <li><a href="#">Fragrances</a></li>
                    <li><a href="#">Foot & Hand Care</a></li>
                    <li><a href="#">Tool & Accessories</a></li>
                    <li><a href="#">Shave & Hair removel</a></li>
                    <li><a href="#">Personal Care</a></li>
                  </ul>
                </div>
              </li>

              <li className='full-link'>
                <a href="#" className='main-link-name'>
                  <i className='bx bx-wink-smile'></i>
                  Electrionic
                  <i className='bx bx-chevron-right'></i>
                </a>
                <div className="sub-link">
                  <ul>
                    <li><a href="#">Camara</a></li>
                    <li><a href="#">Shell Phone</a></li>
                    <li><a href="#">Computer</a></li>
                    <li><a href="#">GPS & Navigation</a></li>
                    <li><a href="#">Headphones</a></li>
                    <li><a href="#">Home Audios</a></li>
                    <li><a href="#">Televisions</a></li>
                    <li><a href="#">Video Projectors</a></li>
                    <li><a href="#">Wearable Technology</a></li>
                  </ul>
                </div>
              </li>

              <li className='full-link'>
                <a href="#" className='main-link-name'>
                  <i className='bx bx-wink-smile'></i>
                  Women's Fashion
                  <i className='bx bx-chevron-right'></i>
                </a>
                <div className="sub-link">
                  <ul>
                    <li><a href="#">Clothing</a></li>
                    <li><a href="#">Shoes</a></li>
                    <li><a href="#">Jewelry</a></li>
                    <li><a href="#">Watches</a></li>
                    <li><a href="#">Handbages</a></li>
                    <li><a href="#">Accessories</a></li>
                  </ul>
                </div>
              </li>

              <li className='full-link'>
                <a href="#" className='main-link-name'>
                  <i className='bx bx-wink-smile'></i>
                  Man's Fashion
                  <i className='bx bx-chevron-right'></i>
                </a>
              </li>

              <li className='full-link'>
                <a href="#" className='main-link-name'>
                  <i className='bx bx-wink-smile'></i>
                  Girl's Fashion
                  <i className='bx bx-chevron-right'></i>
                </a>
              </li>

              <li className='full-link'>
                <a href="#" className='main-link-name'>
                  <i className='bx bx-wink-smile'></i>
                  Boy's Fashion
                  <i className='bx bx-chevron-right'></i>
                </a>
              </li>

              <li className='full-link'>
                <a href="#" className='main-link-name'>
                  <i className='bx bx-wink-smile'></i>
                  Health & Household
                  <i className='bx bx-chevron-right'></i>
                </a>
              </li>

              <li className='full-link'>
                <a href="#" className='main-link-name'>
                  <i className='bx bx-wink-smile'></i>
                  Home & Kitchen
                  <i className='bx bx-chevron-right'></i>
                </a>
              </li>

              <li className='full-link'>
                <a href="#" className='main-link-name'>
                  <i className='bx bx-wink-smile'></i>
                  Pet Suplier
                  <i className='bx bx-chevron-right'></i>
                </a>
              </li>

              <li className='full-link'>
                <a href="#" className='main-link-name'>
                  <i className='bx bx-wink-smile'></i>
                  Sport's
                  <i className='bx bx-chevron-right'></i>
                </a>
              </li>

              <li className='full-link'>
                <a href="#" className='main-link-name'>
                  <i className='bx bx-wink-smile'></i>
                  Batter Shaller
                  <i className='bx bx-chevron-right'></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="right-search">
          <div className="input-search">
            <i className='bx bx-search'></i>
            <input type="search" placeholder='Search for product' />
            <a href="#">Search</a>
          </div>
          <a href="#" className='shop'><span className='cricle'>5</span><i className="bx bx-cart-alt"></i></a>
        </div>
      </div>
    </Search>

  )
}

export default Multi_links
