import React from 'react'
import Navbar from './Navbar'

const Header = () => {

    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon = () =>{
        console.log("click me");
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }

  return (
    <>
        <header className="header">
            <a href="#" className="logo">Main Header</a>
            <i class="bx bx-menu" onClick={menuIcon} id="menu-icon"></i>
            <Navbar/>  
        </header>
    </>
  )
}

export default Header
