import Team1 from '../img/download.png'
import Team2 from '../img/dow.png'
import Team3 from '../img/images.png'
import Team4 from '../img/Team3.png'
import Team5 from '../img/Team2.jpeg'
import Team6 from '../img/Team4.png'
import {FaLaptopCode,FaUsers,FaSquareFacebook,FaSkype,FaWhatsapp,FaInstagram} from 'react-icons/fa'
import {MdAttachEmail,MdOutlineFileDownloadDone} from 'react-icons/md'
import {TbUsersPlus} from 'react-icons/tb'
import {SiStarship} from 'react-icons/si'
import {RiFacebookBoxFill} from 'react-icons/ri'
import {Link} from 'react-router-dom'
import Jamshaid from '../img/jamshaid.jpeg'
import Basharat from '../img/MD.jpg'
import Jameel from '../img/jameel.jpeg'
import Muneeb from '../img/muneeb.jpg'
import Shahzaib from '../img/shahzaib.jpeg'
import Moeen from '../img/moeen.jpeg'
import UmarJatt420 from '../img/jatt.jpg'
import Waqas from '../img/jamshaid.jpeg'
import Asma from '../img/asma.jpg'
import Areeba from '../img/areeba.jpeg'
import Mawra from '../img/mawra.jpeg'
import Anila from '../img/aliya.jpeg'


