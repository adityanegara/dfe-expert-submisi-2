import RestaurantSource from '../../data/restaurants-soruce';

const NearPage = {
  async render() {
    return `<h2>Restaurant Near You Page</h2>`;
  },

  // eslint-disable-next-line no-empty-function
  async afterRender() {
    const restaurants = await RestaurantSource.restaurantList();
    console.log(restaurants);
  },
};

export default NearPage;
