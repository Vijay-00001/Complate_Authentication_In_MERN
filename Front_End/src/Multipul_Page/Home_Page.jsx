import React from 'react'
import styled from 'styled-components'

const Home_Page = () => {

  const Home = styled.div`
  .home{
    display:flex;
    min-height:100vh;
    padding:10rem 9% 2rem;
    align-items:center;
    }
    
    .home-content h3{
    font-size:3.2rem;
    font-weight:700;
    }
    
    .home-content h3:nth-of-child(2){
    margin-bottom:2rem;
    }
    
    .home-content h1{
    font-size:3.2rem;
    font-weight:700;
    line-height:1.3;
    }
    
    .home-img img{
    width:35vw;
    aspect-ratio: 1/1;
    }
    
    .home-content p{
    font-size:1.6rem;
    }
    
    .social-media a{
    display:inline-flex;
    justify-content:center;
    align-items:center;
    width:4rem;
    height:4rem;
    border-radius:50%;
    background:transparante;
    border:0.2rem solid var(--main-color);
    font-size:2rem;
    color:var(--main-color);
    margin:3rem 1.5rem 3rem 0;
    transition:all 0.5s ease;
    }
    
    .social-media a:hover{
    background:vwr(--main-color);
    color:var(--secound-bg-color);
    box-shadow:0 0 1rem var(--main-color);
    }
    
    span{
    color:var(--main-color);
    }
    
    .btn{
    display:inline-block;
    padding:1rem 2.8rem;
    background:var(--main-color);
    border-radius:4rem;
    font-size:1.6rem;
    box-shadow:0 0 1rem var(--main-color);
    color:var(--secound-bg-color);
    letter-spacing:0.1rem;
    font-weight:600;
    transition:all 0.5s ease;
    }
    
    .btn:hover{
    box-shadow:none;
    }

    @media(max-width:991px){
      section{
          padding:10rem 3% 2rem;
      }
  }
  `

  return (
    <Home>
    <section className="home" id="name">
      <div className="home-content">
        <h3>Hello,It's E-commerce Web</h3>
        <h1>New Desiner</h1>
        <h3>And Welcome to <span>E-commerce web</span></h3>
        <p>lorem,ipsum dolor sit amet consecutetor adipisicieng ,
lorem,ipsum dolor sit amet consecutetor adipisicieng</p>
        <div className="social-media">
          <a href="#"><i className="bx bxl-facebook"></i></a>
          <a href="#"><i className="bx bxl-twitter"></i></a>
          <a href="#"><i className="bx bxl-instagram-alt"></i></a>
          <a href="#"><i className="bx bxl-linkedin"></i></a>
        </div>
        <a href="#" className="btn">Click me</a>
      </div>
      <div className="home-img">
        <img src="../src/images/mobail_pic.jpg" alt="Home_Image"/>
      </div>
  </section>
  </Home>
  )
}

export default Home_Page