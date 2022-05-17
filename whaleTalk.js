// translate an english phrase into whale speak 
// Rules:
// everything turns into a vowel: a, e, i, o, u
// The u's and e's are automatically doubled

// Step 1. 
var input = 'Prepare to die.'

// Step 2.
const vowels = ['a', 'e', 'i', 'o', 'u']

// Step 3.
var resultArray = []

// Step 4 - 9
for (let index = 0; index < input.length; index++) {
    const elementInput = input[index];
    // console.log(input.length);

    for (let index = 0; index < vowels.length; index++) {
        const elementVowels = vowels[index];
        // console.log(index);
        if (input[index] === elementVowels) {
            resultArray.push(elementVowels)
            console.log(elementVowels)
        }
        // Step 10 - 11
        if (input[index] === 'e' || 'u') {
            resultArray.push(input[index])
        }
    }
// Step 12
console.log(resultArray);

const resultsString = resultArray.join().toUpperCase();

}