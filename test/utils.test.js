import instruments from '../data/instruments.js';
import cart from '../data/cart.js';
import { findById, calcOrderTotal, calcLineTotal } from '../common/utils.js';
const test = QUnit.test;

QUnit.module('Utilities');

test('find product by id', assert => {

    const id = 'flute';
    const expected = 'Silver Flute';
    
    const foundInst = findById(instruments, id);
    
    assert.equal(foundInst.name, expected);
});

test('find product by id returns null if not found', assert => {

    const id = 'not found';
    const expected = null;

    const foundInst = findById(instruments, id);

    assert.equal(foundInst, expected);
});

test('calculate line total', assert => {

    const quantity = 2;
    const price = 1000;
    const expected = 2000;
      
    const total = calcLineTotal(quantity, price);
    
    assert.equal(total, expected);
});

test('calculate order item', assert => {

    const expected = 9500.00;

    const orderTotal = calcOrderTotal(cart, instruments);

    assert.equal(orderTotal, expected);
});
