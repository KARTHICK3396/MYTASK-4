(function(nums, k) {
    
    for (let i = 0; i < k; i++) {
       nums.unshift(nums.pop());

     }
           console.log(nums);
  
  })([1,2,3,4,5],3)