import 'regenerator-runtime';
import '../styles/style.scss';
import './component/navbar/navbar-list';
import './component/hero/HeroContainer';
import './component/aboutus/AboutUsContainer';
import './component/footer/FooterContainer';
import './component/restaurants/restaurant-list';
import restaurantsData from './component/restaurants/restaurants-data';
import links from './component/navbar/navbar-links';
import navSlide from './utils/navbar_animation';

const renderNavbar = (navbarLinks) => {
  const navbarContainer = document.getElementById('nav-container');
  const navbarListElement = document.createElement('navbar-list');
  navbarListElement.navbarLinks = navbarLinks;
  navbarContainer.appendChild(navbarListElement);
};

const renderRestaurant = (restaurants) => {
  const restaurantContainer = document.getElementById('restaurants-container');
  const restaurantListElement = document.createElement('restaurant-list');
  restaurantListElement.restaurants = restaurants;
  restaurantContainer.appendChild(restaurantListElement);
};

renderNavbar(links);
renderRestaurant(restaurantsData);
navSlide();
