import React from "react";
import style from "./Home.module.scss";
import logo from "../assets/logosvg.svg";
import cube2 from "../assets/landingimg.svg";
import globe from "../assets/globe.svg";
import righthand from "../assets/righthand.svg";
import lefthand from "../assets/lefthand.svg";
import blueGrandient from "../assets/bluegradient.svg";
import rays from "../assets/rays.svg";
import more from "../assets/more.svg";
import ellipse5 from "../assets/Ellipse5.svg";
import ellipse6 from "../assets/Ellipse6.svg";
import img1 from "../assets/Rectangle 1.svg";
import img2 from "../assets/Rectangle 1 (1).svg";
import img3 from "../assets/Rectangle 1 (2).svg";
import img4 from "../assets/Rectangle 1 (3).svg";
import img5 from "../assets/Rectangle 1 (4).svg";
import img6 from "../assets/Rectangle 1 (5).svg";
import img7 from "../assets/Rectangle 1 (6).svg";
import ellipse7 from "../assets/Ellipse7.svg";
import speechImg from "../assets/Rectangle1.png";
import rectangle2 from '../assets/Rectangle2.png'
import rectangle3 from '../assets/Rectangle3.png'
import rectangle5 from '../assets/Rectangle5.png'
import rectangle6 from '../assets/Rectangle6.png'
import ellipse2 from '../assets/Ellipse 2.png'
import rectangle7 from '../assets/Rectangle7.png'
import robo from '../assets/robo2.png'
import Logo from '../assets/Logo.svg'
import Block from "./Block/Block";
import Blog from "./Blog/Blog";
import Footer from "./Footer/Footer";
const dummyData = [
  { 
    id:0,
    title : "From developing compelling press releases and thought leadership content to securing coverage in top-tier publications.",
        desc:"We'll help you make a splash in the decentralized world and stand out in a crowded market.All you need to do is choose a package -We'll take care of all of the hard work for you.",
        img:speechImg,
        mainTitle:"PR",
        fontSize:"232px",
        lineHeight:"normal",
        letterSpacing:"-40px",
        marginBottom:"-95px",
        reverse:false,
        btn:true
  },
  {
    id:1,
    title : "With the rise of influencer marketing, it's easy to get lost in a sea of micro-influencers with questionable results. ",
        desc:"At our agency, we understand the importance of trust and transparency when it comes to influencer marketing. That's why we only work with top-quality influencers who have a proven track record of driving results.We continuously gather data on influencer performance and engagement to ensure that we match the right influencer to the right project, ensuring maximum ROI for our clients. Our team of experts will work closely with you to create a customized influencer marketing strategy that delivers real results and helps build trust with your target audience.",
        img:rectangle2,
        mainTitle:"Influencer Marketing",
        fontSize:"152px",
        lineHeight:"111px",
        letterSpacing:"-10px",
        marginBottom:"16px",
        reverse:true,
        btn:false
  },
  {
    id:2,
    title : "Maximize the potential of your Twitter & other social media presence with our end-to-end content creation services. ",
        desc:"Our team of experts will work closely with you to craft high-quality, engaging posts that align with your brand's tone and messaging. From crafting attention-grabbing infographics to creating educational content, we will ensure that your Twitter page effectively communicates your brand's message and resonates with your target audience.",
        img:rectangle3,
        mainTitle:"Social Channels Content Creation",
        fontSize:"152px",
        lineHeight:"113px",
        letterSpacing:"-10px",
        marginBottom:"16px",
        reverse:false,
        btn:false
  },
  {
    id:3,
    title : "Create a strong brand identity in the crypto world with our professional graphic design services.",
        desc:" Our team will design visually stunning logos, social media content, websites and marketing materials to communicate your message effectively",
        img:rectangle5,
        mainTitle:"Graphic Design",
        fontSize:"152px",
        lineHeight:"113px",
        letterSpacing:"-10px",
        marginBottom:"16px",
        reverse:true,
        btn:false
  },
  {
    id:4,
    title : "Create a strong brand identity in the crypto world with our professional graphic design services.",
        desc:"Specifically designed to connect you with engaged and relevant communities in a specific region, providing you with a platform to share your message and promote your brand. By targeting a specific regional audience, you can reach a highly engaged and relevant user base, increasing brand awareness and driving conversions. Whether it's a dedicated channel,  a telegram/discord group, we'll help you reach your target audience and make a lasting impact in a specific region.",
        img:rectangle6,
        mainTitle:"Regional Community Promotions",
        fontSize:"152px",
        lineHeight:"113px",
        letterSpacing:"-10px",
        marginBottom:"16px",
        reverse:false,
        btn:false
  },
  {
    id:5,
    title : "Within 3 years of experience in the crypto and blockchain industry, we have established a vast network of industry leaders and experts. ",
        desc:"We leverage these connections to help our clients build their projects faster and more efficiently. From connecting you with potential partners and investors to providing access to a wealth of industry knowledge, our network is a valuable asset that can help take your project to the next level",
        img:rectangle7,
        mainTitle:"Networking",
        fontSize:"188px",
        lineHeight:"113px",
        letterSpacing:"-10px",
        marginBottom:"16px",
        reverse:true,
        btn:false
  }
  ]

