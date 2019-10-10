import instruments from '../data/instruments.js';
import { findById, calcOrderTotal, toUSD } from '../common/utils.js';
import renderTableRow from './render-table-row.js';


const tbody = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');
const placeOrderButton = document.getElementById('place-order');

const json = localStorage.getItem('cart');
let cart;
if (json) {
    cart = JSON.parse(localStorage.getItem('cart'));
}
else {
    cart = [];
}

for (let i = 0; i < cart.length; i++) {
    const lineItem = cart[i];
    const instrument = findById(instruments, lineItem.id);
    const dom = renderTableRow(lineItem, instrument);

    tbody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, instruments);
orderTotalCell.textContent = toUSD(orderTotal);

if (cart.length === 0) {
    placeOrderButton.disabled = true;
}
else {
    placeOrderButton.addEventListener('click', () => {
        localStorage.removeItem('cart');
        alert('Order placed:\n' + JSON.stringify(cart, true, 2));
        window.location = '../';
    });
}

export default cart;