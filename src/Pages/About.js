import '../About CSS/style.css'
import '../index.css'
import {Link} from 'react-router-dom'

import Hack1 from '../img/about.png'
import Hack2 from '../img/download.png'
import Hack3 from '../img/images.png'
import Hack4 from '../img/dow.png'
import Hack5 from '../img/home7.jpg'


import Hack10 from '../img/hack2.png'
import Hack6 from '../img/hack6.jpg'
import Hack7 from '../img/hack7.jpg'
import Hack8 from '../img/hack8.jpg'
import Hack9 from '../img/hack11.jpg'


import {BiSearchAlt} from 'react-icons/bi'
import {FaLaptopCode,FaUsers,FaSquareFacebook,FaSkype,FaWhatsapp,FaInstagram} from 'react-icons/fa'
import {MdAttachEmail,MdOutlineFileDownloadDone} from 'react-icons/md'
import {TbUsersPlus} from 'react-icons/tb'
import {RiFacebookBoxFill} from 'react-icons/ri'
import service2 from '../img/lg.png'
import service1 from '../img/dm.png'
import service3 from '../img/gd.jpeg'
import service4 from '../img/cc.jpeg'
import service5 from '../img/dc.jpeg'
import service6 from '../img/wd.jpg'
import service11 from '../img/cw.png'
import service7 from '../img/fa.png'
import service8 from '../img/vo.png'
import service9 from '../img/ve.png'
import service10 from '../img/ym.jpeg'
import why1 from './images/why1.png'
import why2 from './images/why2.png'
import logo from "./images/image2.png" 

export default function About(props){
	return(
		<>    
        {props.header}
        <section class="banner_main">
               <div class="container-fluid">
                  <div class="row d_flex">
                     <div class="col-md-555" style={{margin:'0% 0% 2% 0%',padding:'78px 76px 0px 76px',textAlign:'center'}}>
                        <div class="text-bg">
                           <h1 style={{fontWeight:'900',fontSize:'42px'}}>Al-Hafeez Tech - Your Trusted Tech Partner in Bahawalpur, Pakistan</h1>
                           <p style={{fontSize:'17px',marginTop:'2%'}}>Al-Hafeez Tech may be a nearby fabricating and innovation company glad to be at the bleeding edge of the developing innovation scene. Our group of innovation specialists is devoted to giving imaginative arrangements to improve your advanced involvement. We are committed to giving first-class benefits to guarantee your fulfillment.</p>
                           <a href="#">Get Started</a>
                        </div>
                     </div>
                     <div class="col-md-7">
                        <div class="text-img">
                           <img src={logo} className='about-img'/>
                        </div>
                     </div>
                  </div>
               </div>
            </section>
			<div id="service" class="three_box">
         <div class="container">
            <div class="row">
            <div style={{textAlign:'center'}}>
                  <h1 style={{fontWeight:'900',textAlign:'center'}}>What We Provide</h1>
            </div>
               <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12" style={{margin:'3% 2%'}}>
                  <div class="Soft-box">
                     <i><img src={service1} alt="#" className='about-icon'/></i>
                     <h3 className='about-head'> Digital Marketing </h3>
                     <p className='about-para'>Experience the future of marketing with our innovative digital strategies. We harness the power of online platforms to enhance brand visibility, engage your target audience, and drive meaningful interactions that convert into tangible results.</p>
                  </div>
               </div>
               <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div class="Soft-box">
                     <i><img src={service2} alt="#" className='about-icon'/></i>
                     <h3 className='about-head'>Lead Generation</h3>
                     <p className='about-para'>Unlock a world of potential customers with our finely tuned lead generation techniques. We specialize in connecting you with prospects genuinely interested in your offerings, ensuring a higher likelihood of successful conversions.</p>
                  </div>
               </div>
               <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div class="Soft-box">
                     <i><img src={service3} alt="#" className='about-icon'/></i>
                     <h3 className='about-head'>Graphic Designing</h3>
                     <p className='about-para'>Make a lasting visual impact with our captivating graphic designs. Our skilled designers create stunning visuals that capture your brand's essence, enhancing your marketing collateral and leaving a lasting impression.</p>
                  </div>
               </div>
               <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div class="Soft-box">
                     <i><img src={service4} alt="#" className='about-icon'/></i>
                     <h3 className='about-head'>Cold Calling</h3>
                     <p className='about-para'>Open new avenues of communication with our targeted cold-calling services. Our adept team establishes meaningful connections, introduces your offerings, and generates valuable leads to fuel your growth.</p>
                  </div>
               </div>
               <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div class="Soft-box">
                     <i><img src={service5} alt="#" className='about-icon'/></i>
                     <h3 className='about-head'>Data Scraping</h3>
                     <p className='about-para'>Harness the power of data with our advanced scraping techniques. We gather valuable insights from various online sources, providing crucial information about your business decisions.</p>
                  </div>
               </div>
               <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div class="Soft-box">
                     <i><img src={service6} alt="#" className='about-icon'/></i>
                     <h3 className='about-head'>Web Development</h3>
                     <p className='about-para'>Hoist your online nearness with our state-of-the-art web advancement administrations. Our specialists make energetic, user-friendly websites that consistently speak to your brand, guaranteeing captivating client involvement.</p>
                  </div>
               </div>
               <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div class="Soft-box">
                     <i><img src={service7} alt="#" className='about-icon'/></i>
                     <h3 className='about-head'>Facebook In-Stream Ads</h3>
                     <p className='about-para'>Use the power of Facebook in-stream advertising to reach your audience engagingly and seamlessly. We create advertising plans that resonate with your audience and increase your brand name.</p>
                  </div>
               </div>
               <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div class="Soft-box">
                     <i><img src={service8} alt="#" className='about-icon'/></i>
                     <h3 className='about-head'>Voice Over</h3>
                     <p className='about-para'>Add a professional touch to your audio content with our exceptional voice-over services. Our talented voices bring scripts to life, enhancing the impact of your videos, commercials, and more.</p>
                  </div>
               </div>
               <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div class="Soft-box">
                     <i><img src={service9} alt="#" className='about-icon'/></i>
                     <h3 className='about-head'>Video Editing</h3>
                     <p className='about-para'>Transform raw footage into captivating visual stories with our expert video editing. We enhance your videos, ensuring they convey your message effectively and leave a lasting impression.</p>
                  </div>
               </div>
               <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div class="Soft-box">
                     <i><img src={service10} alt="#" className='about-icon'/></i>
                     <h3 className='about-head'>YouTube Monetization</h3>
                     <p className='about-para'>Maximize your YouTube channel's potential with our monetization strategies. We help you navigate the world of YouTube revenue generation, turning your content into a lucrative venture.</p>
                  </div>
               </div>
               <div class="col-xl-4 col-lg-4 col-md-4 col-sm-12">
                  <div class="Soft-box">
                     <img src={service11} alt="#" className='about-icon'/>
                     <h3 className='about-head'>Content Writing</h3>
                     <p className='about-para'>Craft a compelling narrative with our expertly written content. From captivating blog posts to engaging website copy, our talented writers ensure your message resonates with your audience, driving engagement and building trust.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>    
    {props.footer}
		</>
	);
}