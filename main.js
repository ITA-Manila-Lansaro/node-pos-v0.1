module.exports = function main(inputs) {
//    console.log("Debug Info");
//    var expected = printReceipt(inputs)
//    return expected;

        var id = [];
        for (var x in inputs){
    //       data[y].push({Barcode: inputs[y].barcode, Name: inputs[y].Name, Unit: inputs[y].Unit, Price:inputs[y].Price});]
           var count = 0;
              for (var y in id){
                if (inputs[x].Barcode === id[y].Barcode){
                count++;
                }
              }

             if (count > 0 ){
                console.log('***<store earning no money>Receipt ***\n');
                var barcode = inputs[x].Barcode
                id.push('item001');
           }
        }

        return id;
 };

//function printReceipt(inputs){
//
////    var expected text = '***<store earning no money>Receipt ***\n';
//    var id = [];
//    for (var x in inputs){
////       data[y].push({Barcode: inputs[y].barcode, Name: inputs[y].Name, Unit: inputs[y].Unit, Price:inputs[y].Price});
//         if (id.find(inputs[x].Barcode) != ''){
//            console.log('***<store earning no money>Receipt ***\n');
//            id.push(inputs[x].Barcode);
//       }
//    }
//
//    return inputs;
//}