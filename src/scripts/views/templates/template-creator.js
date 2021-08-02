import CONFIG from '../../globals/config';

const createRestaurantTemplate = (restaurant) => `
<div class="restaurant">
<img
  tabindex="0"
  src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}"
  alt="restaurant image ${restaurant.name}"
/>
<div class="restaurant-info">
  <p tabindex="0" class="restaurant-name">${restaurant.name}</p>
  <p tabindex="0" class="restaurant-city">City : ${restaurant.city}</p>
  <p tabindex="0" class="restaurant-rating">
    Rating : ${restaurant.rating}
  </p>
  <p tabindex="0" class="restaurant-description">
    ${restaurant.description}
  </p>
  <a href = "${`/#/detail/${restaurant.id}`}" aria-label="Detail Restaurant" class="restaurant-detail-link">
    Detail...
  </a>
</div>
</div>
`;

const renderMenus = (menus) => {
  let stringMenus = ``;
  menus.forEach((menu) => {
    stringMenus += `<li>${menu.name}</li>`;
  });
  return `<ul>${stringMenus}</ul>`;
};

const renderReviews = (reviews) => {
  let stringReviews = ``;
  reviews.forEach((review) => {
    stringReviews += `<li>${review.name} : ${review.review} (${review.date})</li>`;
  });
  return `<ul>${stringReviews}</ul>`;
};

const createRestaurantDetailTemplate = (restaurant) => `
  <div class = "restaurant-item restaurant-name"><p>${restaurant.name}</p></div>
  <div class = "restaurant-item restaurant-description"><p>${restaurant.description}</p></div>
  <div class = "restaurant-item restaurant-image">
    <img src = " ${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt ="Picture of ${restaurant.name}"></img>
  </div>
  <div class ="restaurant-item restaurant-info ">
    <button aria-label="Info restaurant button" class ="active" id="info-button">Info</button>
  </div>
  <div class = "restaurant-item restaurant-foods">
    <button aria-label="menu foods restaurant button" id="foods-button">Foods</button>
  </div>
  <div class = "restaurant-item restaurant-drinks">
    <button aria-label="menu drinks restaurant button" id="drinks-button">Drinks</button>
  </div>
  <div class = "restaurant-item restaurant-reviews">
    <button aria-label="menu reviews restaurant button" id="reviews-button">Reviews</button>
  </div>
  <div class ="restaurant-item restaurant-content">
    ${renderMenus(restaurant.menus.foods)}
  </div>
  `;

export { createRestaurantTemplate, createRestaurantDetailTemplate };