import getId from "../utils/getId";

class CartItem {
  static #all = []

  constructor(ShoppingCartClass, cartId, name, price) {
    this.id = getId();
    this.cartId = cartId;
    this.name = name;
    this.price = price;
    this.ShoppingCartClass = ShoppingCartClass;
    CartItem.#all.push(this);
  }
  getShoppingCart() {
    return this.ShoppingCartClass.findBy(this.cartId);
  }
  static findById(id) {
    CartItem.#all.find((item) => item.id === id);
  }
  static list() {
    return [...CartItem.#all];
  }
}

export default CartItem;