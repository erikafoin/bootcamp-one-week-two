import cart from '../data/cart.js';
import instruments from '../data/instruments.js';
import { calcOrderTotal, toUSD } from '../common/utils.js';
import renderTableRow from './render-table-row.js';

const tableElement = document.querySelector('tbody');
const orderTotalCell = document.getElementById('order-total-cell');

cart.forEach(instOrder => {
    const instIdFromOrder = instOrder.id;
    
    for (let i = 0; i < instruments.length; i++) {
        if (instruments[i].id === instIdFromOrder) {
            const row = renderTableRow(instruments[i], instOrder);
            tableElement.appendChild(row);
        }
    }
});

const orderTotal = calcOrderTotal(cart, instruments);
orderTotalCell.textContent = toUSD(orderTotal);

export default cart;