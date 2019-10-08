function renderInstruments(instrument) {
    const li = document.createElement('li');
    //li.setAttribute('id', instrument.id);
    li.className = instrument.category;
    //li.setAttribute('name', instrument.name);
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

    const usd = '$' + instrument.price.toFixed(2);
    p.textContent = usd;

    const button = document.createElement('button');
    button.id = instrument.id;
    button.textContent = 'Add to Cart';
    p.appendChild(button);
    

    li.appendChild(p);

    return li;
}

export default renderInstruments;