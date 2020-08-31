import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/counter',
};

export const Primary = () => {
  return /* html */ `
    <div class="counter">
      <p class="counter__number">1052</p>
      <h3 class="counter__title">
        happy clients
      </h3>
      <hr>
    </div>
  `;
};
