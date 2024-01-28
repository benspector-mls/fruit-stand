import getId from "../utils/getId";

class ShoppingCart {
  static #all = [];

  constructor(CartItemClass) {
    this.id = getId();
    this.CartItemClass = CartItemClass;
    ShoppingCart.#all.push(this);
  }

  static list() {
    return [...ShoppingCart.#all];
  }

  static findBy(id) {
    return ShoppingCart.#all.find((cart) => cart.id === id);
  }

  createItem(name, price) {
    return new this.CartItemClass(ShoppingCart, this.id, name, price);
  }

  getItems() {
    return this.CartItemClass.list()
      .filter((item) => item.cartId === this.id);
  }

  getTotal() {
    return this.getItems().reduce((total, item) => item.price + total, 0);
  }
}

export default ShoppingCart;