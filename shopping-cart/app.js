import renderTableRow from './render-table-row.js';
import { makePrettyCurrency } from './common/utils.js';
import instruments, { cart } from '../data/instruments.js';

const tableElement = document.querySelector('tbody');

cart.forEach(instOrder => {
    const instIdFromOrder = instOrder.id;
    //store the oder id in a readable variable

    //loop through the fruits array to find the fruit that matches the fruit of this order
    for (let i=0; i < instruments.length; i++) {
        //if the id of the fruit matches the id of the order...
        if (instruments[i].id === instIdFromOrder) {
            //go ahead and render the table row
            const row = renderTableRow(instruments[i], instOrder);

            tableElement.appendChild(row);
        }
    }
/*alternative:
cart.forEach(fruitOrder => {
    fruits.forEach(fruit => {
        if (fruit.id === fruitIdFromOrder) {
            const row = renderTableRow(fruit, fruitOrder);

            tableElement.appendChild(row);
        }
    });
   
}