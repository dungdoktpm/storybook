import { action } from '@storybook/addon-actions';
export default {
  title: 'Components/logo',
};

export const Primary = () => {
  return /* html */ `
    <div class="logo">
      <span class="logo__text-first">B</span>
      M.
    </div>
  `;
};
