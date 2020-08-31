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
  title: 'Components/gallery',

};

export const Primary = () => {
  return /* html */ `
  <div class="gallery-menu">
    <div class="gallery-menu__title">
      <h3>
        Grid Creative
      </h3>
      <i class="pe-7s-keypad"></i>
    </div>
    <div class="gallery-menu__content">
      <ul class="gallery-menu__list">
        <li class="gallery-menu__item"><a href="" class="gallery-menu__link active-link">All</a></li>
        <li class="gallery-menu__item"><a href="" class="gallery-menu__link">Nature</a></li>
        <li class="gallery-menu__item"><a href="" class="gallery-menu__link">Drink & Food</a></li>
        <li class="gallery-menu__item"><a href="" class="gallery-menu__link">Garden</a></li>
        <li class="gallery-menu__item"><a href="" class="gallery-menu__link">Animator</a></li>
      </ul>
    </div>
  </div>
  `;
};
export const GalleryItem = () => {
  return /* html */ `
    <!--video-->
    <div class="gallery-item">
      <a href="" class="gallery-item__wrap">
        <div class="gallery-item__img">
            <img src="${img01}" alt="">
        </div>
        <div class="gallery-item__detail gallery-item__detail--video">
          <div class="gallery-item__text">
            <h3 class="gallery-item__title">
              DENOUNCING PLEASURE
            </h3>
            <p class="gallery-item__desc">
              Drink & Food
            </p>
          </div>
          <img src="${divider02}" alt="" class="divider--diagonal">
        </div>
      </a>
    </div>
  <!--khong video-->
    <div class="gallery-item">
      <a href="" class="gallery-item__wrap">
        <div class="gallery-item__img">
            <img src="${img02}" alt="">
        </div>
        <div class="gallery-item__detail">
          <div class="gallery-item__text">
            <h3 class="gallery-item__title">
              DENOUNCING PLEASURE
            </h3>
            <p class="gallery-item__desc">
              Drink & Food
            </p>
          </div>
          <img src="${divider02}" alt="" class="divider--diagonal">
        </div>
      </a>
    </div>
    `;
  };

