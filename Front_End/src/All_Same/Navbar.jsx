import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { UserContex } from '../App'

const Navbar = () => {

    const Links = styled.div`
    .navbar .links{
        font-size:1.7rem;
        color:var(--text-color);
        margin-left:4rem;
        transition:all 0.3s ;
    }
        
    .navbar .links:hover,
    .navbar .links.active{
        color:var(--main-color);
    }

    @media(max-width:575px){
        
    }
    `
    const {state, dispatch} = useContext(UserContex);
    console.log(state);
    const RenderManus = () => {
      if(state){
        return (
          <>
            <NavLink className="links" to="/Logout">Logout</NavLink>
          </>
        )
      }else{
        return (
          <>
            <NavLink className="links" to="/Login">Login</NavLink>
            <NavLink to="/Ragistretion"></NavLink>
          </>
        )
      }
    }

  return (
    <Links>
    <nav className="navbar">
        <NavLink className="links" to="/">Home</NavLink>
        <NavLink className="links" to="/About">About</NavLink>
        <NavLink className="links" to="/Servise">Servises</NavLink>
        <NavLink className="links" to="/Contect">Contect</NavLink>
        <RenderManus/>
    </nav>
    </Links>
  )
}

export default Navbar
