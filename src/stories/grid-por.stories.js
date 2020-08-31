import { action } from '@storybook/addon-actions';
//import img
import divider02 from '../assets/images/divider2.png';
import img01 from '../assets/images/img01.png';
import img02 from '../assets/images/img02.png';
import img03 from '../assets/images/img03.png';
import img04 from '../assets/images/img04.png';
import img05 from '../assets/images/img05.png';
import img06 from '../assets/images/Clip.png';
import img07 from '../assets/images/img07.png';
import img08 from '../assets/images/img08.png';
import img09 from '../assets/images/img09.png';

export default {
  title: 'Components/grid-portfolio',

};

export const Primary = () => {
  return /* html */ `
  <div class="grid-menu">
    <div class="grid-menu__title">
      <h3>
        Grid Creative
      </h3>
      <i class="pe-7s-keypad"></i>
    </div>
    <div class="grid-menu__content">
      <ul class="grid-menu__list">
        <li class="grid-menu__item"><a href="" class="grid-menu__link active-link">All</a></li>
        <li class="grid-menu__item"><a href="" class="grid-menu__link">Nature</a></li>
        <li class="grid-menu__item"><a href="" class="grid-menu__link">Drink & Food</a></li>
        <li class="grid-menu__item"><a href="" class="grid-menu__link">Garden</a></li>
        <li class="grid-menu__item"><a href="" class="grid-menu__link">Animator</a></li>
      </ul>
    </div>
  </div>
  `;
};
export const GridItem = () => {
  return /* html */ `
    <!--video-->
    <div class="por-item">
      <a href="" class="por-item__wrap">
        <div class="por-item__img">
            <img src="${img01}" alt="">
        </div>
        <div class="por-item__detail por-item__detail--video">
          <div class="por-item__text">
            <h3 class="por-item__title">
              DENOUNCING PLEASURE
            </h3>
            <p class="por-item__desc">
              Drink & Food
            </p>
          </div>
          <img src="${divider02}" alt="" class="divider--diagonal">
        </div>
      </a>
    </div>
  <!--khong video-->
    <div class="por-item">
      <a href="" class="por-item__wrap">
        <div class="por-item__img">
            <img src="${img02}" alt="">
        </div>
        <div class="por-item__detail">
          <div class="por-item__text">
            <h3 class="por-item__title">
              DENOUNCING PLEASURE
            </h3>
            <p class="por-item__desc">
              Drink & Food
            </p>
          </div>
          <img src="${divider02}" alt="" class="divider--diagonal">
        </div>
      </a>
    </div>
    `;
  };

