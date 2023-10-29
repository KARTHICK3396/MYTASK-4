function isPalindrome(s)
{
    let a = s;
    s = s.split('').reverse().join('');
 
    return s == a;
}
 
let PalindromicStrings = function(arr,N)
{
    let ans = [];
 
    for (let i = 0; i < N; i++) {
 
        if (isPalindrome(arr[i])) {
 
            ans.push(arr[i]);
        }
    }
    return ans;
}
 
let arr = [ "abc", "ada", "racecar", "mom", "ever", "amma", "appa"];
let N = arr.length;
 console.log(PalindromicStrings(arr,N));