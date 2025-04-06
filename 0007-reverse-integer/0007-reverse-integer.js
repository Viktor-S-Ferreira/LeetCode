/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var result = 0;
   
    while (x != 0){
        result = x%10 + result*10;
        x = (x - x%10)/10;
    }
    if (result < (-(2**31)) || result > (2**31 - 1))
    {  
        return 0;
    }
    return result;
};