import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/social-media',
};

export const Primary = () => {
  return /* html */ `
    <div class="social-media">
      <ul class="social-media__list">
        <li class="social-media__item">
          <a href="#" class="social-media__link">
            <i class="lab la-facebook-f"></i>
          </a>
        </li>
        <li class="social-media__item">
          <a href="" class="social-media__link">
            <i class="lab la-twitter"></i>
          </a>
        </li>
        <li class="social-media__item">
          <a href="" class="social-media__link">
          <i class="fab fa-pinterest-p"></i>
          </a>
        </li>
        <li class="social-media__item">
          <a href="" class="social-media__link">
            <i class="lab la-twitter"></i>
          </a>
        </li>
      </ul>
    </div>

  `;
};
