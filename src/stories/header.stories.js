export default {
  title: 'Components/header',
};

export const Primary = () => {
  return /* html */ `
  <div class="container">
    <header class="header">
      <div class="logo">
        <span class="logo__text-first">B</span>M.
      </div>
    <span class="nav-bar">

    </span>
      <div class="menu">
        <ul class="menu__list">
          <li class="menu__item"><a href="#" class="menu__link">Home</a></li>
          <li class="menu__item"><a href="#" class="menu__link">About</a></li>
          <li class="menu__item"><a href="#" class="menu__link">Portfolio</a></li>
          <li class="menu__item"><a href="#" class="menu__link">Blog</a></li>
          <li class="menu__item"><a href="#" class="menu__link">Contact</a></li>
        </ul>
        <form class="search isHidden">
          <input type="text" name="" id="" placeholder="Search" class="isHidden">
          <button class="btn btn-search">
            <i class="las la-search"></i>
          </button>
        </form>
      </div>
    </header>
  </div>


  `;
};
