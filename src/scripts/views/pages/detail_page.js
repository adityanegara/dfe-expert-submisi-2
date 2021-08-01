import UrlParser from '../../routes/url-parser';
import RestaurantSource from '../../data/restaurants-soruce';

const DetailPage = {
  async render() {
    return `<h2>Detail Restaurant</h2>`;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantSource.detailRestaurant(url.id);
    console.log(restaurant);
  },
};

export default DetailPage;