export const Grid = () => {
  return /* html */ `
  <section class="grid-por container pt90">
    <!--menu-->
    <div class="grid-menu">
      <div class="grid-menu__title">
        <h3>
          Grid Creative
        </h3>
        <a href="">
          <i class="pe-7s-keypad"></i>
        </a>
      </div>
      <div class="grid-menu__content">
        <ul class="grid-menu__list">
          <li class="grid-menu__item"><a href="" class="grid-menu__link active-link">All</a></li>
          <li class="grid-menu__item"><a href="" class="grid-menu__link">Nature</a></li>
          <li class="grid-menu__item"><a href="" class="grid-menu__link">Drink & Food</a></li>
          <li class="grid-menu__item"><a href="" class="grid-menu__link">Garden</a></li>
          <li class="grid-menu__item"><a href="" class="grid-menu__link">Animator</a></li>
        </ul>
      </div>
    </div>
    <!--grid-->
  <div class="row">
    <div class="col-sm-12 col-md-4 col-lg-4">
      <div class="por-item">
        <a href="" class="por-item__wrap">
          <div class="por-item__img">
              <img src="${img01}" alt="">
          </div>
          <div class="por-item__detail por-item__detail--video">
            <div class="por-item__text">
              <h3 class="por-item__title">
                DENOUNCING PLEASURE
              </h3>
              <p class="por-item__desc">
                Drink & Food
              </p>
            </div>
            <img src="${divider02}" alt="" class="divider--diagonal">
          </div>
        </a>
      </div>
    </div>
    <div class="col-12 col-md-4 col-lg-4">
      <div class="por-item">
        <a href="" class="por-item__wrap">
          <div class="por-item__img">
              <img src="${img02}" alt="">
          </div>
          <div class="por-item__detail">
            <div class="por-item__text">
              <h3 class="por-item__title">
                DENOUNCING PLEASURE
              </h3>
              <p class="por-item__desc">
                Drink & Food
              </p>
            </div>
            <img src="${divider02}" alt="" class="divider--diagonal">
          </div>
        </a>
      </div>
    </div>
    <div class="col-12 col-md-4 col-lg-4">
      <div class="por-item">
        <a href="" class="por-item__wrap">
          <div class="por-item__img">
              <img src="${img03}" alt="">
          </div>
          <div class="por-item__detail">
            <div class="por-item__text">
              <h3 class="por-item__title">
                DENOUNCING PLEASURE
              </h3>
              <p class="por-item__desc">
                Drink & Food
              </p>
            </div>
            <img src="${divider02}" alt="" class="divider--diagonal">
          </div>
        </a>
      </div>
    </div>
    <div class="col-12 col-md-4 col-lg-4">
      <div class="por-item">
        <a href="" class="por-item__wrap">
          <div class="por-item__img">
              <img src="${img04}" alt="">
          </div>
          <div class="por-item__detail">
            <div class="por-item__text">
              <h3 class="por-item__title">
                DENOUNCING PLEASURE
              </h3>
              <p class="por-item__desc">
                Drink & Food
              </p>
            </div>
            <img src="${divider02}" alt="" class="divider--diagonal">
          </div>
        </a>
      </div>
    </div>
    <div class="col-12 col-md-4 col-lg-4">
      <div class="por-item">
        <a href="" class="por-item__wrap">
          <div class="por-item__img">
              <img src="${img05}" alt="">
          </div>
          <div class="por-item__detail">
            <div class="por-item__text">
              <h3 class="por-item__title">
                DENOUNCING PLEASURE
              </h3>
              <p class="por-item__desc">
                Drink & Food
              </p>
            </div>
            <img src="${divider02}" alt="" class="divider--diagonal">
          </div>
        </a>
      </div>
    </div>
    <div class="col-12 col-md-4 col-lg-4">
      <div class="por-item">
        <a href="" class="por-item__wrap">
          <div class="por-item__img">
              <img src="${img06}" alt="">
          </div>
          <div class="por-item__detail por-item__detail--video">
            <div class="por-item__text">
              <h3 class="por-item__title">
                DENOUNCING PLEASURE
              </h3>
              <p class="por-item__desc">
                Drink & Food
              </p>
            </div>
            <img src="${divider02}" alt="" class="divider--diagonal">
          </div>
        </a>
      </div>
    </div>
    <div class="col-12 col-md-4 col-lg-4">
      <div class="por-item">
        <a href="" class="por-item__wrap">
          <div class="por-item__img">
              <img src="${img07}" alt="">
          </div>
          <div class="por-item__detail">
            <div class="por-item__text">
              <h3 class="por-item__title">
                DENOUNCING PLEASURE
              </h3>
              <p class="por-item__desc">
                Drink & Food
              </p>
            </div>
            <img src="${divider02}" alt="" class="divider--diagonal">
          </div>
        </a>
      </div>
    </div>
    <div class="col-12 col-md-4 col-lg-4">
      <div class="por-item">
        <a href="" class="por-item__wrap">
          <div class="por-item__img">
              <img src="${img08}" alt="">
          </div>
          <div class="por-item__detail">
            <div class="por-item__text">
              <h3 class="por-item__title">
                DENOUNCING PLEASURE
              </h3>
              <p class="por-item__desc">
                Drink & Food
              </p>
            </div>
            <img src="${divider02}" alt="" class="divider--diagonal">
          </div>
        </a>
      </div>
    </div>
    <div class="col-12 col-md-4 col-lg-4">
      <div class="por-item">
        <a href="" class="por-item__wrap">
          <div class="por-item__img">
              <img src="${img09}" alt="">
          </div>
          <div class="por-item__detail">
            <div class="por-item__text">
              <h3 class="por-item__title">
                DENOUNCING PLEASURE
              </h3>
              <p class="por-item__desc">
                Drink & Food
              </p>
            </div>
            <img src="${divider02}" alt="" class="divider--diagonal">
          </div>
        </a>
      </div>
    </div>
  </div>




  </section>
  `;
};
