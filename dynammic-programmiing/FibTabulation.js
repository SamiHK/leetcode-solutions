
const fibTab = (n) => {
    const table = new Array(n + 1).fill(0); // construct table with last index exactly (n)
    table[1] = 1; //apply base case

    for (let i = 0; i <= n; i++) { // create table dynamically
       table[i+1] += table[i];
       table[i+2] += table[i]
    }

    return table[n];
};

/*
time = O(n);
space = O(n);
*/

console.log(fibTab(6)) //8
console.log(fibTab(7)) //13
console.log(fibTab(8)) //21
console.log(fibTab(50)) //12586269025