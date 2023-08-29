import './Course CSS/style.css'

import Hack1 from '../img/hack1.jpg'
import Hack2 from '../img/hack6.jpg'
import Hack3 from '../img/home2.jpg'
import Hack4 from '../img/home1.webp'
import Hack5 from '../img/home7.jpg'


import WEB from '../img/n.jpg'
import WEB2 from '../img/d.png'
import WEB3 from '../img/data.png'
import WEB4 from '../img/digital.png'
import WEB1 from '../img/download.jpeg'


import Team1 from '../img/download.png'
import Team2 from '../img/dow.png'
import Team3 from '../img/images.png'
import Team4 from '../img/Team3.png'
import Team5 from '../img/Team2.jpeg'
import Team6 from '../img/Team4.png'

import Jameel from '../img/jameel.jpeg'
import Muneeb from '../img/muneeb.jpg'


export default function Courses(props){

	return(
		<>
            {props.header}
			<section class="course-section spad pb-0" style={{margin:'5%'}}>
                <div class="course-warp" style={{marginTop:'10%'}}>                                      
                    <div class="row course-items-area">
                        <div class="mix col-lg-3 col-md-4 col-sm-6 web">
                            <div class="course-item">
                                <div class="course-thumb set-bg" style={{ backgroundImage: `url(${WEB4})`}}>
                                </div>
                                <div class="course-info">
                                    <div class="course-text">
                                        <h5>Digital Marketing</h5>
                                        <p>Elevate Your Business with Our Cutting-Edge Digital Marketing.</p>
                                    </div>
                                    <div class="course-author">
                                        <div class="ca-pic set-bg" style={{ backgroundImage: `url(${Muneeb})`}}></div>
                                        <p>Muneeb Sultan ,<span> Digital Marketing Expert</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div class="mix col-lg-3 col-md-4 col-sm-6 photo">
                            <div class="course-item">
                                <div class="course-thumb set-bg" style={{ backgroundImage: `url(${WEB3})`}}>
                                </div>
                                <div class="course-info">
                                    <div class="course-text">
                                        <h5>Lead Generation</h5>
                                        <p>We Don’t Make Lead. We Make Lead Better.</p>
                                    </div>
                                    <div class="course-author">
                                        <div class="ca-pic set-bg" style={{ backgroundImage: `url(${Jameel})`}}></div>
                                        <p>Jameel Khan, <span> Lead Generation Expert</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="featured-courses">
                        <div class="featured-course course-item">
                            <div class="course-thumb set-bg" style={{ backgroundImage: `url(${WEB4})`}}>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 offset-lg-6 pl-0">
                                    <div class="course-info">
                                        <div class="course-text">
                                            <div class="fet-note">Featured Course</div>
                                            <h5>Digital Marketing</h5>
                                            <p>
                                                Experience the future of marketing with our innvation digital strategies. 
                                                We harness the power of online platform to enhance brand visibility, engage your target audience
                                                and drive meaningful interactions that convert into tangible result. 
                                            </p>
                                        </div>
                                        <div class="course-author">
                                            <div class="ca-pic set-bg" style={{ backgroundImage: `url(${Muneeb})`}}></div>
                                            <p>Muneeb Sultan , <span>Digital Marketing Expert</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="featured-course course-item" style={{marginBottom:'4%'}}>
                            <div class="course-thumb set-bg" style={{ backgroundImage: `url(${WEB3})`}}>
                            </div>
                            <div class="row">
                                <div class="col-lg-6 pr-0">
                                    <div class="course-info">
                                        <div class="course-text">
                                            <div class="fet-note">Featured Course</div>
                                            <h5>Lead Generation</h5>
                                            <p>
                                                Unlock a world of potential customers with our finely tuned lead generation techniques. 
                                                We specialize in connecting you with prospects genuinely interested in your offerings,
                                                ensuring a higher likelihood of successful conversions.
                                            </p>
                                        </div>
                                        <div class="course-author">
                                            <div class="ca-pic set-bg" style={{ backgroundImage: `url(${Jameel})`}}></div>
                                            <p>Jameel Khan , <span>Lead Generation Expert</span></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        {props.footer}
		</>
	);
}