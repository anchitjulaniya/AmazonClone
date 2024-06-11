
import Footer from './Footer';
import Header from './components/Header'
import HomeCarousel from './components/HomeCarousel'
import { MantineProvider } from '@mantine/core';
import { Outlet } from "react-router-dom"
import { myContext } from './components/Context';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import '@mantine/carousel/styles.css';



function App() {

  return (
  
    // <myContext.Provider >
    <>
    <MantineProvider>
    <ToastContainer />
      <Header />
      <Outlet />
    </MantineProvider>  
    <Footer />
    </>
  //  </myContext.Provider>
  )
}

export default App
