let array = [1, 2, 5, 7, 9];

function mapping(array, cb) {
    let newArray = [];
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        newArray[i] = cb(sum, i, array);
        sum = sum+array[i];
    

       
    
    }
    return newArray;
}

let result = mapping(array, function (sum, index, array) {
    
    console.log(sum + array[index]);
   

});
