import renderInstrument from '../products/render-instruments.js';
import renderTableRow from '../shopping-cart/render-table-row.js';

const test = QUnit.test;

QUnit.module('Render Instrument');

test('renders an instrument', assert => {
    // arrange
    const flute = {
        id: 'flute',
        name: 'Silver Flute',
        image: 'flute.jpeg',
        description: 'The voice of the angels',
        category: 'woodwind',
        price: 1000.00,
    };
    const expected = '<li id="flute" class="woodwind" name="Silver Flute" title="The voice of the angels"><h2>Silver Flute</h2><img src="flute.jpeg" alt="flute image"><p class="price">$1000.00<button id="flute">Add to Cart</button></p></li>';
    
    // act
    const dom = renderInstrument(flute);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});


test('renders a table row', assert => {
    // arrange
    const flute = {
        id: 'flute',
        name: 'Silver Flute',
        image: 'flute.jpeg',
        description: 'The voice of the angels',
        category: 'woodwind',
        price: 1000.00,
    };
    
    const fluteOrder = {
        id: flute,
        quantity: 2,
    };

    const expected = '<tr><td>flute</td><td>2</td><td>$1000</td><td>$2000</td></tr>';
    
    // act
    const instElementTr = renderTableRow(flute, fluteOrder);
    const stringHtmlOfInstElement = instElementTr.outerHtml;
    
    // assert
    assert.equal(stringHtmlOfInstElement, expected);
});

/*test('renders a table row', assert => {
    // arrange
    const flute = {
        id: 'flute',
        name: 'Silver Flute',
        image: 'flute.jpeg',
        description: 'The voice of the angels',
        category: 'woodwind',
        price: 1000.00,
    };
    
    const fluteOrder = {
        id: flute,
        quantity: 2,
    };

    const expected = '<tr><td>flute</td><td>2</td><td>$1000</td><td>$2000</td></tr>';
    
    // act
    const instElementTr = renderTableRow(flute, fluteOrder);
    const stringHtmlOfInstElement = instElementTr.outerHtml;
    
    // assert
    assert.equal(stringHtmlOfInstElement, expected);
});