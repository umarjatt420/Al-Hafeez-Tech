import '../index.css'
import {Link} from 'react-router-dom'
import '../Header CSS/header.css'
import Logo from '../img/logo.png'
import {useEffect,useState} from 'react'
import Slide1 from '../img/1920x1080/01.jpg'
import Slide2 from '../img/1920x1080/02.jpg'
import logo from '../img/small-logo.png'
import Hack11 from '../img/hack11.jpg'


export default function FooterHeader(){
	const images = [
		Hack11,
    Slide1,
    Slide2,
    // Add more image URLs as needed
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => {
      clearInterval(intervalId);
    };
  }, [images]);

  const sliderStyle = {
    backgroundImage: `url(${images[currentImageIndex]})`,
    backgroundSize: 'cover',
  	backgroundPosition: 'center center',
  	backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '670px'
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


 

	return(
			<>
		{isFixed ?(
			 <nav class="navbar" className={`navbar ${isFixed ? 'fixed-top' : ''}`} style={{backgroundColor:'#fffbfb',boxShadow: '0px 1px 9px 5px grey'}}>
			 <img className='small-logo' src={logo} />
			 <ul class="nav-links">
			   <input type="checkbox" id="checkbox_toggle" />
			   <label for="checkbox_toggle" class="hamburger" style={{color:'black'}}>&#9776;</label>
		 
			   <div  class="small-menu">
		 
			   	<li><Link style={{color:'black'}} to={`/`} >Home</Link></li>
				<li><Link to={"/services"} style={{color:'black'}}>Services</Link></li>
		 
				 <li class="services">
				 	<Link style={{color:'black'}} to={`/courses`} >Courses</Link>
				 </li>
		 
				 <li><Link to={`/team`} style={{color:'black'}} >Team</Link></li>
				 <li><Link to={`/about`} style={{color:'black'}}>About Us</Link></li>
				 <li><Link to={`/contact-us`} style={{color:'black'}}>Contact Us</Link></li>

			   </div>
			 </ul>
		   </nav>
		  
		  ):(
			<nav class="navbar" className={`navbar ${isFixed ? 'fixed-top' : ''}`} style={{backgroundColor:'rgba(0, 0, 0, 0)'}}>
			 <img src={Logo} className='large-logo' style={{maxHeight:'120px', width:'120px',paddingTop:'0px',position:'absolute',left:'1%'}}/>
			 <ul class="nav-links">
			   <input type="checkbox" id="checkbox_toggle" />
			   <label for="checkbox_toggle" class="hamburger" style={{color:'black'}}>&#9776;</label>
		 
			   <div class="menu">
		 
				 <li><Link style={{color:'white'}} to={`/`} >Home</Link></li>
				 <li><Link style={{color:'white'}} to={"/services"}>Services</Link></li>
		 
				 <li class="services">
				 	<Link style={{color:'white'}} to={`/courses`} >Courses</Link>
				 </li>
		 
				 <li><Link style={{color:'white'}} to={`/team`} >Team</Link></li>
				 <li><Link style={{color:'white'}} to={`/about`} >About Us</Link></li>
				 <li><Link style={{color:'white'}} to={`/contact-us`} >Contact Us</Link></li>
			   </div>
			 </ul>
		   </nav>
		  
		  )}
			<div class="carousel fade-carousel slide" data-ride="carousel" data-interval="4000" id="bs-carousel" style={sliderStyle}>
			  <div class="overlay"></div>
			  <ol class="carousel-indicators" style={{textAlign:'center'}}> 
			    <li data-target="#bs-carousel" data-slide-to="0" class="active"></li>
			    <li data-target="#bs-carousel" data-slide-to="1"></li>
			    <li data-target="#bs-carousel" data-slide-to="2"></li>
			  </ol>
			  <div class="carousel-inner">
			    <div class="item slides active" style={sliderStyle}>
			      <div class="slide-1" style={sliderStyle}></div>
			      <div class="hero">
			        <hgroup>
			            <h1 style={{fontSize:'41px',paddingBottom:'20px'}}>AL HAFEEZ TECH & DIGITAL MARKETING COMPANY</h1>        
			            <h3>Infinite Solutions for an Ever-Changing Tech World.</h3>
			        </hgroup>
			      </div>
			    </div>
			    <div class="item slides" style={sliderStyle}>
			      <div class="slide-2" style={sliderStyle}></div>
			      <div class="hero">        
			        <hgroup>
			            <h1>AL HAFEEZ TECH & DIGITAL MARKETING COMPANY</h1>        
			            <h3>Infinite Solutions for an Ever-Changing Tech World.</h3>
			        </hgroup>       
			      </div>
			    </div>
			    <div class="item slides" style={sliderStyle}>
			      <div class="slide-3" style={sliderStyle}></div>
			      <div class="hero">        
			        <hgroup>
			            <h1>AL HAFEEZ TECH & DIGITAL MARKETING COMPANY</h1>        
			            <h3>Infinite Solutions for an Ever-Changing Tech World.</h3>
			        </hgroup>
			      </div>
			    </div>
			  </div> 
			</div>
		</>
	);
}