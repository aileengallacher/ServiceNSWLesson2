//
//  Using full loop & charAt method = returns the character at the specified index in a string.
//  index of the first character is 0 (zero base index), characters in the word is countries.length
//  uses strict equality operator === as MUST start with "A"
//
let countries = ["Australia","America","Fiji", "Philippines", "Africa"] ;
 
for (let i = 0; i < countries.length; i ++) {
 if (countries[i].charAt(0) === 'A') {
 console.log(countries[i]);
 }
}