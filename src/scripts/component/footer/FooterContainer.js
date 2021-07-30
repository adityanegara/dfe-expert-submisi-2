class FooterContainer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="footer-container">
    <div class="company-name">
      <h4>ROKU</h4>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa
        laborum quidem pariatur, laudantium amet doloribus?
      </p>
    </div>
    <div class="item products">
      <p>Product</p>
      <ul>
        <li>
          <a href="">ROKU Delivery</a>
        </li>
        <li>
          <a href="">ROKU Review</a>
        </li>
        <li>
          <a href="">ROKU Dining</a>
        </li>
      </ul>
    </div>

    <div class="item social-media">
      <p>Social Media</p>
      <ul>
        <li>
          <a href="">Instagram</a>
        </li>
        <li>
          <a href="">Facebook</a>
        </li>
        <li>
          <a href="">Twitter</a>
        </li>
      </ul>
    </div>

    <div class="item contact">
      <p>Contact</p>
      <ul>
        <li>
          <a href="">New York, NY 10012</a>
        </li>

        <li>
          <a href="">info@example.com</a>
        </li>
        <li>
          <a href=""> +0123456788</a>
        </li>
      </ul>
    </div>

    <div class="item copyright">© 2021 Copyright: adityanegara</div>
  </div>`;
  }
}

customElements.define('footer-container', FooterContainer);
