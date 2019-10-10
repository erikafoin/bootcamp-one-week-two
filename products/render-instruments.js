import { findById } from '../common/utils.js';
import { toUSD } from '../common/utils.js';

const emptyCart = [];
export const CART_KEY = 'cart';

let json = localStorage.getItem('cart');
let cart;
if (json) {
    cart = JSON.parse(json);
}
else {
    emptyCart;
}

const retrieveCart = () => JSON.parse(localStorage.getItem(cart));

const instrument = instrument.id;

let lineItem = findById('cart', instrument.id);

if (!lineItem) {
    lineItem = {
        id: instrument.id,
        quantity: 1
    };

    cart.push(lineItem);
}
else {
    lineItem.quantity++;
}

const fullCart = () => JSON.stringify(localStorage.setItem)

function renderInstruments(instrument) {
    const li = document.createElement('li');
    li.setAttribute('id', instrument.id);
    li.className = instrument.category;
    li.setAttribute('name', instrument.name);
    li.title = instrument.description;

    const h2 = document.createElement('h2');
    h2.textContent = instrument.name;
    li.appendChild(h2);

    const img = document.createElement('img');
    img.src = instrument.image;
    img.alt = instrument.id + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = '$' + instrument.price.toFixed(2);
    p.textContent = usd;

    const button = document.createElement('button');
    button.id = instrument.id;
    button.textContent = 'Add to Cart';
    p.appendChild(button);
    

    li.appendChild(p);

    return li;
}

export default renderInstruments;