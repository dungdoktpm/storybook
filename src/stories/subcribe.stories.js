import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/subcribe',
};

export const Primary = () => {
  return /* html */ `
    <section class="subcribe">
      <div class="row">
        <div class="col-sm-12 col-6">
          <div class="sub__left">
            <!--<img src="./assets/images/subcribe.jpg" alt="">-->
            <img src="https://images.pexels.com/photos/3553903/pexels-photo-3553903.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="">

          </div>
        </div>
        <div class="col-sm-12 col-6">
          <div class="sub__right">
            <h3 class="sub__title">
              I’m <span>Ralph Bowman. <span>
            </h3>
            <p class="sub__desc">
            "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis
            praesentium voluptatum deleniti atque corrupti quos dolores et quas
            molestias excepturi sint occaecati cupiditate non provident, similique sunt
            in culpa qui officia deserunt mollitia animi”
            </p>
            <form>
              <input />
            </form>
          </div>
        </div>
      </div>
    </section>
  `;
};
