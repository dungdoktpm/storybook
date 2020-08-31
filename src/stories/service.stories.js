import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/service',
};

export const Primary = () => {
  return /* html */ `
    <section class="section">
      <div class="container">
        <div class="service-item">
          <div class="service-item__img bg-overlay">
            <i class="pe-7s-arc"></i>
          </div>
          <div class="service-item__info">
            <div class="service-item__number">01</div>
            <h3 class="service-item__title">
              Contrary to popular belief
            </h3>
            <p class="service-item__desc">
             At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            </p>
          </div>
        </div>
        <div class="service-item">
          <div class="service-item__img bg-overlay">
            <i class="pe-7s-leaf"></i>
          </div>
          <div class="service-item__info">
            <div class="service-item__number">02</div>
            <h3 class="service-item__title">
            There are many variations
            </h3>
            <p class="service-item__desc">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            </p>
          </div>
        </div>
        <div class="service-item">
          <div class="service-item__img bg-overlay">
            <i class="pe-7s-rocket"></i>
          </div>
          <div class="service-item__info">
            <div class="service-item__number">03</div>
            <h3 class="service-item__title">
              generator on the Internet
            </h3>
            <p class="service-item__desc">
             At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
            </p>
          </div>
        </div>
      </div>
    </section>
  `;
};
