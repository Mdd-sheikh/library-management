import './Login.css'
import login_logo from '../../assets/nav_logo.png'
import { useContext, useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { context } from '../../context/Context'
import { Link } from 'react-router-dom'




const Login = ({ setLogin }) => {

    const [loading, setLoading] = useState(false)
    const [getsignup, setGetsignup] = useState([])
    const [form, setform] = useState({ name: "", password: "" })
    console.log(getsignup);

    const { profile, setProfile } = useContext(context)


    const formdata = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })


    }



    const getdata = () => {

        const allsignupdata = axios.get(`http://localhost:4000/signup-data`).then((res) => {
            console.log("get successfull", res.data);
            setGetsignup(res.data)

        }).catch((error) => {
            console.error("error idi not get ")
        })


    }

    useEffect(() => {
        getdata()
        console.log(form);

    }, [])


    const postdata = (e) => {
        e.preventDefault()

        const logintest = getsignup.some((users) => users.name === form.name && users.password === form.password)

        if (logintest) {
            setProfile("false")
            setLoading(true)
            setTimeout(() => {
                toast.success("login successfully")
            }, 3000);
            return setTimeout(() => {
                setProfile(true)

                toast.success("login succesfull")
                window.location.reload()
            }, 4000);

        }
        else {
            setform({ name: "", password: "" })
            return toast.error("please check username and password")
        }


    }





    return (
        <div className='login'>

            <form action="" onSubmit={postdata}>

                <div className="login-items">

                    <div className="left-item">
                        <img src={login_logo} alt="" />
                    </div>
                    <hr />
                    <div className="bottom-item">
                        <div className="upper-bottom-item">

                            <h2>User Login</h2>

                            <p onClick={() => setLogin(false)}>X</p>
                        </div>
                        <div className="middle-bottom-item">
                            <div className="username">
                                <p>Username</p>
                                <input type="text" required
                                    name='name'
                                    onChange={formdata}
                                    value={form.name} />
                            </div>
                            <div className="password">
                                <p>Password</p>
                                <input type="password" required
                                    name='password'
                                    onChange={formdata}
                                    value={form.password} />
                            </div>

                        </div>
                        <div className="last-bottom-item">
                            <div className="submit-bottn-last">
                                <button type='submit'>{!loading ? "Submit" : <div className='loading'><i class="fa-solid fa-spinner"></i></div>}</button>
                            </div>

                            <div className="forget-password">
                                <Link to="/Forgetpassword"><button onClick={() => setLogin(false)}>Forget Password</button></Link>
                            </div>
                        </div>



                    </div>
                </div>
            </form>

        </div>
    )
}

export default Login