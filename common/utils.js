
export function findById(instruments, id) {
    for (let i = 0; i < instruments.length; i++) {
        const instruments = instruments[i];

        if (instruments.id === id) {
            return instruments;
        }
    }
    return null;
}

export function toUSD(number) {
    return number.toLocaleString('en-US', { 
        style: 'currency', 
        currency: 'USD' 
    });
}

export function calcLineTotal(quantity, price) {
    const amount = quantity * price;
    return roundCurrency(amount);
}

function roundCurrency(amount) {
    return Math.round(amount * 100) / 100;
}

export function calcOrderTotal(cart, instruments) {
    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const instrument = findById(instruments, lineItem.id);
        const lineTotal = calcLineTotal(lineItem.quantity, instrument.price);
        orderTotal += lineTotal;
    }

    return roundCurrency(orderTotal);
}
