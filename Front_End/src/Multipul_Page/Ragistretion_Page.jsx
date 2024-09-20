import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';

const Ragistretion_Page = () => {

  const history = useNavigate();
  const [current, setValue] = useState({
    name: "", mobile: "", enroll: "", email: "", password: ""
  });

  const Hendel = (event) => {
    const { name, value } = event.target;

    setValue((pre) => {
      return { ...pre, [name]: value };
    });
  }

  useFormik({
    initialValues: initialValues,
    onSubmit: (values) => {
      console.log(values);
    }
  });

  const CheckingData = () => {

  }

  const postData = async (e) => {
    e.preventDefault();

    const { name, enroll, email, mobile, password } = current;
    const data = await fetch("/Ragistretion", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, enroll, email, mobile, password
      })
    });

    const responc = await data.json();

    if (responc.status === 422 || !responc) {
      window.alert("Invalid Ragistretion.");
      console.log("Invalid Ragistretion");
    } else {
      window.alert("Ragistretion successfull.");
      console.log("Ragistretion successfull.");

      history("/Login");
    }
  }

  return (
    <>
      <section className='ragisretion-section'>
        <div className='r-out-box'>
          <div className='r-in-box-left'>
            <img src="../src/images/ragister.jpg" alt="login-image" />
          </div>
          <div className='r-in-box-right'>
            <form method="POST" onSubmit={CheckingData} class="form">
              <h2 className='r-h2'>Ragistretion</h2>

              <div class="r-input-group">
                <input type="text" name="name" value={current.name} onChange={Hendel} placeholder="name" />
                <i className="bx bxs-user"></i>
                <label>username</label>
              </div>

              <div class="r-input-group">
                <input type="text" name="enroll" value={current.enroll} onChange={Hendel} placeholder="enrollment no" />
                <i className='bx bxs-id-card'></i>
                <label>Enrollment no</label>
              </div>

              <div class="r-input-group">
                <input type="text" name="email" value={current.email} onChange={Hendel} placeholder="e-mail" />
                <i className='bx bxs-envelope'></i>
                <label>E-mail address</label>
              </div>

              <div class="r-input-group">
                <input type="Number" name="mobile" value={current.mobail} onChange={Hendel} placeholder="mobile" />
                <i className='bx bxs-mobile'></i>
                <label>Mobile no</label>
              </div>

              <div class="r-input-group">
                <input type="password" name="password" value={current.password} onChange={Hendel} placeholder="password" />
                <i className='bx bxs-lock'></i>
                <label>password</label>
              </div>
              <div class="r-remember">
                <label><input type="checkbox" />I fill this form myself.</label>
              </div>
              <button type="submit" name="buton" onClick={postData}>Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default Ragistretion_Page