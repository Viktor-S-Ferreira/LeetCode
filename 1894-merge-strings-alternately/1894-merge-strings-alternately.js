/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    var word3 = "";
    var i;
    var j= 0;
    if(word1.length > word2.length){
        for(i = 0; i< word2.length;i++){
            if(j%2 == 0){
                word3+= word1[i];
                i--;
            }else {
                word3+=word2[i];
            }
            j++;
        }
        word3+= word1.slice(i);
    }else{
        for(i = 0; i< word1.length;i++){
            if(j%2 == 0){
                word3+= word1[i];
                i--;
            }else {
                word3+=word2[i];
            }
            j++;
        }
        word3+= word2.slice(i);
    }
    return word3;
};