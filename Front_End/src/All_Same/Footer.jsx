import React from 'react'
import styled from 'styled-components'

const Footer = () => {

  const Footers = styled.footer`
    .links-column{
      display: block;
      position: relative;
      width: 99%;
      max-height: 100%;
      margin: 1rem auto;
      padding: 1rem;
      align-item: center;
      justify-content: center;
      background-color: black;
      border-radius: 13px;
    }

    .links-column .grid-column{
      display: flex;
      padding: 0 3rem;
      gap: 7rem;
      align-item: center;
      justify-content: space-around;
      background-color: var(--main-color);
    }

    .links-column h3 {
      font-size: 1.9rem;
      font-weight: 579;
      color: var(--bg-color);
      padding: 1rem 0;
    }

    .links-column ul>li {
      list-style: none;
      margin: 1rem 0 0 1rem;
      font-size: 1.3rem;
      color: var(--secound-bg-color);
      text-transform: capitalize;
    }

    .links-column ul>li>a {
      letter-spacing: 1px;
      color: var(--secound-bg-color);
      text-transform: capitalize;
    }

    .links-column ul>li>a:hover {
      color: var(--bg-color);
      border-bottom: 1px solid var(--bg-color);
    }

    .links-column .icons-social{
      width: 20%;
      margin: auto;
      display: block;
      text-align: center;
    }

    .links-column .social-media a{
      display:inline-flex;
      justify-content:center;
      align-items:center;
      width:4rem;
      height:4rem;
      border-radius:50%;
      background:transparante;
      border:0.2rem solid var(--secound-bg-color);
      font-size:2rem;
      color:var(--secound-bg-color);
      margin:1rem;
      transition:all 0.5s ease;
      }
      
      .links-column .social-media a:hover{
      background:ver(--secound-bg-color);
      color:var(--bg-color);
      border:0.2rem solid var(--bg-color);
      box-shadow:0 0 1rem var(--bg-color);
      }


      @media(max-width:551px) {

        .links-column{
          overflow: hidden;
        }

        .links-column ul>li>a {
          display: none;
        }
      }
  `

  return (
    <Footers>
      <div className="links-column">
        <div className="grid-column">
          <div className="blocks">
            <h3>Help & Contect</h3>
            <ul>
              <li><a href="#">Your Account</a></li>
              <li><a href="#">Your Orders</a></li>
              <li><a href="#">Shipping Rates</a></li>
              <li><a href="#">Return</a></li>
              <li><a href="#">Assistant</a></li>
              <li><a href="#">Help</a></li>
              <li><a href="#">Contect us</a></li>
            </ul>
          </div>
          <div className="blocks">
            <h3>Product Categories</h3>
            <ul>
              <li><a href="#">Beauty</a></li>
              <li><a href="#">Electronic</a></li>
              <li><a href="#">Women's Fashion</a></li>
              <li><a href="#">Men's Fashion</a></li>
              <li><a href="#">Girl's Fashion</a></li>
              <li><a href="#">Boy's Fashion</a></li>
              <li><a href="#">Health & Household</a></li>
              <li><a href="#">Home & Kitchen</a></li>
              <li><a href="#">Pet Suppli</a></li>
              <li><a href="#">Sports</a></li>
            </ul>
          </div>
          <div className="blocks">
            <h3>Payment Into</h3>
            <ul>
              <li><a href="#">Bussiness Card</a></li>
              <li><a href="#">Shop with Points</a></li>
              <li><a href="#">Reload Your Balance</a></li>
              <li><a href="#">Paypal</a></li>
              <li><a href="#">Total Balance</a></li>
            </ul>
          </div>
          <div className="blocks">
            <h3>About Us</h3>
            <ul>
              <li><a href="#">Company info</a></li>
              <li><a href="#">News</a></li>
              <li><a href="#">Investors</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Policies</a></li>
              <li><a href="#">Customer review</a></li>
            </ul>
          </div>
          <div className="blocks">
            <h3>Other</h3>
            <ul>
              <li><a href="#">Languages</a></li>
              <li><a href="#">Contry</a></li>
              <li><a href="#">Up Comming Event</a></li>
              <li><a href="#">All High light</a></li>
              <li><a href="#">Contect</a></li>
            </ul>
          </div>
        </div>
        <div className="icons-social">
          <h3>Follow us</h3>
          <div className="social-media">
            <a href="#"><i className="bx bxl-facebook"></i></a>
            <a href="#"><i className="bx bxl-twitter"></i></a>
            <a href="#"><i className="bx bxl-instagram-alt"></i></a>
            <a href="#"><i className="bx bxl-linkedin"></i></a>
          </div>
        </div>
      </div>

    </Footers>
  )
}

export default Footer
