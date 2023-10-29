let arr1 = [1, 4, 7, 9];
let arr2 = [8, 5, 3, 2];
let arr3 = arr1.concat(arr2);
let medianof2Arr = function(arr3) {
    var concat = arr3;
    concat = concat.sort(
        function (a, b) { return a - b });
  
   
    var length = concat.length;
  
    if (length % 2 == 1) {
  
        (concat[(length / 2) - .5])
        return concat[(length / 2) - .5]
  
    }
    else {
          (concat[length / 2] 
            + concat[(length / 2) - 1]) / 2;
              
        return (concat[length / 2] 
            + concat[(length / 2) - 1]) / 2;
    }
}
  
console.log(medianof2Arr(arr3));
