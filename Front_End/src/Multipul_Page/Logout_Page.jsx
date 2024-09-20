import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { UserContex } from '../App';

const Logout_Page = () => {

    const {state, dispatch} = useContext(UserContex);

    const history = useNavigate();

useEffect(() => {
    fetch("/Logoutchecking",{
        method:"GET",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json"
        },
        credentials:"include"
    }).then((res) => {
        dispatch({type:"USER",paylode:false});
        history("/Login");
        if(res.status != 200){
            throw new Error('Somthig is wrong');
        }
    }).catch((err) => {
        console.log(err);
    });
})

  return (
    <div>
      
    </div>
  )
}

export default Logout_Page
