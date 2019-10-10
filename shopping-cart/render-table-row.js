
import { toUSD } from '../common/utils.js';

function renderTableRow(lineItem, instrument) {
    const tr = document.createElement('tr');

    const nameCell = document.createElement('td');
    nameCell.className = 'align-left';
    nameCell.textContent = instrument.name;
    tr.appendChild(nameCell);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = lineItem.quantity;
    tr.appendChild(quantityCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = toUSD(instrument.price);
    tr.appendChild(priceCell);

    const totalCell = document.createElement('td');
    totalCell.className = 'line-item-total';
    const total = lineItem.quantity * instrument.price;
    totalCell.textContent = toUSD(total);
    tr.appendChild(totalCell);

    return tr;
}

export default renderTableRow;
