import renderInstrument from '../products/render-fruit.js';

const test = QUnit.test;

QUnit.module('Render Instrument');

test('renders an instrument', assert => {
    // arrange
    const flute = {
        id: 'flute',
        name: 'Silver Flute',
        image: 'flute.png',
        description: 'The voice of the angels',
        category: 'woodwind',
        price: 1000.00,
        cost: 550.00
    };
    const expected = '<li class="tree-fruit" title="A sweet, delicious, forbidden-to-some treat"><h3>Red Apple</h3><img src="../assets/apple.png" alt="Red Apple image"><p class="price">$1.00<button value="apple">Add</button></p></li>';
    
    // act
    const dom = renderFruit(apple);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);