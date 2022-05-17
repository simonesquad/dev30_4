// translate an english phrase into whale speak 
// Rules:
// everything turns into a vowel: a, e, i, o, u
// The u's and e's are automatically doubled

// Step 1. 
var input = 'Prepare to die.';

// Step 2.
const vowels = ['a', 'e', 'i', 'o', 'u'];

// Step 3.
const resultArray = []

// Step 4 - 9
for (let index = 0; index < input.length; index++) {
    const letter = input[index].toLowerCase();
    // console.log(letter);

    // Step 10 - 11
    if (letter === 'e' || letter === 'u') {
        resultArray.push(letter);
    }

    for (let x = 0; x < vowels.length; x++) {
        const vowel = vowels[x];
        // console.log(letter);
        if (letter === vowel) {
            resultArray.push(letter);
            console.log(letter);
        }
    }
}

    const resultString = resultArray.join('').toUpperCase;

// Step 12
console.log(resultArray);
