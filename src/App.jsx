
import Footer from './Footer';
import Header from './components/Header'
import HomeCarousel from './components/HomeCarousel'
import { MantineProvider } from '@mantine/core';
import { Outlet } from "react-router-dom"
import { myContext } from './components/Context';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import {store} from './redux/store'
import {Provider} from "react-redux"
// import '@mantine/carousel/styles.css';



function App() {
  const [name, setName ] = useState(null);
  return (
  
    <Provider store={store}>
    <>
    <MantineProvider>
    <ToastContainer />
      <Header name={name} setName={setName} />
      <Outlet context = {[name,setName]} />
    </MantineProvider>  
    <Footer />
    </>
   </Provider>
  )
}

export default App
