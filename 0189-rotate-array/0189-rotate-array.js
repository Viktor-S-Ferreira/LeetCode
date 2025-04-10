/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let aux = new Array();
    k = k%(nums.length);
    aux = nums.splice(nums.length - k,k);
    //console.log(aux);
    for(let i = 0; i < k; i++){
        //nums.unshift(nums.pop());
        //console.log("aux[k-i] = " + aux[k-i-1]);
        nums.unshift(aux[k-i-1]);
    }
    
};