import instruments from '../data/instruments.js';
import renderInstruments from './render-instruments.js';

const instList = document.getElementById('instruments');

for (let i = 0; i < instruments.length; i++) {
    const instrument = instruments[i];
    const dom = renderInstruments(instrument);
    instList.appendChild(dom);
}