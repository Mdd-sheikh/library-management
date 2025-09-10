import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Home from './components/pages/home/Home'
import { Routes, Route } from 'react-router-dom'
import Feature from './components/pages/Feauture/Feature'
import Plan from './components/pages/plan/Plan'
import Upgrade from './components/pages/upgrade/Upgrade'
import Article from './components/pages/article/Article'
import Discover from './components/pages/discover/Discover'
import Faqs from './components/pages/faqs/Faqs'
import Signup from './components/pages/signup/Signup'
import Login from './Adminpanel/Loginpage/Login'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Created from './components/pages/created/Created'
import Forgetpassword from './components/pages/forgetpassword/Forgetpassword'
import Love from './bookpage/love/Love'
import Familyman from './bookpage/familyman/Familyman'



function App() {
  const [login, setLogin] = useState(false)



  return (

    <>

      {login ? <Login setLogin={setLogin} /> : <></>}
      <Navbar setLogin={setLogin} />
      <ToastContainer />
      <div className='home'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Feature' element={<Feature />} />
          <Route path='/Plan' element={<Plan />} />
          <Route path='/Upgrade' element={<Upgrade />} />
          <Route path='/Article' element={<Article />} />
          <Route path='/Discover' element={<Discover />} />
          <Route path='/Faqs' element={<Faqs />} />
          <Route path='/Signup' element={<Signup />} />
          <Route path='/Created' element={<Created />} />
          <Route path='/Forgetpassword' element={<Forgetpassword />} />
          <Route path='/Love' element={<Love />} />
          <Route path='/familyman' element={<Familyman />} />
        </Routes>
      </div>
      <Footer />

    </>
  )
}

export default App;
