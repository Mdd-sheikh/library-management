import React, { useEffect, useState } from 'react'
import './Signup.css'
import { Link, NavLink } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

const Signup = () => {
  const [created, setCreated] = useState(false)
  const [get, setGet] = useState([])
  console.log(get);


  const [signup, setSignUp] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: ""

  })

  const getuserdata = () => {

    const allsignupdata = axios.get(`http://localhost:4000/signup-data`).then((res) => {
      console.log("get successfull", res.data);
      setGet(res.data)

    }).catch((error) => {
      console.error("error idi not get ")
    })


  }

  useEffect(() => {
    getuserdata()
  }, [])

  // to hamdle sign up data 

  const handlesign = (e) => {
    setSignUp({ ...signup, [e.target.name]: e.target.value })

  }



  const postsignup = (e) => {
    setSignUp({
      name: "",
      email: "",
      password: "",
      confirm_password: ""

    })
    e.preventDefault()

    const dublicate = (get.some((item) => item.email === signup.email))
    if (dublicate) {
      return toast.error("this email is registered already please give me other email")
    }

    if (signup.name.length < 3 && signup.password.length < 8 && signup.password.length !== signup.confirm_password.length) {
      return toast.success("atleast 3 length")
    }
    if (signup.password.length !== signup.confirm_password.length) {
      return toast.error("password not match plase check password")
    }
    else {
      axios.post(`http://localhost:4000/signup-data`, signup).then((res) => {
        console.log("send successfully", res.data);
        toast.success("your account created successfully")

      }).catch((error) => {
        console.error("not send", error)
        toast.error("not sent check server or internet connection")
      })
    }
  }


  return (
    <div className='create_library'>
      <form onSubmit={postsignup}>
        <div className="left-create-library">
          <div className="library-items">


            <div className="left-libray-headline">
              <h2>Register Account</h2>
            </div>
            <hr className='headline-hr' />
            <div className="left-library-heading">
              <p>Creating your account at Librarika is completely FREE. You can join as many libraries as you want using one single Librarika account.
                Creating multiple accounts to access librarika platform is strongly discouraged</p>
            </div>
            <hr className='headline-hr' />
            <div className="inputs-fields">
              <div className="name">
                <label htmlFor="Name">Name</label>
                <input type="text"
                  placeholder='Your name'
                  name='name'
                  value={signup.name}
                  onChange={handlesign}
                  required />
                <p>Please enter your full name, e.g. John Doe</p>
              </div>
              <div className="email">
                <label htmlFor="">Email</label>
                <input type="email"
                  name="email"
                  placeholder='Email Address'
                  value={signup.email}
                  onChange={handlesign}
                  required />
                <p>Please provide your email address, e.g. john@example.com</p>
              </div>
              <div className="password">
                <label htmlFor="">Password</label>
                <input type="password"
                  placeholder='password'
                  name='password'
                  value={signup.password}
                  onChange={handlesign}
                  required />
                <p>Please enter your password, e.g. ********</p>
              </div>
              <div className="confirm-password">
                <label htmlFor="">Confirm Password</label>
                <input type="password"
                  name="confirm_password"
                  placeholder='confirm Password'
                  value={signup.confirm_password}
                  onChange={handlesign}
                  required />
                <p>Please enter the password again.</p>
              </div>
              <div className="submit-btn">
                
                <button> i agree ,Please create my Account</button>
              </div>
            </div>
          </div>
          <div className="right-create-library">
            <div className="upper-right">
              <h1>Why LibraryIn ?</h1>
              <div className="lists">
                <ul className='marker'>
                  <li>Instantly create your online library</li>
                  <li>Unlimited Library members</li>
                  <li>No hardware, infrastructure and software cost.</li>
                  <li>No installation and maintenance cost</li>
                  <li>Easy, no technical skill required</li>
                  <li>Access from anywhere using any Internet enabled device</li>
                  <li>Support multiple library branches</li>
                  <li>Secure and safe</li>
                  <li>100% free for upto 2000 books or records</li>
                </ul>
                <div className="bottom-buttons">
                  <div className="one-bottom-btn">

                    <NavLink to="/Feature"><button>View All Feauture</button></NavLink>
                  </div>
                  <div className="two-bottom-btn">
                    <button>See Available Plans</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Signup