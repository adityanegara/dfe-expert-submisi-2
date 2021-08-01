import DrawerInitiator from '../utils/drawer_initiator';

class App {
  constructor({ navElement, navLinksElement, burgerElement }) {
    console.log(burgerElement);
    this._navElement = navElement;
    this._navLinksElement = navLinksElement;
    this._burgerElement = burgerElement;
    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      navElement: this._navElement,
      navLinksElement: this._navLinksElement,
      burgerElement: this._burgerElement,
    });
  }
}

export default App;
