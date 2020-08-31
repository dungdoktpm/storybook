import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/contact-info',
};

export const Primary = () => {
  return /* html */ `
  <section class="section contact-info">
    <form></form>
    <div class="row">
      <div class="col-12 col-md-6 left">
        <img src="https://picsum.photos/635/477" alt="">
        <div class="logo">
          <span class="logo__text-first">B</span>
          M.
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="contact-info__main">
          <h3 class="contact-info__title">
            CONTACT INFO
          </h3>
          <p class="contact-info__desc">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Molestias inventore eius ducimus repellat soluta possimus

          </p>
          <div class="group-info address">
            <span class="icon--contact-info">
              <i class="pe-7s-map-marker"></i>
            </span>
            <div class="group-info__main">
              <h3 class="group-info__title">
                ADDRESS
              </h3>
              <p class="group-info__desc">
                121 King Street, Melbourne Victoria 3000 Australia
              </p>
            </div>
          </div>
          <div class="group-info address">
            <span class="icon--contact-info">
              <i class="pe-7s-mail"></i>
            </span>
            <div class="group-info__main">
              <h3 class="group-info__title">
                EMAIL
              </h3>
              <p class="group-info__desc">
                bowman@email.com
              </p>
            </div>
          </div>
          <div class="group-info address">
            <span class="icon--contact-info">
              <i class="pe-7s-phone"></i>
            </span>
            <div class="group-info__main">
              <h3 class="group-info__title">
                CALL ME
              </h3>
              <p class="group-info__desc">
                +98 76543210 or +123 4567890
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  `;
};
