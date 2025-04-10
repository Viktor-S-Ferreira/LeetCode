/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let aux = new Array();
    k = k%(nums.length);
    //aux = nums.splice(nums.length - k,k);
    for(let i = 0; i < k; i++){
        aux[i] = nums[nums.length - k + i];
        //console.log(aux);
        //nums.unshift(aux[i]);
        //console.log(nums);
    }
    let aux2 = [];
    for(let i = 0; i < nums.length; i++){
        if(i < k){
            aux2[i] = aux[i];
        } else {
            aux2[i] = nums[i-k];
        }
    }
    for(let i = 0; i < nums.length; i++){
        nums[i] = aux2[i];
    }
    
};