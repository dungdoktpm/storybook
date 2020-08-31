import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/btn',
};

export const Primary = () => {
  return /* html */ `
    <button >
      Button Primary
    </button>
  `;
};

export const BntSubmit = () => {
  return /* html */ `
    <button class="btn btn-submit">SUBMIT</button>
  `;
};
