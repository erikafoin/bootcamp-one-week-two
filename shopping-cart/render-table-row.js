

export default () => {

    const tableRow = document.createElement('tr');

        const columnOne = makeTd(instrument.name);
        const columnTwo = makeTd(order.quantity);
        const columnThree = makeTd(instrument.price);
        const totalPrice = order.quantity * instrument.price;
        const prettyPrice = totalPrice.toLocaleString(`en-US`, {
             style: `currency`, 
             currency: `USD`,
            });
        const prettyTotal = instrument.price.toLocaleString(`en-US`, {
            style: `currency`, 
            currency: `USD`,
           });
        constPrettyTotal = totalPrice.toLocaleString(`en-US`, {
            style: `currency`, 
            currency: `USD`,
           });
        const columnFour = makeTd(prettyTotal);
        const makePrettyCurrency = (number) => number.toLocaleString(`en-US`, {
            style: `currency`, 
            currency: `USD`,
           });

        TableRow.appendChild(columnOne);
        TableRow.appendChild(columnTwo);
        TableRow.appendChild(columnThree);
        TableRow.appendChild(columnFour);

        return tableRow;

    }

   return {
        outerHTML: 'some string'
    };
