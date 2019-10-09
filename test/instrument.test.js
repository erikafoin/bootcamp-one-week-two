import renderInstrument from '../products/render-instruments.js';
import renderTableRow from '../shopping-cart/render-table-row.js';
import instruments from '../data/instruments.js';
import { findById } from '../common/utils.js';

const test = QUnit.test;

QUnit.module('Render Instrument, render Table Row');

test('renders an instrument', assert => {

    const flute = {
        id: 'flute',
        name: 'Silver Flute',
        image: 'flute.png',
        description: 'The voice of the angels',
        category: 'woodwind',
        price: 1000.00,
    };
    const expected = '<li id="flute" class="woodwind" name="Silver Flute" title="The voice of the angels"><h2>Silver Flute</h2><img src="flute.png" alt="flute image"><p class="price">$1000.00<button id="flute">Add to Cart</button></p></li>';
    
    const dom = renderInstrument(flute);
    const html = dom.outerHTML;
    
    assert.equal(html, expected);
});


test('renders a table row', assert => {

    const lineItem = {
        id: 'flute',
        quantity: 2,
    };
    
    const flute = findById(instruments, lineItem.id);
    const expected = '<tr><td class="align-left">Silver Flute</td><td></td><td>$1,000.00</td><td class="line-item-total">$2,000.00</td></tr>';
    
    const instElementTr = renderTableRow(lineItem, flute);
    const stringHtmlOfInstElement = instElementTr.outerHTML;
    
    assert.deepEqual(stringHtmlOfInstElement, expected);
});
