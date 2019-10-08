function renderInstruments(instrument) {
    const ul = document.createElement('ul');
    ul.setAttribute('id', instrument.id);
    ul.className = instrument.category;
    ul.setAttribute('name', instrument.name);
    ul.title = instrument.description;

    const h2 = document.createElement('h2');
    h2.textContent = instrument.name;
    ul.appendChild(h2);

    const img = document.createElement('img');
    img.src = '../src/instrument-images/' + instrument.image;
    img.alt = instrument.id + ' image';
    ul.appendChild(img);

    const p = document.createElement('p');
    p.setAttribute('price', instrument.price);
    //p.ClassName = instrument.price;

    const usd = '$' + instrument.price.toFixed(2);
    p.textContent = usd;

    const button = document.createElement('button');
    button.id = instrument.id;
    button.textContent = 'Add to Cart';
    p.appendChild(button);
    

    ul.appendChild(p);

    return ul;
}

export default renderInstruments;