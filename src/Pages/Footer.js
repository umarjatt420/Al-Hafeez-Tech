import {FaLaptopCode,FaUsers,FaFacebookSquare,FaSkype,FaWhatsapp,FaInstagram,FaTwitterSquare,FaYoutube} from 'react-icons/fa'
import {RiFacebookBoxFill} from 'react-icons/ri'



export default function Footer(){
	return(
		<>
				<footer id="footer" data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-duration="500" >
					<div class="footer-top">
				      <div class="container" style={{display:'flex'}}>
				        <div class="row">
				          <div class="col-lg-3 col-md-6 footer-info">
				            <div class="social-links mt-3">
				              <a href="#" class="twitter"><i class="bx bxl-twitter"><FaTwitterSquare style={{fontSize:'32px',color:'#27AAE2'}}/></i></a>
				              <a href="#" class="facebook"><i class="bx bxl-facebook"><FaFacebookSquare style={{fontSize:'32px',color:'#046DE5'}}/></i></a>
				              <a href="#" class="instagram"><i class="bx bxl-instagram"><FaInstagram style={{fontSize:'32px',color:'#F64F72'}}/></i></a>
				              <a href="#" class="linkedin"><i class="bx bxl-linkedin"><FaWhatsapp style={{fontSize:'32px',color:'#5CCF5F'}}/></i></a>
				              <a href="#" class="linkedin"><i class="bx bxl-linkedin"><FaYoutube style={{fontSize:'32px',color:'red'}}/></i></a>
				            </div>
				          </div>
				        </div>
				      </div>
				    </div>

				    <div class="container">
				      <div class="copyright">
				        &copy; Copyright <strong><span>alhafeeztech</span></strong>. All Rights Reserved
				      </div>
				    </div>
			</footer>
		</>
	);
}