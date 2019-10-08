function renderInstruments(instrument) {
    const ul = document.createElement('ul');
    ul.name = instrument.id;
    ul.className = instrument.category;
    ul.title = instrument.description;

    const h2 = document.createElement('h2');
    h2.textContent = instrument.name;
    ul.appendChild(h2);

    const img = document.createElement('img');
    img.src = '../src/instrument-images/' + instrument.image;
    img.alt = instrument.name + ' image';
    ul.appendChild(img);

    const p = document.createElement('p');
    p.ClassName = 'price';

    const usd = '$' + instrument.price.toFixed(2);
    p.textContent = usd;

    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.value = instrument.name;
    p.appendChild(button);

    ul.appendChild(p);

    return ul;
}

export default renderInstruments;