import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/form',
};

export const ReplyForm = () => {
  return /* html */ `
  <div class="container">
    <form action="" method="post" class="form-reply">
      <div class="form__title">
          LEAVE A REPLY
      </div>
      <div class="form__main">
        <div class="group-field">
          <label for="">Your name</label>
          <input type="text" name="" id="">
        </div>
        <div class="group-field">
          <label for="">Your email</label>
          <input type="text" name="" id="">
        </div>
        <div class="group-field">
          <label for="">Message</label>
          <textarea name="" id="" cols="30" rows="6"></textarea>
        </div>
        <div class="group-field">
          <label for=""></label>
          <button class="btn btn-submit">SUBMIT</button>
        </div>
      </div>
    </form>
  </div>

  `;
};

export const ContacForm = () => {
  return /* html */ `
  <div style="font-size: 20px; font-weight:bold">
    Contact form
  </div>
  <section class="section contact-info">
    <form>
      <ul>
        <li><a href="">Your Name</a></li>
        <li><a href="">Your Email</a></li>
        <li><a href="">Message</a></li>
      </ul>
    </form>
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
