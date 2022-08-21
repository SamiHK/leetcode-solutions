/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var getSum = function(a, b) {
   while (b !== 0){
      //should take carry first
      // carry = AND then LEFT_SHIFT
      let carry = (a & b) << 1;
      
      //re-assign new `a` and `b` values
      a = a ^ b; // a = XOR and its sum
      b = carry; // if their is carry -> then carry-on
   }

   return a;
};
console.log(getSum(5,3));
console.log(getSum(-2,-1));

// Explaination
// return b == 0 ? a : getSum( a^b , (a&b) << 1);

// a = 3       0011 
// b = 5       0101

//a^b= 6       0110 
//a&b= 1       0001
//a&b<<1 = 2   0010   


// a = a^b and b = a&b >> 1
// a = 6       0110
// b = 2       0010

//a^b= 4       0100  
//a&b<<1=4     0010 <<1 = 0100


// a = a^b and b = a&b >> 1
// a = 4       0100
// b = 4       0100
//a^b= 0       0000  ------------------->>> Notice that when (a^b) is zero we get the sum as (a&b<<1)
//a&b<<1=8     0100 <<1 = 1000



