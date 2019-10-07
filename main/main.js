var total = 0;

module.exports = function main(inputs) {
    console.log("Debug Info");
    return printReceipt(inputs);
 };



function printReceipt(inputs){
    let products = inputs;
    var receipt = '***<store earning no money>Receipt ***\n';
    var barcodes = distinctBarcode(products);

    barcodes.forEach(barcode => {
        receipt = receipt + getBodyOfReceipt(barcode, inputs);
    });

    receipt = receipt + '----------------------\n' +
                        'Total: '+total.toFixed(2)+' (yuan)\n' +
                        '**********************\n';

    return receipt;
}

function distinctBarcode (products){
    var barcodesCollection = []; 

    products.forEach(product => {
        barcodesCollection.push(product.Barcode);
    });

    return [... new Set(barcodesCollection)]; 
}

function getBodyOfReceipt(barcode, inputs){
    var name = 0;
    var quantity = 0;
    var price = 0; 
    var unit;
    var subtotal = 0;

    inputs.forEach(product => {
        if (product.Barcode === barcode){
            quantity++; 
            name = product.Name;
            unit = product.Unit; 
            price = parseInt(product.Price);
        }
    });

    if (unit === 'a') {
        unit = ''
    }else
    {
        unit = ' '+unit+'s';
    };

    subtotal = price * quantity; 
    total += subtotal;
    
    return 'Name: ' + name + 
    ', Quantity: ' + quantity + unit + 
    ', Unit price: '+ price.toFixed(2) + 
    ' (yuan), Subtotal: '+ subtotal.toFixed(2) + ' (yuan)\n'; 

}
