import '../index.css'
import {Link} from 'react-router-dom'
import '../Header CSS/header.css'
import Logo from '../img/logo.png'
import {useEffect,useState} from 'react'
import logo from '../img/small-logo.png'


export default function JustHeader(){
	const [isFixed, setIsFixed] = useState(false);
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
		
		{isFixed ? (
			<nav class="navbar" className={`navbar ${isFixed ? 'fixed-top' : ''}`} style={{backgroundColor:'#fffbfb',boxShadow: '0px 1px 9px 5px grey'}}>
			 <img className='small-logo' src={logo}/>
			 <ul class="nav-links">
			   <input type="checkbox" id="checkbox_toggle" />
			   <label for="checkbox_toggle" class="hamburger" style={{color:'black'}}>&#9776;</label>
		 
			   <div class="menu">
		 
			   	<li><Link to={`/`} >Home</Link></li>
				<li><Link to={"/services"}>Services</Link></li>
		 
				 <li class="services">
				 	<Link to={`/courses`} >Courses</Link>	 
				 </li>
		 
				 <li><Link to={`/team`} >Team</Link></li>
				 <li><Link to={`/about`} >About Us</Link></li>
				 <li><Link to={`/contact-us`} >Contact Us</Link></li>

			   </div>
			 </ul>
		   </nav>
			):(
				<nav class="navbar" className={`navbar ${isFixed ? 'fixed-top' : ''}`} style={{backgroundColor:'#fffbfb',boxShadow: '0px 1px 9px 5px grey'}}>
			 <img className='small-logo' src={logo} />
			 <ul class="nav-links">
			   <input type="checkbox" id="checkbox_toggle" />
			   <label for="checkbox_toggle" class="hamburger" style={{color:'black'}}>&#9776;</label>
		 
			   <div class="menu">
		 
			   	<li><Link to={`/`} >Home</Link></li>
				<li><Link to={"/services"}>Services</Link></li>
		 
				 <li class="services">
				 	<Link to={`/courses`} >Courses</Link>
				 </li>
		 
				 <li><Link to={`/team`} >Team</Link></li>
				 <li><Link to={`/about`} >About Us</Link></li>
				 <li><Link to={`/contact-us`} >Contact Us</Link></li>

			   </div>
			 </ul>
		   </nav>
			)}
		</>
	);
}