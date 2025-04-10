/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let aux = new Array();
    k = k%(nums.length);
    //aux = nums.splice(nums.length - k,k);
    let aux2 = [];
    for(let i = 0; i < k; i++){
        aux[i] = nums[nums.length - k + i];
        aux2[i] = aux[i];
        //console.log(aux);
        //nums.unshift(aux[i]);
        //console.log(nums);
    }
    //console.log(aux2);
    for(let i = k; i < nums.length; i++){
            aux2[i] = nums[i-k];
    }
    for(let i = 0; i < nums.length; i++){
        nums[i] = aux2[i];
    }
    
};