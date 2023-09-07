import {FiGift} from 'react-icons/fi'
import {BiFingerprint,BiWorld,BiTachometer} from 'react-icons/bi'
import {BsFillFileEarmarkTextFill} from 'react-icons/bs'
import {FaBasketballBall} from 'react-icons/fa'
import Hack2 from '../img/hack2.png'
import Hack6 from '../img/hack6.jpg'
import Hack7 from '../img/hack7.jpg'
import Hack8 from '../img/hack8.jpg'
import Hack9 from '../img/hack11.jpg'
import {Link} from 'react-router-dom'
import WEB3 from '../img/data.png'
import WEB4 from '../img/digital.png'
import WEB from '../img/web.avif'
import GRAPH from '../img/graph.jpg'
import DIGIT from '../img/digit.png'
import SCRAP from '../img/scrap.webp'
import CONTANT from '../img/contant.webp'
import COLD from '../img/cold.jpeg'
import LEAD from '../img/lead.jpeg'
import FB from '../img/ads.png'
import VOICE from '../img/voice.jpg'
import YT from '../img/moni.png'
import VD from '../img/vd.jpg'




export default function Services(props){
	return(
		<>
			{props.header}
			<main id="main" style={{width:'98.6%'}}>
			   <div class="row py-5" style={{textAlign:'center'}}>
	            <div class="col-lg-12 mx-auto" >
	              <div class="text-white p-5 shadow-sm rounded banner" >
	                <h1 class="display-4" >Our Services</h1>
	              </div>
	            </div>
	          </div>
			    <section class="service-details">
			      <div class="container">

			        <div class="row">
			          <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
			            <div class="card">
			              <div class="card-img">
			                <img src={WEB} alt="..."/>
			              </div>
			              <div class="card-body">
			                <h5 class="card-title"><a href="#">Web Development</a></h5>
			                <p class="card-text">Hoist your online nearness with our state-of-the-art web advancement administrations. Our specialists make energetic, user-friendly websites that consistently speak to your brand, guaranteeing captivating client involvement.</p>
			              </div>
			            </div>
			          </div>
			          <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
			            <div class="card">
			              <div class="card-img">
			                <img src={GRAPH} alt="..."/>
			              </div>
			              <div class="card-body">
			                <h5 class="card-title"><a href="#">Graphic Designing</a></h5>
			                <p class="card-text">Make a lasting visual impact with our captivating graphic designs. Our skilled designers create stunning visuals that capture your brand's essence, enhancing your marketing collateral and leaving a lasting impression.</p>
			              </div>
			            </div>

			          </div>
			          <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
			            <div class="card">
			              <div class="card-img">
			                <img src={DIGIT} alt="..."/>
			              </div>
			              <div class="card-body">
			                <h5 class="card-title"><a href="#">Digital Marketing</a></h5>
			                <p class="card-text">Experience the future of marketing with our innovative digital strategies. We harness the power of online platforms to enhance brand visibility, engage your target audience, and drive meaningful interactions that convert into tangible results.</p>
			              </div>
			            </div>
			          </div>
			          <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
			            <div class="card">
			              <div class="card-img">
			                <img src={SCRAP} alt="..."/>
			              </div>
			              <div class="card-body">
			                <h5 class="card-title"><a href="#">Data Scraping</a></h5>
			                <p class="card-text">Harness the power of data with our advanced scraping techniques. We gather valuable insights from various online sources, providing crucial information about your business decisions.</p>
			              </div>
			            </div>
			          </div>
			        </div>
			        <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
			            <div class="card">
			              <div class="card-img">
			                <img src={CONTANT} alt="..."/>
			              </div>
			              <div class="card-body">
			                <h5 class="card-title"><a href="#">Content Writing</a></h5>
			                <p class="card-text">Craft a compelling narrative with our expertly written content. From captivating blog posts to engaging website copy, our talented writers ensure your message resonates with your audience, driving engagement and building trust.</p>
			              </div>
			            </div>
			          </div>
			        <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
			            <div class="card">
			              <div class="card-img">
			                <img src={COLD} alt="..."/>
			              </div>
			              <div class="card-body">
			                <h5 class="card-title"><a href="#">Cold Calling</a></h5>
			                <p class="card-text">Open new avenues of communication with our targeted cold-calling services. Our adept team establishes meaningful connections, introduces your offerings, and generates valuable leads to fuel your growth.</p>
			              </div>
			            </div>
			          </div>
			        <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
			            <div class="card">
			              <div class="card-img">
			                <img src={LEAD} alt="..."/>
			              </div>
			              <div class="card-body">
			                <h5 class="card-title"><a href="#">Lead Generation</a></h5>
			                <p class="card-text">Unlock a world of potential customers with our finely tuned lead generation techniques. We specialize in connecting you with prospects genuinely interested in your offerings, ensuring a higher likelihood of successful conversions.</p>
			              </div>
			            </div>
			          </div>
			          <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
			            <div class="card">
			              <div class="card-img">
			                <img src={FB} alt="..."/>
			              </div>
			              <div class="card-body">
			                <h5 class="card-title"><a href="#">Facebook Ads</a></h5>
			                <p class="card-text">Use the power of Facebook in-stream advertising to reach your audience engagingly and seamlessly. We create advertising plans that resonate with your audience and increase your brand name.</p>
			              </div>
			            </div>
			          </div>
			          <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
			            <div class="card">
			              <div class="card-img">
			                <img src={VOICE} alt="..."/>
			              </div>
			              <div class="card-body">
			                <h5 class="card-title"><a href="#">Voice Over</a></h5>
			                <p class="card-text">Add a professional touch to your audio content with our exceptional voice-over services. Our talented voices bring scripts to life, enhancing the impact of your videos, commercials, and more.</p>
			              </div>
			            </div>
			          </div>
			          <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
			            <div class="card">
			              <div class="card-img">
			                <img src={YT} alt="..."/>
			              </div>
			              <div class="card-body">
			                <h5 class="card-title"><a href="#">Youtube Monetization</a></h5>
			                <p class="card-text">Maximize your YouTube channel's potential with our monetization strategies. We help you navigate the world of YouTube revenue generation, turning your content into a lucrative venture.</p>
			              </div>
			            </div>
			          </div>
			          <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
			            <div class="card">
			              <div class="card-img">
			                <img src={VD} alt="..."/>
			              </div>
			              <div class="card-body">
			                <h5 class="card-title"><a href="#">Video Editing</a></h5>
			                <p class="card-text">Transform raw footage into captivating visual stories with our expert video editing. We enhance your videos, ensuring they convey your message effectively and leave a lasting impression.</p>
			              </div>
			            </div>
			          </div>

			      </div>
			    </section>
			  </main>
			{props.footer}
		</>
	);
}