function Home() {

  return (
    <div className={style.main}>
      <div className={style.headerCont}>
        <img src={logo} alt="logo" />
        <div className={style.aboutusCont}>
          <div className={style.aboutUs}>
            <div>About Us</div>
            <div>Our Services</div>
            <div>Blog</div>
            <div>Contact us</div>
          </div>
          <button className={style.button}>Free Consultation</button>
        </div>
      </div>
      <div className={style.landingCont}>
        <div className={style.titleDesccont}>
          <div className={style.landingTitle}>
            Your bootstrap Partners for a professional, successful Go-to-market
            launch.
          </div>
          <div className={style.landingDesc}>
            We have extensive experience in investing and digital marketing, and
            have assisted over 30+ blockchain startups in fundraising,
            increasing public awareness, and implementing their projects during
            the pre-IDO and post-IDO stages.
          </div>
        </div>
        <img src={ellipse2} alt="elipse2" className={style.ellipse2}/>
      </div>
      <div>
        <img src={cube2} alt="landing" className={style.cube} />
      </div>
      <div className={style.card}>
        <div className={style.cardDesc}>
          We take a long-term approach and invest significant time and resources
          to support and guide our partners throughout their development.
        </div>
      </div>
      <div className={style.accessCont}>
        <div className={style.accessTitle}>
          {" "}
          Access to new markets at your fingertips.
        </div>
        <div className={style.accessDesc}>
          It took us 3 years to build ourselves. enjoy the fruits of our hard
          work - and access our knowledge, network & experience in{" "}
          <span className={style.spanClick}>one click</span>. 
        </div>
      </div>
      <div className={style.globeCont}>
        <img src={righthand} alt="righthand" />
        <div className={style.globeGradientCont}>
          <img src={globe} alt="globe" className={style.globe} />
          <img
            src={blueGrandient}
            alt="blueGradient"
            className={style.blueGradient}
          />
        </div>
        <img src={lefthand} alt="lefthand" />
        <div className={style.rays}>
          <img src={rays} alt="rays" />
        </div>
      </div>
      <div className={style.muchCont}>
        <div className={style.muchTitle}>much</div>
        <div>
          <img src={more} alt="more" className={style.more} />
        </div>
        <div className={style.muchTitle}>than a marketing agency</div>
        {/* <div><img src={ellipse5} alt='elipse' className={style.ellipse5}/></div> */}
        {/* <div><img src={ellipse6} alt='ellipse6'/></div> */}
      </div>
      <div className={style.trendifyText}>
        Trendify Understands your Needs and have the{" "}
        <span className={style}>solutions</span>
      </div>
      <div className={style.imagesCont}>
        <div className={style.twoImgCont}>
          <div className={style.imgDesc}>
            <img src={img1} alt="img1" />
            <div className={style.img1Desc}>PR</div>
          </div>
          <div className={style.imgDesc}>
            <img src={img2} alt="img1" />
            <div className={style.img1Desc}>Influencer Marketing provider</div>
          </div>
        </div>
        <div className={style.twoImgCont}>
          <div className={style.imgDesc}>
            <img src={img3} alt="img1" />
            <div className={style.img1Desc}>Regional community promotions</div>
          </div>
          <div className={style.imgDesc}>
            <img src={img4} alt="img1" />
            <div className={style.img1Desc}>Content creation</div>
          </div>
        </div>

        <div className={style.twoImgCont}>
          <div className={style.imgDesc}>
            <img src={img5} alt="img1" />
            <div className={style.img1Desc}>
              Community building & management
            </div>
          </div>
          <div className={style.imgDesc}>
            <img src={img6} alt="img1" />
            <div className={style.img1Desc}>Graphic design</div>
          </div>
          <div className={style.imgDesc}>
            <img src={img7} alt="img1" />
            <div className={style.img1Desc}>Networking</div>
          </div>
        </div>
        {/* <img src={ellipse7} alt='ellipse'/> */}
      </div>
      {
        dummyData.map(each =>(
          <Block data={each} key={each.id}/>
        ))
      }
      <div className={style.soundCont}>
        <div className={style.soundCont_head}>Sounds like we’ll  make a good match?</div>
        <div className={style.soundCont_desc}>Leave a message and get a quote back</div>
        <button className={style.soundCont_packagesBtn}>Schedule a Free Consultation Call</button>
        <img src={robo} alt="robo" className={style.soundCont_robo}/>
      </div>
      <div className={style.longTermCont}>
      <div className={style.longTermCont_head}>Long-term Approach as partners and Investors in</div>
      <div className={style.longTermCont_desc}>At our agency, we believe in building long-term partnerships. We are proud to have partnered with some of the most reputable companies and investors in the industry, and we are committed to helping you too, achieve success.</div>
      <div className={style.longTermCont_logoCont}>
        <img src={Logo} alt="logo"/>
        <img src={Logo} alt="logo"/>
        <img src={Logo} alt="logo"/>
        <img src={Logo} alt="logo"/>
        <img src={Logo} alt="logo"/>
      </div>
      <div className={style.longTermCont_logoCont2}>
      <img src={Logo} alt="logo"/>
        <img src={Logo} alt="logo"/>
        <img src={Logo} alt="logo"/>
        <img src={Logo} alt="logo"/>
      </div>
      </div>
      <Blog/>
      <Footer/>
    </div>
  );
}

export default Home;
