import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurants-soruce';
import { createRestaurantDetailTemplate } from '../templates/template-creator';

const DetailPage = {
  async render() {
    return `<h2>Detail Restaurant</h2>
            <div class = "restaurant-detail"></div>`;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    const detailRestaurantContainer = document.querySelector('.restaurant-detail');
    console.log(restaurant.restaurant.menus);
    detailRestaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant.restaurant);
  },
};

export default DetailPage;
