let a = 5;        // 00000000000000000000000000000101
let b = 3;        // 00000000000000000000000000000011
let c = -5;      // -00000000000000000000000000000101

// Bitwise AND
console.log(a & b); // 00000000000000000000000000000001
// expected output: 1


// Bitwise OR
console.log(a | b); // 00000000000000000000000000000111
// expected output: 7


// Bitwise XOR
console.log(a ^ b); // 00000000000000000000000000000110
// expected output: 6


a = 5;        // 00000000000000000000000000000101
b = 3;        // 00000000000000000000000000000011
// Bitwise Left Shift
console.log(a << b); // 00000000000000000000000000010100
// expected output: 40


// Bitwise Right Shift
console.log(a >> b);  //  00000000000000000000000000000001
// expected output: 0
console.log(c >> b);  // -00000000000000000000000000000010
// expected output: -1


// 1011 -> 3
//