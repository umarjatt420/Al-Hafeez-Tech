import {MdLocationPin} from 'react-icons/md'
import {MdMarkEmailUnread} from 'react-icons/md'
import {FaPhoneVolume} from 'react-icons/fa'
import {Link} from 'react-router-dom'


export default function ContactUs(props){
	return(
		<>
			{props.header}
			<section class="breadcrumbs">
		      <div class="container">

		        <div class="d-flex justify-content-between align-items-center">
		          <h2 style={{fontWeight:'500'}}>Contact</h2>
		          <ol>
		            <li><Link to={`/home`} style={{textDecoration:'none'}}>Home</Link></li>
		            <li>Contact</li>
		          </ol>
		        </div>

		      </div>
		    </section>
		    <section class="contact" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500">
		      <div class="container">

		        <div class="row">

		          <div class="col-lg-16" >

		            <div class="row">
		              <div class="col-md-12">
		                <div class="info-box">
		                  <i className="bx bx-map"><MdLocationPin/></i>
		                  <h3>Our Address</h3>
		                  <p>Street No 2 Sabzazar Colony Behind Shell Pump Bahawalpur, Punjab , Pakistan</p>
		                </div>
		              </div>
		              <div class="col-md-6">
		                <div class="info-box">
		                  <i class="bx bx-envelope"><MdMarkEmailUnread/></i>
		                  <h3>Email Us</h3>
		                  <p>jamshedhafeez44@gmail.com<br/></p>
		                </div>
		              </div>
		              <div class="col-md-6">
		                <div class="info-box">
		                  <i class="bx bx-phone-call"><FaPhoneVolume/></i>
		                  <h3>Call Us</h3>
		                  <p>+92 307 8123255<br/></p>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>

		      </div>
		    </section>
		    <section class="map mt-2">
		      <div class="container-fluid p-0">
		        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d55618.71112644656!2d71.6563719!3d29.3945988!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x393b9162b709d017%3A0x89c98aeb2f85fffd!2sAL-Hafeez%20Tech%20Center!5e0!3m2!1sen!2s!4v1689011137207!5m2!1sen!2s" width="100%" height="100%" frameborder="0" style={{border:`0`}} allowfullscreen></iframe>
		      </div>
		    </section>


			{props.footer}

		</>
	);
}