import React from 'react'
import style from './Footer.module.scss'
import footerLogo from '../../assets/footerLogo.svg'
import facebook from '../../assets/Facebook logo 2019.svg'
import linkidin from '../../assets/Linkedin.svg'
import twitter from '../../assets/Twitter.svg'
import insta from '../../assets/Instagram.svg'
function Footer() {
  return (
    <div className={style.footerCont}>
      <div>
      <img src={footerLogo} alt='footerLogo'/>
      <div className={style.footerCont_desc}>Velit semper posuere ultricies volutpat sed. Tincidunt cras mauris aenean aliquet neque.</div>
      </div>
      <div className={style.footerCont_text}>
        <div className={style.footerCont_text_logo}><img src={facebook} alt='facebook'/> Facebook</div>
        <div className={style.footerCont_text_logo}><img src={linkidin} alt='linkidin'/> Linkedin</div>
        <div className={style.footerCont_text_logo}><img src={twitter} alt='twitter'/> Twitter</div>
        <div className={style.footerCont_text_logo}><img src={insta} alt='insta'/> Instagram</div>
      </div>
      <div className={style.footerCont_text}>
        <div>Enim sem</div>
        <div>Viverra velit</div>
        <div>Non sit</div>
        <div>Egestas neque</div>
        <div>Egestas neque</div>
      </div>
      <div className={style.footerCont_text}>
        <div>Enim sem</div>
        <div>Viverra velit</div>
        <div>Non sit</div>
        <div>Egestas neque</div>
        <div>Egestas neque</div>
      </div>
      <div className={style.footerCont_text}>
        <div>Commodo quis vestibulum convallis eget adipiscing id diam ut purus.</div>
        <div>Sodales amet fringilla quis elit sapien egestas iaculis.</div>
        <div>Etiam pellentesque non at sed magna id potenti.</div>
        <div>Aliquam dapibus volutpat egestas arcu.</div>
        <div>Dolor adipiscing id eu mauris pharetra viverra massa sagittis eget.</div>
      </div>
    </div>
  )
}

export default Footer
