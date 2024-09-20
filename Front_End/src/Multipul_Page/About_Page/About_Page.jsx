import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const About_Page = () => {

  const history = useNavigate();

  const callAboutPage = async() =>{
    try{
      console.log("come");
      const res = await fetch("/Aboutchecking",{
        method:"GET",
        headers:{
          Accept:"appliction/json",
          "content-Type":"application/json"
        },
        credentials:'include'
      });

      const data = await res.json();
      console.log(data);
      history("/Waiting")
      if(!res.status === 200){
        throw new Error(res.Error);
      }
    }catch(err){
      history("/Login");
      throw new Error ('not find the any token.');
    }
  }

  useEffect(()=>{
    callAboutPage();
  },[]);

  return (
    <div>
      <h1>This is a About page.</h1>
      <form method='GET'>
        <h1>I am live on this website.</h1>
      </form>
    </div>
  )
}

export default About_Page
