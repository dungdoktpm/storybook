import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/footer',
};

export const Primary = () => {
  return /* html */ `
  <div class="container">
    <footer class="footer">
      <div class="bg">
        <div class="footer__content">
        <div class="logo logo--style01">
          <span class="logo__text-first">B</span> M.
        </div>

        <div class="menu menu--style01">
          <ul class="menu__list">
            <li class="menu__item">
              <a href="#" class="menu__link">Home</a>
            </li>
            <li class="menu__item">
              <a href="#" class="menu__link">About</a>
            </li>
            <li class="menu__item">
              <a href="#" class="menu__link">Portfolio</a>
            </li>
            <li class="menu__item">
              <a href="#" class="menu__link">Blog</a>
            </li>
            <li class="menu__item">
                <a href="#" class="menu__link">Contact</a>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>


  </footer>
</div>
  `;
};
