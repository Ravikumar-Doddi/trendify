import React from 'react'

import style from './Block.module.scss'
function Block({data}) {
    const {title,desc,img,mainTitle,fontSize,lineHeight,letterSpacing,marginBottom,reverse,btn} = data
  return (
    <div>
      <div className={style.prHead} style={{fontSize:fontSize,lineHeight:lineHeight,letterSpacing:letterSpacing,marginBottom:marginBottom}}>{mainTitle}</div>
      <div className={style.prMainCont} style={reverse ? {display:'flex', flexDirection:'row-reverse'} : {display:'flex', flexDirection:"row"}}>
        <div className={style.prMainCont_prCont}>
          <div className={style.prMainCont_prCont_prHead}>
           {title}
          </div>
          <div className={style.prMainCont_prCont_prDesc}>
            {desc}
          </div>
         {btn &&  <button className={style.prMainCont_prCont_packagesBtn}>Our Packages</button>}
        </div>
        <img src={img} alt="speechImg" className={style.prMainCont_speechImg} />
      </div>
    </div>
  )
}

export default Block
