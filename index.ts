// Q123
//this function iterates through a string and logs eacg character until it fou
function logCharacters(str: string): void {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (const char of str) {
        if (vowels.includes(char)) {
            console.log(char);
        }
    }
}
logCharacters('hello'); // logs 'e', 'o'
 