import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/banner',
};

export const Primary = () => {
  return /* html */ `
  <div class="container">
    <div class="banner">
    <div class="bg">
    <h3 class="banner__title">Blog</h3>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="#">Home </a></li>
          <li class="breadcrumb-item active" aria-current="page">Blog</li>
        </ol>
      </nav>
    </div>
    </div>

  </div>

  `;
};
