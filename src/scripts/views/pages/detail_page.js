import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurants-soruce';
import LikeButtonInitiator from '../../utils/like-button-initiator';
import {
  createRestaurantDetailTemplate,
  renderInfo,
  renderMenus,
  renderReviews,
} from '../templates/template-creator';

const DetailPage = {
  async render() {
    return `<div class = "restaurant-detail"></div>
            <div id="likeButtonContainer"></div>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const response = await RestaurantSource.detailRestaurant(url.id);
    const { restaurant } = response;
    const detailRestaurantContainer = document.querySelector('.restaurant-detail');
    detailRestaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);
    this._detailContent(restaurant);
    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant,
    });
  },

  _detailContent(restaurant) {
    const contentElement = document.querySelector('.restaurant-content');
    const infoButton = document.querySelector('#info-button');
    const foodsButton = document.querySelector('#foods-button');
    const drinksButton = document.querySelector('#drinks-button');
    const reviewButton = document.querySelector('#reviews-button');
    infoButton.addEventListener('click', () => {
      contentElement.innerHTML = renderInfo(restaurant);
      infoButton.classList.add('active');
      foodsButton.classList.remove('active');
      drinksButton.classList.remove('active');
      reviewButton.classList.remove('active');
    });
    foodsButton.addEventListener('click', () => {
      contentElement.innerHTML = renderMenus(restaurant.menus.foods);
      foodsButton.classList.add('active');
      infoButton.classList.remove('active');
      drinksButton.classList.remove('active');
      reviewButton.classList.remove('active');
    });
    drinksButton.addEventListener('click', () => {
      contentElement.innerHTML = renderMenus(restaurant.menus.drinks);
      drinksButton.classList.add('active');
      foodsButton.classList.remove('active');
      infoButton.classList.remove('active');
      reviewButton.classList.remove('active');
    });
    reviewButton.addEventListener('click', () => {
      contentElement.innerHTML = renderReviews(restaurant.customerReviews);
      reviewButton.classList.add('active');
      drinksButton.classList.remove('active');
      foodsButton.classList.remove('active');
      infoButton.classList.remove('active');
    });
  },
};

export default DetailPage;