export const Gallery01 = () => {
  return /* html */ `
  <section class="gallery container pt90">
    <!--menu-->
    <div class="gallery-menu">
      <div class="gallery-menu__title">
        <h3>
          Grid Creative
        </h3>
        <a href="">
          <i class="pe-7s-keypad"></i>
        </a>
      </div>
      <div class="gallery-menu__content">
        <ul class="gallery-menu__list">
          <li class="gallery-menu__item"><a href="" class="gallery-menu__link active-link">All</a></li>
          <li class="gallery-menu__item"><a href="" class="gallery-menu__link">Nature</a></li>
          <li class="gallery-menu__item"><a href="" class="gallery-menu__link">Drink & Food</a></li>
          <li class="gallery-menu__item"><a href="" class="gallery-menu__link">Garden</a></li>
          <li class="gallery-menu__item"><a href="" class="gallery-menu__link">Animator</a></li>
        </ul>
      </div>
    </div>
    <!--grid-->
  <div class="row">
    <div class="col-sm-12 col-md-4 col-lg-4">
      <div class="gallery-item">
        <a href="" class="gallery-item__wrap">
          <div class="gallery-item__img">
              <img src="${img01}" alt="">
          </div>
          <div class="gallery-item__detail gallery-item__detail--video">
            <div class="gallery-item__text">
              <h3 class="gallery-item__title">
                DENOUNCING PLEASURE
              </h3>
              <p class="gallery-item__desc">
                Drink & Food
              </p>
            </div>
            <img src="${divider02}" alt="" class="divider--diagonal">
          </div>
        </a>
      </div>
    </div>
    <div class="col-12 col-md-4 col-lg-4">
      <div class="gallery-item">
        <a href="" class="gallery-item__wrap">
          <div class="gallery-item__img">
              <img src="${img02}" alt="">
          </div>
          <div class="gallery-item__detail">
            <div class="gallery-item__text">
              <h3 class="gallery-item__title">
                DENOUNCING PLEASURE
              </h3>
              <p class="gallery-item__desc">
                Drink & Food
              </p>
            </div>
            <img src="${divider02}" alt="" class="divider--diagonal">
          </div>
        </a>
      </div>
    </div>
    <div class="col-12 col-md-4 col-lg-4">
      <div class="gallery-item">
        <a href="" class="gallery-item__wrap">
          <div class="gallery-item__img">
              <img src="${img03}" alt="">
          </div>
          <div class="gallery-item__detail">
            <div class="gallery-item__text">
              <h3 class="gallery-item__title">
                DENOUNCING PLEASURE
              </h3>
              <p class="gallery-item__desc">
                Drink & Food
              </p>
            </div>
            <img src="${divider02}" alt="" class="divider--diagonal">
          </div>
        </a>
      </div>
    </div>
    <div class="col-12 col-md-4 col-lg-4">
      <div class="gallery-item">
        <a href="" class="gallery-item__wrap">
          <div class="gallery-item__img">
              <img src="${img04}" alt="">
          </div>
          <div class="gallery-item__detail">
            <div class="gallery-item__text">
              <h3 class="gallery-item__title">
                DENOUNCING PLEASURE
              </h3>
              <p class="gallery-item__desc">
                Drink & Food
              </p>
            </div>
            <img src="${divider02}" alt="" class="divider--diagonal">
          </div>
        </a>
      </div>
    </div>
    <div class="col-12 col-md-4 col-lg-4">
      <div class="gallery-item">
        <a href="" class="gallery-item__wrap">
          <div class="gallery-item__img">
              <img src="${img05}" alt="">
          </div>
          <div class="gallery-item__detail">
            <div class="gallery-item__text">
              <h3 class="gallery-item__title">
                DENOUNCING PLEASURE
              </h3>
              <p class="gallery-item__desc">
                Drink & Food
              </p>
            </div>
            <img src="${divider02}" alt="" class="divider--diagonal">
          </div>
        </a>
      </div>
    </div>
    <div class="col-12 col-md-4 col-lg-4">
      <div class="gallery-item">
        <a href="" class="gallery-item__wrap">
          <div class="gallery-item__img">
              <img src="${img06}" alt="">
          </div>
          <div class="gallery-item__detail gallery-item__detail--video">
            <div class="gallery-item__text">
              <h3 class="gallery-item__title">
                DENOUNCING PLEASURE
              </h3>
              <p class="gallery-item__desc">
                Drink & Food
              </p>
            </div>
            <img src="${divider02}" alt="" class="divider--diagonal">
          </div>
        </a>
      </div>
    </div>
    <div class="col-12 col-md-4 col-lg-4">
      <div class="gallery-item">
        <a href="" class="gallery-item__wrap">
          <div class="gallery-item__img">
              <img src="${img07}" alt="">
          </div>
          <div class="gallery-item__detail">
            <div class="gallery-item__text">
              <h3 class="gallery-item__title">
                DENOUNCING PLEASURE
              </h3>
              <p class="gallery-item__desc">
                Drink & Food
              </p>
            </div>
            <img src="${divider02}" alt="" class="divider--diagonal">
          </div>
        </a>
      </div>
    </div>
    <div class="col-12 col-md-4 col-lg-4">
      <div class="gallery-item">
        <a href="" class="gallery-item__wrap">
          <div class="gallery-item__img">
              <img src="${img08}" alt="">
          </div>
          <div class="gallery-item__detail">
            <div class="gallery-item__text">
              <h3 class="gallery-item__title">
                DENOUNCING PLEASURE
              </h3>
              <p class="gallery-item__desc">
                Drink & Food
              </p>
            </div>
            <img src="${divider02}" alt="" class="divider--diagonal">
          </div>
        </a>
      </div>
    </div>
    <div class="col-12 col-md-4 col-lg-4">
      <div class="gallery-item">
        <a href="" class="gallery-item__wrap">
          <div class="gallery-item__img">
              <img src="${img09}" alt="">
          </div>
          <div class="gallery-item__detail">
            <div class="gallery-item__text">
              <h3 class="gallery-item__title">
                DENOUNCING PLEASURE
              </h3>
              <p class="gallery-item__desc">
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

export const Gallery02 = () => {
  return /* html */ `
  <div class="gallery gallery__style01 container pt90">
    <div class="gallery-menu gallery-menu--vertical p15">
      <div class="gallery-menu__title">
        <h3>
          Grid Creative
        </h3>
        <i class="pe-7s-keypad"></i>
      </div>
      <div class="gallery-menu__content">
        <ul class="gallery-menu__list">
          <li class="gallery-menu__item"><a href="" class="gallery-menu__link active-link">All</a></li>
          <li class="gallery-menu__item"><a href="" class="gallery-menu__link">Nature</a></li>
          <li class="gallery-menu__item"><a href="" class="gallery-menu__link">Drink & Food</a></li>
          <li class="gallery-menu__item"><a href="" class="gallery-menu__link">Garden</a></li>
          <li class="gallery-menu__item"><a href="" class="gallery-menu__link">Animator</a></li>
        </ul>
      </div>
    </div>
    <!--main-->
    <div class="row">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-8">
          <div class="gallery-item gallery-item__style01">
            <a href="" class="gallery-item__wrap">
              <div class="gallery-item__img">
                  <img src="${img01}" alt="">
              </div>
              <div class="gallery-item__detail gallery-item__detail--video">
                <div class="gallery-item__text">
                  <h3 class="gallery-item__title gallery-item__title--style01">
                    DENOUNCING PLEASURE
                  </h3>
                  <p class="gallery-item__desc gallery-item__desc--style01">
                    Drink & Food
                  </p>
                </div>
                <img src="${divider02}" alt="" class="divider--diagonal">
              </div>
            </a>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-4">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 p0">
              <div class="gallery-item">
                <a href="" class="gallery-item__wrap">
                  <div class="gallery-item__img">
                      <img src="${img02}" alt="">
                  </div>
                  <div class="gallery-item__detail">
                    <div class="gallery-item__text">
                      <h3 class="gallery-item__title">
                        DENOUNCING PLEASURE
                      </h3>
                      <p class="gallery-item__desc">
                        Drink & Food
                      </p>
                    </div>
                    <img src="${divider02}" alt="" class="divider--diagonal">
                  </div>
                </a>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12 p0">
              <div class="gallery-item">
                <a href="" class="gallery-item__wrap">
                  <div class="gallery-item__img">
                      <img src="${img03}" alt="">
                  </div>
                  <div class="gallery-item__detail">
                    <div class="gallery-item__text">
                      <h3 class="gallery-item__title">
                        DENOUNCING PLEASURE
                      </h3>
                      <p class="gallery-item__desc">
                        Drink & Food
                      </p>
                    </div>
                    <img src="${divider02}" alt="" class="divider--diagonal">
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12 col-md-4 col-lg-4">
          <div class="gallery-item">
            <a href="" class="gallery-item__wrap">
              <div class="gallery-item__img">
                  <img src="${img04}" alt="">
              </div>
              <div class="gallery-item__detail">
                <div class="gallery-item__text">
                  <h3 class="gallery-item__title">
                    DENOUNCING PLEASURE
                  </h3>
                  <p class="gallery-item__desc">
                    Drink & Food
                  </p>
                </div>
                <img src="${divider02}" alt="" class="divider--diagonal">
              </div>
            </a>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-4">
          <div class="gallery-item">
            <a href="" class="gallery-item__wrap">
              <div class="gallery-item__img">
                  <img src="${img05}" alt="">
              </div>
              <div class="gallery-item__detail">
                <div class="gallery-item__text">
                  <h3 class="gallery-item__title">
                    DENOUNCING PLEASURE
                  </h3>
                  <p class="gallery-item__desc">
                    Drink & Food
                  </p>
                </div>
                <img src="${divider02}" alt="" class="divider--diagonal">
              </div>
            </a>
          </div>
        </div>
        <div class="col-sm-12 col-md-4 col-lg-4">
          <div class="gallery-item">
            <a href="" class="gallery-item__wrap">
              <div class="gallery-item__img">
                  <img src="${img06}" alt="">
              </div>
              <div class="gallery-item__detail">
                <div class="gallery-item__text">
                  <h3 class="gallery-item__title">
                    DENOUNCING PLEASURE
                  </h3>
                  <p class="gallery-item__desc">
                    Drink & Food
                  </p>
                </div>
                <img src="${divider02}" alt="" class="divider--diagonal">
              </div>
            </a>
          </div>
        </div>
      </div>
      <div class="row row--last">
        <div class="col-sm-12 col-md-12 col-lg-8">
          <div class="gallery-item gallery-item__style01">
            <a href="" class="gallery-item__wrap">
              <div class="gallery-item__img">
                  <img src="${img07}" alt="">
              </div>
              <div class="gallery-item__detail gallery-item__detail--video">
                <div class="gallery-item__text">
                  <h3 class="gallery-item__title gallery-item__title--style01">
                    DENOUNCING PLEASURE
                  </h3>
                  <p class="gallery-item__desc gallery-item__desc--style01">
                    Drink & Food
                  </p>
                </div>
                <img src="${divider02}" alt="" class="divider--diagonal">
              </div>
            </a>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-4">
          <div class="row">
            <div class="col-sm-12 col-md-12 col-lg-12 p0">
              <div class="gallery-item">
                <a href="" class="gallery-item__wrap">
                  <div class="gallery-item__img">
                      <img src="${img08}" alt="">
                  </div>
                  <div class="gallery-item__detail gallery-item__detail--video">
                    <div class="gallery-item__text">
                      <h3 class="gallery-item__title">
                        DENOUNCING PLEASURE
                      </h3>
                      <p class="gallery-item__desc">
                        Drink & Food
                      </p>
                    </div>
                    <img src="${divider02}" alt="" class="divider--diagonal">
                  </div>
                </a>
              </div>
            </div>
            <div class="col-sm-12 col-md-12 col-lg-12 p0">
              <div class="gallery-item">
                <a href="" class="gallery-item__wrap">
                  <div class="gallery-item__img">
                      <img src="${img09}" alt="">
                  </div>
                  <div class="gallery-item__detail gallery-item__detail--video">
                    <div class="gallery-item__text">
                      <h3 class="gallery-item__title">
                        DENOUNCING PLEASURE
                      </h3>
                      <p class="gallery-item__desc">
                        Drink & Food
                      </p>
                    </div>
                    <img src="${divider02}" alt="" class="divider--diagonal">
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  `;
};
