function renderInstruments(instrument) {
    const li = document.createElement('li');
    li.className = instrument.category;
    li.title = instrument.description;

    const h2 = document.createElement('h2');
    h2.textContent = instrument.name;
    li.appendChild(h2);

    const img = document.createElement('img');
    img.src = '../src/instrument-images/' + instrument.image;
    img.alt = instrument.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.ClassName = 'price';

    const usd = '$' + instrument.price.toFixed(2);
    p.textContent = usd;

    const button = document.createElement('button');
    button.textContent = 'Add to Cart';
    button.value = instrument.code;
    p.appendChild(button);

    li.appendChild(p);

    return li;
}

export default renderInstruments;