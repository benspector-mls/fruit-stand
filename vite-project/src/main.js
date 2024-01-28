import './style.css'
import { items } from './items.json'
import ShoppingCart from './model/ShoppingCart';
import CartItem from './model/CartItem';

const renderInventory = () => {
  const inventoryEl = document.querySelector('#inventory-list');
  items.forEach((item) => {
    const itemCard = document.createElement('div');
    itemCard.className = 'item-card';
    itemCard.dataset.name = item.item_name;
    itemCard.dataset.price = item.price;
    itemCard.innerHTML = `
      <img alt=${item.item_name} src=${item.img_url}>
      <p>${item.item_name}: $${item.price}</p>
      <button>Add To Cart</button>
    `
    inventoryEl.append(itemCard);
  });
}

const renderCart = (cart) => {
  const cartList = document.querySelector("#cart-list");
  cartList.innerHTML = '';
  cart.getItems().forEach((item) => {
    const li = document.createElement('li');
    li.innerHTML = `${item.name} $${item.price} `;
    cartList.append(li);
  })

  document.querySelector("#cart-total").textContent = `Total: $${cart.getTotal()}`;
}

const main = () => {
  const myCart = new ShoppingCart(CartItem);

  document.querySelector("#inventory-list").addEventListener('click', (e) => {
    const itemClicked = e.target.closest('.item-card');
    const { name, price } = itemClicked.dataset;
    myCart.createItem(name, Number(price));
    renderCart(myCart);
  });

  renderInventory();
}

main();