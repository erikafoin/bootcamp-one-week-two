import instrumentList from '../data/instruments.js';
import renderInstruments from './render-instruments.js';

const instList = document.getElementById('instruments');

for (let i = 0; i < instrumentList.length; i++) {
    const instrument = instrumentList[i];
    const dom = renderInstruments(instrument);
    instList.appendChild(dom);
}