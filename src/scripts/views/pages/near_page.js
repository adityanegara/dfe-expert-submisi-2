import RestaurantSource from '../../data/restaurants-soruce';
import { createRestaurantTemplate } from '../templates/template-creator';

const NearPage = {
  async render() {
    return `<h3 tabindex="0">Restaurants Near You</h3>
            <div class="restaurants-container">
            </div>`;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    const restaurantsContainer = document.querySelector('.restaurants-container');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantTemplate(restaurant);
    });
  },
};

export default NearPage;
