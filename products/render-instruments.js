import { findById } from '../common/utils.js';
import { toUSD } from '../common/utils.js';
export const CART_KEY = 'cart';

function renderInstruments(instrument) {
    const li = document.createElement('li');
    li.setAttribute('id', instrument.id);
    li.className = instrument.category;
    li.setAttribute('name', instrument.name);
    li.title = instrument.description;

    const h2 = document.createElement('h2');
    h2.textContent = instrument.name;
    li.appendChild(h2);

    const img = document.createElement('img');
    img.src = instrument.image;
    img.alt = instrument.id + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';
    p.textContent = toUSD(instrument.price);

    const button = document.createElement('button');
    button.id = instrument.id;
    button.textContent = 'Add to Cart';
    button.addEventListener('click', () => {
        
        let json = localStorage.getItem('cart');
        let cart;
        if (localStorage.getItem(cart)) {
            cart = JSON.parse(json);
        }
        else {
            cart = [];
        }

        let lineItem = findById(cart, instrument.id);
    
        if (!lineItem) {
            lineItem = {
                id: instrument.id,
                quantity: 1
            };
    
            cart.push(lineItem);
        }
        else {
            lineItem.quantity++;
        }
    
        localStorage.setItem('cart', JSON.stringify(cart));

        alert('1 ' + instrument.name + ' added to cart');
    });  
    
    p.appendChild(button);
    
    li.appendChild(p);

    return li;
}


export default renderInstruments;