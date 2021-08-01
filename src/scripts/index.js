import 'regenerator-runtime';
import '../styles/style.scss';
import './component/navbar/navbar-list';
import './component/hero/HeroContainer';
import './component/aboutus/AboutUsContainer';
import './component/footer/FooterContainer';
import './component/restaurants/restaurant-list';
import restaurantsData from './component/restaurants/restaurants-data';
import links from './component/navbar/navbar-links';
import App from './views/app';

const renderNavbar = (navbarLinks) => {
  const navbarContainer = document.getElementById('nav-container');
  const navbarListElement = document.createElement('navbar-list');
  navbarListElement.navbarLinks = navbarLinks;
  navbarContainer.appendChild(navbarListElement);
  // eslint-disable-next-line no-unused-vars
  const app = new App({
    navElement: document.querySelector('.nav-links'),
    navLinksElement: document.querySelectorAll('.nav-links li'),
    burgerElement: document.querySelector('.burger'),
  });
};

const renderRestaurant = (restaurants) => {
  const restaurantContainer = document.getElementById('restaurants-container');
  const restaurantListElement = document.createElement('restaurant-list');
  restaurantListElement.restaurants = restaurants;
  restaurantContainer.appendChild(restaurantListElement);
};

renderNavbar(links);
renderRestaurant(restaurantsData);
