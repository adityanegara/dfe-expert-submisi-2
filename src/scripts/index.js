import 'regenerator-runtime';
import '../styles/style.scss';
import './component/navbar/navbar-list';
import './component/hero/HeroContainer';
import './component/aboutus/AboutUsContainer';
import links from './component/navbar/navbar-links';
import navSlide from './utils/navbar_animation';

const renderNavbar = (navbarLinks) => {
  const navbarContainer = document.getElementById('nav-container');
  const navbarListElement = document.createElement('navbar-list');
  navbarListElement.navbarLinks = navbarLinks;
  console.log(navbarListElement);
  navbarContainer.appendChild(navbarListElement);
};

renderNavbar(links);
navSlide();
