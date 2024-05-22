import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import './dist/app.css';

import Header from './jsx/Page_Components/Header';
import Navbar from './jsx/Page_Components/Navbar';
import Footer from './jsx/Page_Components/Footer';
// import DataOverlay from './jsx/Page_Components/DataOverlay';

import Landing from './jsx/Pages/Landing';
import Wood from './jsx/Pages/Art/Wood';

// import Stone from './jsx/Pages/Art/Stone';
import Limestone from './jsx/Pages/Art/Stone/Limestone';
import Marble from './jsx/Pages/Art/Stone/Marble';
import Sandstone from './jsx/Pages/Art/Stone/Sandstone';
import Alabaster from './jsx/Pages/Art/Stone/Alabaster';
import Soapstone from './jsx/Pages/Art/Stone/Soapstone';

import Clay from './jsx/Pages/Art/Clay';
import Caststone from './jsx/Pages/Art/Caststone';
import Painting from './jsx/Pages/Art/Painting';
import Exhibition from './jsx/Pages/Exhibition';
import About from './jsx/Pages/About';
import Contact from './jsx/Pages/Contact';
import Imprint from './jsx/Pages/Imprint';
import Data from './jsx/Pages/Data';

function App() {
  // const [cookieExists, setCookieExists] = useState(false);

  // function setCookie(name, value, daysToExpire) {
  //   const date = new Date();
  //   date.setTime(date.getTime() + (daysToExpire * 24 * 60 * 60 * 1000));
  //   const expires = "expires=" + date.toUTCString();
  //   document.cookie = name + "=" + value + ";" + expires + ";path=/";
  // }

  // function checkCookie(cookieName) {
  //   // Split the cookie string into individual cookies
  //   const cookies = document.cookie.split(';');

  //   // Loop through the cookies to find the one with the specified name
  //   for (let i = 0; i < cookies.length; i++) {
  //     const cookie = cookies[i].trim(); // Remove any leading or trailing spaces
  //     // Check if this cookie has the name we're looking for
  //     if (cookie.startsWith(cookieName + '=')) {
  //       // Cookie found
  //       return true;
  //     }
  //   }
  //   // Cookie not found
  //   return false;
  // }

  // useEffect(() => {
  //   const exists = checkCookie('agree_data');
  //   setCookieExists(exists);
  // }, []);

  return (
    <Router>
      <div className="App">
        <div className="content--wrapper">
          <Header />
          <Navbar />
          <Routes>
            <Route path="/" element={<Landing />} ></Route>
            <Route path="/wood" element={<Wood />} ></Route>

            <Route path="/limestone" element={<Limestone />} ></Route>
            <Route path="/marble" element={<Marble />} ></Route>
            <Route path="/sandstone" element={<Sandstone />} ></Route>
            <Route path="/alabaster" element={<Alabaster />} ></Route>
            <Route path="/soapstone" element={<Soapstone />} ></Route>

            {/* <Route path="/stone" element={<Stone />} ></Route> */}
            <Route path="/clay" element={<Clay />} ></Route>
            <Route path="/caststone" element={<Caststone />} ></Route>
            <Route path="/painting" element={<Painting />} ></Route>
            <Route path="/exhibition" element={<Exhibition />} ></Route>
            <Route path="/about" element={<About />} ></Route>
            <Route path="/contact" element={<Contact />} ></Route>
            <Route path="/imprint" element={<Imprint />} ></Route>
            <Route path="/data" element={<Data />} ></Route>
          </Routes>
        </div>
        {/* {cookieExists ? null : <DataOverlay></DataOverlay>} */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
