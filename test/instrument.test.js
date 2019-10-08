import renderInstrument from '../products/render-instruments.js';

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
    const expected = '<ul id="flute" class="woodwind" name="Silver Flute" title="The voice of the angels"><h2>Silver Flute</h2><img src="../src/instrument-images/flute.jpeg" alt="flute image"><p class="price">$1000.00<button class="button" id="flute">Add to Cart</button></p></ul>';
    
    // act
    const dom = renderInstrument(flute);
    const html = dom.outerHTML;
    
    // assert
    assert.equal(html, expected);
});