import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContex } from '../App';

const Login_Page = () => {

  const {state,dispatch} = useContext(UserContex);

const history = useNavigate();

const [current,setValue] = useState({
  email:"",password:""
});

const update = (e) =>{

  const {name,value} = e.target;

  setValue((pre)=>{
    return{...pre,[name]:value}
  });
}

const checking = async (e) =>{
  e.preventDefault();

  const {email, password} = current;
  const data = await fetch("/Loginchecking", {
      method:"POST",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
          email, password
      })
  });

  const responce = await data.json();

  if(data.status === 204 || data.status === 422 || data.status === 401){
    window.alert("Some thing goes to wrong.....");
  }else if(data.status === 200){
    dispatch({type:"USER",paylode:true});
    window.alert("You are Login successfully.");
    console.log("You are Login successfully.");
    history("/");
  }
  }


  return (
    <>
    <section className='login-section'>
      <div className='out-box'>
        <div className='in-box-left'>
          <img src="../src/images/login.jpg" alt="login-image"/>
        </div>
        <div className='in-box-right'>
          <form method="POST" class="form">
            <h2>Login</h2>
              <div class="input-group">
                <input type="text" name="email" value={current.email} onChange={update} autoComplete="off"/>
                <label>username</label>
              </div>
              <div class="input-group">
                <input type="password" name="password" value={current.password} onChange={update} autoComplete="off"/>
                <label>password</label>
              </div>
              <div class="remember">
                <label><input type="checkbox"/>Remember me</label>
              </div>
              <button type="submit" onClick={checking}>Login</button>
              <div class="ragister">
                  <p>Don't have an account ?<NavLink to="/Ragistretion" >signup</NavLink></p>
              </div>
          </form>
        </div>
      </div>
    </section>
    </>
  )
};

export default Login_Page
