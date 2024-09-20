import React, { createContext, useReducer } from 'react'
import Home_Page from './Multipul_Page/Home_Page'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About_Page from './Multipul_Page/About_Page/About_Page'
import Servise from './Multipul_Page/Servise'
import Contect from './Multipul_Page/ContectPage/Contect_page'
import Login_Page from './Multipul_Page/Login_Page'
import Ragistretion_Page from './Multipul_Page/Ragistretion_Page'
import Header from './All_Same/Header'
import Footer from './All_Same/Footer'
import Logout_Page from './Multipul_Page/Logout_Page'
import { Global } from './Global'

import { initialState, reduser } from './Reduser/reduser'
import Erroe_Page from './Multipul_Page/Erroe_Page'
import New_Home_page from './Multipul_Page/New_Home_page/New_Home_page'
import Product from './Multipul_Page/AddProduct/Product'

export const UserContex = createContext();

const App = () => {
  
  const [state, dispatch] = useReducer(reduser,initialState);

  return<>
  <Global/>
  <UserContex.Provider value={{state, dispatch}}>
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<New_Home_page/>} />
        <Route path="/About" element={<About_Page/>} />
        <Route path="/Servise" element={<Servise/>} />
        <Route path="/Contect" element={<Contect/>}/>
        <Route path="/Login" element={<Login_Page/>} />
        <Route path="/Logout" element={<Logout_Page/>} />
        <Route path="/Ragistretion" element={<Ragistretion_Page/>} />
        <Route path="/Waiting" element={<Erroe_Page/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  </UserContex.Provider>
  </>
}

export default App
