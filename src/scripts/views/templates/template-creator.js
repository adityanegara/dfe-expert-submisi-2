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

const createRestaurantDetailTemplate = (restaurant) => `
<table style="width:100%">
<tr>
  <th>Nama Restoran</th>
  <th>Gambar</th>
  <th>Alamat</th>
  <th>Kota</th>
  <th>Deskripsi</th>
  <th>Menu Makanan</th>
  <th>Menu Minuman</th>
  <th>Customer Reviews</th>
</tr>
<tr>
  <td>${restaurant.name}</td>
</tr>
<tr>
  <td><img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="Picture of ${restaurant.name}"></td>
</tr>
<tr>
  <td>${restaurant.address}</td>
</tr>
<tr>
  <td>${restaurant.city}</td>
</tr>
<tr>
  <td>${restaurant.description}</td>
</tr>
<tr>
  <td>${restaurant.menus.foods}</td>
</tr>
<tr>
  <td>${restaurant.menus.drinks}</td>
</tr>
<tr>
  <td>${restaurant.customerReviews}</td>
</tr>
</table>
  `;

export { createRestaurantTemplate, createRestaurantDetailTemplate };
