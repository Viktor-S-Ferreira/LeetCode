/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    let aux = [];
    lengthOfNums = nums.length;
    k = k%(lengthOfNums);
    let aux2 = [];

    for(let i = 0; i < k; i++){
        aux[i] = nums[lengthOfNums - k + i];
        aux2[i] = aux[i];
    }
    for(let i = k; i < lengthOfNums; i++){
            aux2[i] = nums[i-k];
            nums[i-k] = aux2[i-k];
    }
    for(let i = lengthOfNums - k; i < lengthOfNums; i++){
        nums[i] = aux2[i];
    }
    
};