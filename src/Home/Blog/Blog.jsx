import React from "react";
import style from "./Blog.module.scss";
import blog1 from "../../assets/blog1.png";
import blog2 from "../../assets/blog2.png";
import blog3 from "../../assets/blog3.png";

function Blog() {
  return (
    <div className={style.blogCont}>
      <div className={style.blogCont_head}>Our Blog</div>
      <div className={style.blogCont_desc}>
        Stay up to date with the latest trends and insights in web3 marketing by
        reading our blog. Our team of experts share their knowledge and
        experience on a wide range of topics to help you understand the
        decentralized market better.
      </div>

      <div className={style.blogCont_main}>
      <div className={style.blogCont_picCont}>
        <img src={blog1} alt="blogImg"/>
        <div className={style.blogCont_picCont_descCont}>
        <div className={style.blogCont_picCont_descCont_date}>12 june 2022</div>
        <div className={style.blogCont_picCont_descCont_head}>Praesent purus convallis egestas scelerisque</div>
        <div className={style.blogCont_picCont_descCont_desc}>
          Blandit at sed quis sapien sit lacinia ornare. Ultrices vitae mi
          vulputate dignissim euismod ut cras arcu.
        </div>
        </div>
      </div>

      <div className={style.blogCont_picCont}>
        <img src={blog2} alt="blogImg"/>
        <div className={style.blogCont_picCont_descCont}>
        <div className={style.blogCont_picCont_descCont_date}>12 june 2022</div>
        <div className={style.blogCont_picCont_descCont_head}>Praesent purus convallis egestas scelerisque</div>
        <div className={style.blogCont_picCont_descCont_desc}>
          Blandit at sed quis sapien sit lacinia ornare. Ultrices vitae mi
          vulputate dignissim euismod ut cras arcu.
        </div>
        </div>
      </div>

      <div className={style.blogCont_picCont}>
        <img src={blog3} alt="blogImg"/>
        <div className={style.blogCont_picCont_descCont}>
        <div className={style.blogCont_picCont_descCont_date}>12 june 2022</div>
        <div className={style.blogCont_picCont_descCont_head}>Praesent purus convallis egestas scelerisque</div>
        <div className={style.blogCont_picCont_descCont_desc}>
          Blandit at sed quis sapien sit lacinia ornare. Ultrices vitae mi
          vulputate dignissim euismod ut cras arcu.
        </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Blog;
