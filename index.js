// Q123
//this function iterates through a string and logs eacg character until it fou
function logCharacters(str) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (vowels.includes(char)) {
            console.log(char);
        }
    }
}
logCharacters('hello'); // logs 'e', 'o'
