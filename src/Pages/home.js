import Logo1 from '../img/clients/01.png'
import Logo2 from '../img/clients/02.png'
import Logo3 from '../img/clients/03.png'
import Logo4 from '../img/clients/04.png'
import Logo5 from '../img/clients/05.png'
import Logo6 from '../img/clients/06.png'


// Product Image

import Prod1 from '../img/970x647/01.jpg'
import Prod2 from '../img/970x647/02.jpg'
import Prod3 from '../img/970x647/03.jpg'


// Protfolio IMG

import Prot1 from '../img/397x300/01.jpg'
import Prot2 from '../img/397x300/02.jpg'
import Prot3 from '../img/397x300/03.jpg'
import Prot4 from '../img/397x300/04.jpg'
import Prot5 from '../img/397x300/05.jpg'


// Gallery IMG

import Gallery1 from '../img/500x500/01.jpg'
import Gallery2 from '../img/500x500/02.jpg'
import Gallery3 from '../img/500x500/03.jpg'



// Hacker


import Hack1 from '../img/hack1.jpg'
import Hack2 from '../img/hack11.jpg'
import Hack3 from '../img/home2.jpg'
import Hack4 from '../img/home1.webp'
import Hack5 from '../img/home7.jpg'

import {BiSearchAlt} from 'react-icons/bi'
import {FaLaptopCode,FaUsers,FaSquareFacebook,FaSkype,FaWhatsapp,FaInstagram} from 'react-icons/fa'
import {MdAttachEmail,MdOutlineFileDownloadDone} from 'react-icons/md'
import {TbUsersPlus} from 'react-icons/tb'
import {RiFacebookBoxFill} from 'react-icons/ri'
import {SiStarship} from 'react-icons/si'
import {FiGift} from 'react-icons/fi'
import {BiFingerprint,BiWorld,BiTachometer} from 'react-icons/bi'
import {BsFillFileEarmarkTextFill} from 'react-icons/bs'
import {FaBasketballBall} from 'react-icons/fa'
import '../index.css'
import {useEffect,useState} from 'react'
import Reactjs from '../img/Icon.png'
import Python from '../img/Paython.png'
import Node from '../img/node.png'
import Django from '../img/djs.png'
import ReactNative from '../img/native.png'
import wordpress from '../img/wordpress.png'
import bootstrap from '../img/bootstrap.png'
import js from '../img/java.png'
import figma from '../img/figmas.png'
import flask from '../img/flask.jpeg'
import Hack6 from '../img/hack6.jpg'
import Hack7 from '../img/hack7.jpg'
import PLAN from '../img/plan.jpg'
import MISSION from '../img/mission.avif'