export default function Team(props){
	return(
		<>
			{props.header}
			<section class="breadcrumbs">
		      <div class="container">
		        <div class="d-flex justify-content-between align-items-center">
		          <h2 style={{fontWeight:'500'}}>Services</h2>
		          <ol>
		            <li><Link to={`/home`} style={{textDecoration:'none'}}>Home</Link></li>
		            <li>Services</li>
		          </ol>
		        </div>
		      </div>
		    </section>
			<div class="container-xxl py-5">
            <div class="container py-5 px-lg-5">
                <div class="wow fadeInUp" data-wow-delay="0.1s">
                    <p class="section-title text-secondary justify-content-center"><span></span>Our Team<span></span></p>
                    <h1 class="text-center mb-5">Our Team Members</h1>
                </div>
                <div class="row g-4">
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="team-item bg-light rounded">
                            <div class="text-center border-bottom p-4">
                                <img class="img-fluid rounded-circle mb-4" src={Jamshaid} alt=""/>
                                <h5>Jamshaid Hafeez</h5>
                                <span>CEO</span>
                            </div>
                            <div class="d-flex justify-content-center p-4">
                               <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"><RiFacebookBoxFill style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"><FaSkype style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"><FaWhatsapp style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-linkedin-in"><FaInstagram style={{color:'blue',fontSize:'24px'}}/></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="team-item bg-light rounded">
                            <div class="text-center border-bottom p-4">
                                <img class="img-fluid rounded-circle mb-4" src={Basharat} alt=""/>
                                <h5>Basharat Ali Saeedi</h5>
                                <span>Managing Director</span>
                            </div>
                            <div class="d-flex justify-content-center p-4">
                               <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"><RiFacebookBoxFill style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"><FaSkype style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"><FaWhatsapp style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-linkedin-in"><FaInstagram style={{color:'blue',fontSize:'24px'}}/></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="team-item bg-light rounded">
                            <div class="text-center border-bottom p-4">
                                <img class="img-fluid rounded-circle mb-4" src={Jameel} alt=""/>
                                <h5>Jameel Khan</h5>
                                <span>President/Upwork Handler</span>
                            </div>
                            <div class="d-flex justify-content-center p-4">
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"><RiFacebookBoxFill style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"><FaSkype style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"><FaWhatsapp style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-linkedin-in"><FaInstagram style={{color:'blue',fontSize:'24px'}}/></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="team-item bg-light rounded">
                            <div class="text-center border-bottom p-4">
                                <img class="img-fluid rounded-circle mb-4" src={Muneeb} alt=""/>
                                <h5>Muneeb Sultan</h5>
                                <span>Digital Marketing</span>
                            </div>
                            <div class="d-flex justify-content-center p-4">
                               <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"><RiFacebookBoxFill style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"><FaSkype style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"><FaWhatsapp style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-linkedin-in"><FaInstagram style={{color:'blue',fontSize:'24px'}}/></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="team-item bg-light rounded">
                            <div class="text-center border-bottom p-4">
                                <img class="img-fluid rounded-circle mb-4" src={UmarJatt420} alt="" />
                                <h5>Umar Jatt</h5>
                                <span>Full Stack Developer</span>
                            </div>
                            <div class="d-flex justify-content-center p-4">
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"><RiFacebookBoxFill style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"><FaSkype style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"><FaWhatsapp style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-linkedin-in"><FaInstagram style={{color:'blue',fontSize:'24px'}}/></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="team-item bg-light rounded">
                            <div class="text-center border-bottom p-4">
                                <img class="img-fluid rounded-circle mb-4" src={Waqas} alt=""/>
                                <h5>Waqas Jatt</h5>
                                <span>Full Stack Developer</span>
                            </div>
                            <div class="d-flex justify-content-center p-4">
                               <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"><RiFacebookBoxFill style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"><FaSkype style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"><FaWhatsapp style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-linkedin-in"><FaInstagram style={{color:'blue',fontSize:'24px'}}/></i></a>
                            </div>
                        </div>
                    </div>
                     <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="team-item bg-light rounded">
                            <div class="text-center border-bottom p-4">
                                <img class="img-fluid rounded-circle mb-4" src={Anila} alt=""/>
                                <h5>Alia Kashif</h5>
                                <span>Information Officer</span>
                            </div>
                            <div class="d-flex justify-content-center p-4">
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"><RiFacebookBoxFill style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"><FaSkype style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"><FaWhatsapp style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-linkedin-in"><FaInstagram style={{color:'blue',fontSize:'24px'}}/></i></a>
                            </div>
                        </div>
                    </div>

                     <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="team-item bg-light rounded">
                            <div class="text-center border-bottom p-4">
                                <img class="img-fluid rounded-circle mb-4" src={Asma} alt=""/>
                                <h5>Asma Zafar</h5>
                                <span>Content Writer</span>
                            </div>
                            <div class="d-flex justify-content-center p-4">
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"><RiFacebookBoxFill style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"><FaSkype style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"><FaWhatsapp style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-linkedin-in"><FaInstagram style={{color:'blue',fontSize:'24px'}}/></i></a>
                            </div>
                        </div>
                    </div>

                     <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="team-item bg-light rounded">
                            <div class="text-center border-bottom p-4">
                                <img class="img-fluid rounded-circle mb-4" src={Moeen} alt=""/>
                                <h5>Moeen Khan</h5>
                                <span>Lead Generation Expert</span>
                            </div>
                            <div class="d-flex justify-content-center p-4">
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"><RiFacebookBoxFill style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"><FaSkype style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"><FaWhatsapp style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-linkedin-in"><FaInstagram style={{color:'blue',fontSize:'24px'}}/></i></a>
                            </div>
                        </div>
                    </div>


                     <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="team-item bg-light rounded">
                            <div class="text-center border-bottom p-4">
                                <img class="img-fluid rounded-circle mb-4" src={Shahzaib} alt=""/>
                                <h5>Shahzaib Ahmad </h5>
                                <span>Youtube Expert</span>
                            </div>
                            <div class="d-flex justify-content-center p-4">
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"><RiFacebookBoxFill style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"><FaSkype style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"><FaWhatsapp style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-linkedin-in"><FaInstagram style={{color:'blue',fontSize:'24px'}}/></i></a>
                            </div>
                        </div>
                    </div>


                     <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="team-item bg-light rounded">
                            <div class="text-center border-bottom p-4">
                                <img class="img-fluid rounded-circle mb-4" src={Areeba} alt=""/>
                                <h5>Areeba Akbar</h5>
                                <span>Lead Generation Expert</span>
                            </div>
                            <div class="d-flex justify-content-center p-4">
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"><RiFacebookBoxFill style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"><FaSkype style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"><FaWhatsapp style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-linkedin-in"><FaInstagram style={{color:'blue',fontSize:'24px'}}/></i></a>
                            </div>
                        </div>
                    </div>


                     <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="team-item bg-light rounded">
                            <div class="text-center border-bottom p-4">
                                <img class="img-fluid rounded-circle mb-4" src={Mawra} alt=""/>
                                <h5>Mawra Nawaz</h5>
                                <span>Lead Generation Expert</span>
                            </div>
                            <div class="d-flex justify-content-center p-4">
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-facebook-f"><RiFacebookBoxFill style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-twitter"><FaSkype style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-instagram"><FaWhatsapp style={{color:'blue',fontSize:'24px'}}/></i></a>
                                <a class="btn btn-square mx-1" href=""><i class="fab fa-linkedin-in"><FaInstagram style={{color:'blue',fontSize:'24px'}}/></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
		{props.footer}
		</>
	);
}