import instruments from '../data/instruments.js';
import cart from '../data/cart.js';
import { findById, calcLineItem, calcOrderItem } from '../common/utils.js';
const test = QUnit.test;

QUnit.module('Utilities');

test('find product by id', assert => {
    //arrange
    const id = 'flute';
    const expected = 'flute';
    
    // act
    const foundInst = findById(instruments, id);
    
    // assert
    assert.ok(foundInst);
    assert.equal(foundInst.name, expected);
});

test('find product by id returns null if not found', assert => {
    // arrange
    const id = 'not found';
    const expected = null;

    // act
    const foundInst = findById(instruments, id);

    // assert
    assert.equal(foundInst, expected);
});

test('calculate line total', assert => {
    // arrange
    const quantity = 2;
    const price = 1000;
    const expected = 2000;
      
    // act
    const total = calcLineItem(quantity, price);
    
    // assert
    assert.equal(total, expected);
});

test('calculate order item', assert => {
    //arrange
    const expected = 2000.00;

    //act
    const orderTotal = calcOrderItem(cart, instruments);

    //assert
    assert.equal(orderTotal, expected);
});
