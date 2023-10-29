let array = [1,1,2,2,3,4,5];

let removeDup = function(array){

    let dup = [...new Set(array)];
    return dup;

   }

   console.log(removeDup(array));
   
