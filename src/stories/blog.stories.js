import { action } from '@storybook/addon-actions';
import blog01 from '../assets/images/blog1.png';
import blog02 from '../assets/images/blog2.png';
import blog03 from '../assets/images/blog3.png';
// import blog05 from '../assets/images/10.jpg';
import blog05 from '../assets/images/blog5.png';
// import blog06 from '../assets/images/11.jpg';
import blog06 from '../assets/images/blog6.png';
export default {
  title: 'Components/blog',
};

export const Blog = () => {
  return /* html */ `

  <div class="blog">
    <div class="time">
      <h3 class="time__day">01</h3>
      <h4 class="time__month">NOV</h4>
    </div>
    <div class="blog-img ">
      <div class="aspect-img bg-overlay">
        <img src=${blog01}>
      </div>
      <div class="blog-img__content">
          <h4 class="blog-img__top">lifestyel</h4>
          <h3 class="blog-img__bottom">this mistaken idea</h3>
      </div>
    <span class="icon">
      <i class="pe-7s-play"></i>
    </span>
    </div>
  </div>

  `;
};

export const Time = () => {
  return /* html */ `
    <div class="time">
      <h3 class="time__day">01</h3>
      <h4 class="time__month">NOV</h4>
    </div>
  `;
};

export const BlogList = () => {
  return /* html */ `

  <div class="blog-list container">
    <div class="row">
      <div class="col col-sm-12 col-md-6 col-lg-6">
        <!--blog-item-->
        <div class="blog">
          <div class="time">
            <h3 class="time__day">01</h3>
            <h4 class="time__month">NOV</h4>
          </div>
          <div class="blog-img ">
            <div class="aspect-img bg-overlay">
              <img src=${blog01}>
            </div>
            <div class="blog-img__content">
                <h4 class="blog-img__top">lifestyel</h4>
                <h3 class="blog-img__bottom">this mistaken idea</h3>
            </div>
            <span class="icon">
              <i class="pe-7s-play"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="col col-sm-12 col-md-6 col-lg-6">
        <!--blog-item-->
        <div class="blog">
          <div class="time">
            <h3 class="time__day">02</h3>
            <h4 class="time__month">NOV</h4>
          </div>
          <div class="blog-img ">
            <div class="aspect-img bg-overlay">
              <img src=${blog02}>
            </div>
            <div class="blog-img__content">
                <h4 class="blog-img__top">lifestyel</h4>
                <h3 class="blog-img__bottom">this mistaken idea</h3>
            </div>
            <span class="icon">
              <i class="pe-7s-play"></i>
            </span>
          </div>
        </div>
      </div>

      <div class="col col-sm-12 col-md-6 col-lg-6">
        <!--blog-item-->
        <div class="blog">
          <div class="time">
            <h3 class="time__day">10</h3>
            <h4 class="time__month">NOV</h4>
          </div>
          <div class="blog-img ">
            <div class="aspect-img bg-overlay">
              <img src=${blog03}>
            </div>
            <div class="blog-img__content">
                <h4 class="blog-img__top">lifestyel</h4>
                <h3 class="blog-img__bottom">this mistaken idea</h3>
            </div>
            <span class="icon">
              <i class="pe-7s-play"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="col col-sm-12 col-md-6 col-lg-6">
        <!--blog-item-->
        <div class="blog">
          <div class="time">
            <h3 class="time__day">15</h3>
            <h4 class="time__month">NOV</h4>
          </div>
          <div class="blog-img ">
            <div class="aspect-img bg-overlay">
              <img src=${blog01}>
            </div>
            <div class="blog-img__content">
                <h4 class="blog-img__top">lifestyel</h4>
                <h3 class="blog-img__bottom">this mistaken idea</h3>
            </div>
            <span class="icon">
              <i class="pe-7s-play"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="col col-sm-12 col-md-6 col-lg-6">
        <!--blog-item-->
        <div class="blog">
          <div class="time">
            <h3 class="time__day">10</h3>
            <h4 class="time__month">NOV</h4>
          </div>
          <div class="blog-img ">
            <div class="aspect-img bg-overlay">
              <img src=${blog05}>
            </div>
            <div class="blog-img__content">
                <h4 class="blog-img__top">lifestyel</h4>
                <h3 class="blog-img__bottom">this mistaken idea</h3>
            </div>
            <span class="icon">
              <i class="pe-7s-play"></i>
            </span>
          </div>
        </div>
      </div>
      <div class="col col-sm-12 col-md-6 col-lg-6">
        <!--blog-item-->
        <div class="blog">
          <div class="time">
            <h3 class="time__day">15</h3>
            <h4 class="time__month">NOV</h4>
          </div>
          <div class="blog-img ">
            <div class="aspect-img bg-overlay">
              <img src=${blog06}>
            </div>
            <div class="blog-img__content">
                <h4 class="blog-img__top">lifestyel</h4>
                <h3 class="blog-img__bottom">this mistaken idea</h3>
            </div>
            <span class="icon">
              <i class="pe-7s-play"></i>
            </span>
          </div>
        </div>
      </div>
    </div>

  </div>

  `;
};


