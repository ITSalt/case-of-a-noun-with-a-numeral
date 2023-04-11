# Glide Experimental Code Template
## case-of-a-noun-with-a-numeral
Return right word form for a digit.

```
// Test case 1
const result1 = caseForDigits(1, 'яблоко', 'яблока', 'яблок');
console.log(result1 === 'яблоко'); // expected output: true

// Test case 2
const result2 = caseForDigits(11, 'яблоко', 'яблока', 'яблок');
console.log(result2 === 'яблок'); // expected output: true

// Test case 3
const result3 = caseForDigits(21, 'яблоко', 'яблока', 'яблок');
console.log(result3 === 'яблоко'); // expected output: true

// Test case 4
const result4 = caseForDigits(114, 'яблоко', 'яблока', 'яблок');
console.log(result4 === 'яблок'); // expected output: true

// Test case 5
const result5 = caseForDigits(5, 'яблоко', 'яблока', 'яблок');
console.log(result5 === 'яблок'); // expected output: true

// Test case 6
const result6 = caseForDigits(10, 'яблоко', 'яблока', 'яблок');
console.log(result6 === 'яблок'); // expected output: true
```
