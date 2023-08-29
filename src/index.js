import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {Routes,Route,BrowserRouter} from 'react-router-dom'
import Home from './Pages/home'
import ContactUs from './Pages/ContactUs'
import 'bootstrap/dist/css/bootstrap.min.css';
import FooterHeader from './Pages/FooterHeader'
import Footer from './Pages/Footer'
import Services from './Pages/Services'
import JustHeader from './Pages/JustHeader'
import About from './Pages/About'
import Courses from './Pages/Courses'
import Team from './Pages/Team'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Home navbar={<FooterHeader/>} footer={<Footer/>}/>}/>
        <Route exact path='/contact-us' element={<ContactUs header={<JustHeader/>} footer={<Footer/>}/>}/>}/>
        <Route exact path='/services' element={<Services header={<JustHeader/>} footer={<Footer/>}/>}/>}/>
        <Route exact path='/about' element={<About header={<JustHeader/>} footer={<Footer/>}/>}/>}/>
        <Route exact path='/courses' element={<Courses header={<JustHeader/>} footer={<Footer/>}/>}/>}/>
        <Route exact path='/team' element={<Team header={<JustHeader/>} footer={<Footer/>}/>}/>}/>
      </Routes>
    </BrowserRouter>
  );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