export default function Home(props){
  const [count, setCount] = useState(0);
    const [projects,setProjects]=useState(0);
    const [team,setTeam]=useState(0)
    const [clients,setClient]=useState(0)
    const targetValue = 5;
    const intervalDuration = 10;
    useEffect(() => {
        const interval = setInterval(() => {
          if (count < targetValue) {
            setCount(count + 1);
          }
        }, intervalDuration);
        const interval2 = setInterval(() => {
            if (projects < 210) {
              setProjects(projects + 1);
            }
          }, intervalDuration);
        const interval3 = setInterval(() => {
        if (clients < 70) {
            setClient(clients + 1);
        }
        }, intervalDuration);
        const interval4 = setInterval(() => {
            if (team < 48) {
              setTeam(team + 1);
            }
        }, intervalDuration);
        return () => {
          clearInterval(interval);
          clearInterval(interval2);
          clearInterval(interval3);
          clearInterval(interval4);
        };
      }, [count, projects, clients , team , targetValue]);
  
	return(
		<>
      {props.navbar}
      <div class="container-fluid">
        <div class="px-lg-5">
          <div class="row py-5">
            <div class="col-lg-12 mx-auto">
              <div class="text-white p-5 shadow-sm rounded banner">
                <h1 class="display-4">Technology Used By Al Hafeez Tech</h1>
              </div>
            </div>
          </div>
        <marquee scrollamount='16'>
          <div class="rows" style={{rowGap:'8px',columnGap:'28px',margin:'2%s 0% 0 0',width:'93%',display:'inline-flex'}}>
            <div class="col-xl-31 col-lg-4 col-md-6 mb-4">
              <img src={Reactjs} alt="" class="img-fluids1 card-img-top" style={{height:'138px',width:"auto",margin:'6px 0 0 9%'}}/>
            </div>
            <div class="col-xl-32 col-lg-4 col-md-6 mb-4">
              <img src={Python} alt="" class="img-fluids2 card-img-top" style={{height:'127px',width:"auto",margin:'14px 0 0 5%'}}/>
            </div>
            <div class="col-xl-34 col-lg-4 col-md-6 mb-4">
              <img src={Django} style={{height:'113px',width:"auto",margin :'19% 4% 0 18%'}} alt="" class="img-fluids4 card-img-top"/>
            </div>
            <div class="col-xl-35 col-lg-4 col-md-6 mb-4">
              <img src={wordpress} style={{height:'164px',width:"auto",margin:'0 4% 4% 14%'}} alt="" class="img-fluids5 card-img-top"/>
            </div>
          </div>
        </marquee>
        <marquee  scrollamount='16' > 
          <div class="rows" style={{rowGap:'8px',columnGap:'28px',margin:'2% 0% 0 0',width:'93%',display:'inline-flex'}}>
            <div class="col-xl-36 col-lg-4 col-md-6 mb-4">
              <img src={bootstrap} style={{height:'153px',width:"auto",margin:'1% 0 0 '}} alt="" class="img-fluids6 card-img-top"/>
            </div>
            <div class="col-xl-37 col-lg-4 col-md-6 mb-4">
              <img src={figma} style={{height:'137px',width:"auto",margin:'10% 0 0 0%'}} alt="" class="img-fluids7 card-img-top"/>
            </div>
            <div class="col-xl-39 col-lg-4 col-md-6 mb-4">
              <img src={js} style={{height:'139px',width:"auto",margin:'12% 12% 12% 1%'}} alt="" class="img-fluids9 card-img-top"/>
            </div>
            <div class="col-xl-40 col-lg-4 col-md-6 mb-4">
              <img src={flask} style={{height:'129px',width:"auto",margin:'12%'}} alt="" class="img-fluids40 card-img-top"/>
            </div>
          </div>
        </marquee>
        </div>
      </div>
			<main id="main">
        <div class="container-xxl bg-primary fact py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div class="container py-5 px-lg-5">
              <div class="row g-4">
                  <div class="col-md-6 col-lg-33  text-center wow fadeIn" data-wow-delay="0.1s">
                      <i class="fa fa-certificate fa-3x text-secondary mb-3"><SiStarship  style={{color:'blue',marginBottom:'17px'}}/></i>
                      <h1 class="text-white mb-2" data-toggle="counter-up">{count}</h1>
                      <p class="text-white mb-0">Years Experience</p>
                  </div>
                  <div class="col-md-6 col-lg-33 text-center wow fadeIn" data-wow-delay="0.3s">
                      <i class="fa fa-users-cog fa-3x text-secondary mb-3"><TbUsersPlus  style={{color:'red',marginBottom:'17px'}}/></i>
                      <h1 class="text-white mb-2" data-toggle="counter-up">{team}+</h1>
                      <p class="text-white mb-0">Team Members</p>
                  </div>
                  <div class="col-md-6 col-lg-33 text-center wow fadeIn" data-wow-delay="0.5s">
                      <i class="fa fa-users fa-3x text-secondary mb-3"><FaUsers  style={{color:'yellow',marginBottom:'17px'}}/></i>
                      <h1 class="text-white mb-2" data-toggle="counter-up">{clients}+</h1>
                      <p class="text-white mb-0">Satisfied Clients</p>
                  </div>
                  <div class="col-md-6 col-lg-33 text-center wow fadeIn" data-wow-delay="0.7s">
                      <i class="fa fa-check fa-3x text-secondary mb-3"><MdOutlineFileDownloadDone style={{color:'green',marginBottom:'17px'}}/></i>
                      <h1 class="text-white mb-2" data-toggle="counter-up">{projects}+</h1>
                      <p class="text-white mb-0">Compleate Projects</p>
                  </div>
              </div>
          </div>
      </div>
    </main>
     <section class="service-details">
        <div class="container">
          <div class="row">
            <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
              <div class="card">
                <div class="card-img">
                  <img src={MISSION} alt="..."/>
                </div>
                <div class="card-body">
                  <h5 class="card-title"><a href="#">Our Mission</a></h5>
                  <p class="card-text">Our mission demonstrates our dedication to not only maintain a leading position in the IT sector but also to use our knowledge to improve both society and the economy.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
              <div class="card">
                <div class="card-img">
                  <img src={PLAN} alt="..."/>
                </div>
                <div class="card-body">
                  <h5 class="card-title"><a href="#">Our Plan</a></h5>
                  <p class="card-text">Al Hafeez Tech is prepared to lead the industry into a new age of technical growth with a solid mission and clearly defined plans.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    {props.footer}
    }
		</>
	);
}