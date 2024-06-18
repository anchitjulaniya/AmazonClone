
import Footer from './Footer';
import Header from './components/Header'
import { MantineProvider } from '@mantine/core';
import { Outlet } from "react-router-dom"
import { myContext } from './components/Context';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import {store} from './redux/store'
import {Provider} from "react-redux"
import axios from 'axios';


function App() {
  const [userEmail, setUseremail] = useState(null);
  const [name, setName ] = useState(null);
  const [query, setQuery] = useState("");
  const [searchresult, setSearchresult] = useState([]);
  
  const call = async () => {
    console.log("Call function invoked with query:", query); // Log when call is invoked
    const options = {
      method: 'GET',
      url: 'https://real-time-amazon-data.p.rapidapi.com/search',
      params: {
        query: query,
        page: '1',
        country: 'IN',
        sort_by: 'RELEVANCE',
        product_condition: 'ALL'
      },
      headers: {
        'x-rapidapi-key': 'b8bb314eb8msh5bcb832919161fdp12af72jsn4c6c655daa90',
        'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);
      console.log("API response data:", response.data.data.products); // Log the API data

      setSearchresult(response.data.data.products); //updating the search result state
      setQuery("");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
  <myContext.Provider value={[userEmail, setUseremail]}>
    <Provider store={store}>
    <>
    <MantineProvider>
    <ToastContainer />
      <Header name={name} setName={setName} query={query} setQuery={setQuery} searchresult={searchresult} setSearchresult={setSearchresult} setUseremail={setUseremail} call = {call} />
      <Outlet context = {[name, setName, query, setQuery, searchresult, setSearchresult ]} />
    </MantineProvider>  
    <Footer />
    </>
   </Provider>
   </myContext.Provider>
  )
}

export default App
