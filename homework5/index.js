const findLongestWord = function (string) {
    let str = string.split(" ");
    let longest = '';
    let word = null;

    for (word of str) {
    if (longest.length < word.length){
        longest = word;
    };

    };
    return longest;
  };

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'