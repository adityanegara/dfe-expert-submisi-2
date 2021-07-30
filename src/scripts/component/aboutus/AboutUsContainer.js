class AboutUsContainer extends HTMLElement {
  connectedCallback() {
    this.illustration = this.getAttribute('illustration') || null;
    this.text1 = this.getAttribute('text1') || null;
    this.text2 = this.getAttribute('text2') || null;
    this.render();
  }

  render() {
    this.innerHTML = `
        <div class="container">
            <div class="item illustrations">
                <img src="${this.illustration}" alt="" />
            </div>
            <div class="item text1">
                <h2>${this.text1}</h2>
            </div>
            <div class="item text2">
                <p>
                    ${this.text2}
                </p>
            </div>
        </div>`;
  }
}

customElements.define('aboutus-container', AboutUsContainer);
