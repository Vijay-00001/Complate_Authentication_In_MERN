import React, { useEffect, useState } from 'react';
import './Contect_page.css';
import HRContect from '../../All_Arrys/Context';
import { useNavigate } from 'react-router-dom';

const Contect = () => {

  const [predata, setpredata] = useState({ uname: "", uemail: "", mobile: "", message: "" });

  const history = useNavigate();

  const callContectPage = async () => {
    try {
      console.log("come");
      const res = await fetch("/Contectchecking", {
        method: "GET",
        headers: {
          Accept: "appliction/json",
          "content-Type": "application/json"
        },
        credentials: 'include'
      });

      const data = await res.json();
      setpredata({ ...predata, uname: data.name, uemail: data.email, mobile: data.mobile });

      if (!res.status === 200) {
        throw new Error(res.Error);
      }
    } catch (err) {
      history("/Login");
      throw new Error('not find the any token.');
    }
  }

  const featchingdata = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setpredata({ ...predata, [name]: value })
  }

  const Submitdata = async(e) => {
      e.preventDefault();

      const requireds = await fetch("/ContectPaging",{
        method:"POST",
        headers:{
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          uname:name, uemail:email, mobile:mobile, message:message
        })
      });

      const success = await requireds.json();

      if(!success == 200){
        window.alert("Your request is not sending....");
      }else{
        window.alert("Your request is successfully sending....");

      }
  }

  useEffect(() => {
    callContectPage();
  }, []);


  const Showcontect = (curVal) => {
    return <>
      <div className="all-info">
        <div className="hr-image">
          <img src={curVal.src} alt="hr-image" />
        </div>
        <div className="hr-inform">
          <h3>{curVal.name}</h3>
          <h6>Experiance : <small>{curVal.year}</small></h6>
          <h2>contect no : <small>{curVal.mobail}</small></h2>
        </div>
      </div>
    </>
  };


  return (
    <>
      <div className="contect-conteiner">
        <div className="contect-image">
          <img src="../src/images/image7.jpg" onChange={featchingdata} alt="live-location" />
        </div>
        <div className="contect-form">
          <form method="post">
            <div className="each-field">
              <label htmlFor="#">Username</label>
              <input type="text" name="uname" value={predata.uname} onChange={featchingdata} />
            </div>

            <div className="each-field">
              <label htmlFor="#">E-mail</label>
              <input type="text" name="uemail" value={predata.uemail} onChange={featchingdata} />
            </div>
            <div className="each-field">
              <label htmlFor="#">Mobile No</label>
              <input type="number" name="mobile" value={predata.mobile} onChange={featchingdata} />
            </div>
            <div className="each-field">
              <label htmlFor="#">Message</label>
              <textarea type="text" value={predata.message} name="message" onChange={featchingdata} />
            </div>
            <button className='button' onClick={Submitdata}>Submit</button>
          </form>
        </div >
        <div className="Other-contect">
          {HRContect.map(Showcontect)};
        </div>
      </div >
    </>
  )
}

export default Contect;
