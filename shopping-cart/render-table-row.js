
import { toUSD } from '../common/utils.js';

function renderTableRow(tableRow, instrument) {
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






// export default () => {

//     const tableRow = document.createElement('tr');

//     const columnOne = makeTd(instrument.name);
//     const columnTwo = makeTd(order.quantity);
//     const columnThree = makeTd(instrument.price);
//     const totalPrice = order.quantity * instrument.price;
//     const prettyPrice = totalPrice.toLocaleString(`en-US`, {
//         style: `currency`, 
//         currency: `USD`,
//     });
//     const prettyTotal = instrument.price.toLocaleString(`en-US`, {
//         style: `currency`, 
//         currency: `USD`,
//     });
//     constPrettyTotal = totalPrice.toLocaleString(`en-US`, {
//         style: `currency`, 
//         currency: `USD`,
//     });
//     const columnFour = makeTd(prettyTotal);
//     const makePrettyCurrency = (number) => number.toLocaleString(`en-US`, {
//         style: `currency`, 
//         currency: `USD`,
//     });

//     TableRow.appendChild(columnOne);
//     TableRow.appendChild(columnTwo);
//     TableRow.appendChild(columnThree);
//     TableRow.appendChild(columnFour);

//     return tableRow;

// }

//    //return {
//      //   outerHTML: 'some string'
//     //};
