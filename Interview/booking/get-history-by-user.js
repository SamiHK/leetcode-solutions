
const mostPopularSequence = (logs, k) => {

    let res = createUserVisitsSequence(createUserVisitsLogs(logs), k);
    return res.maxCombination;

};

// O(n), O(1) -> since the original logs array is transformed 
const createUserVisitsLogs = (logs) => {

    let visitsMap = new Map();
    logs.forEach( e => {
        if(visitsMap.has(String(e.user))){
            visitsMap.set(String(e.user), [...visitsMap.get(String(e.user)), e.page ]);
        } else {
            visitsMap.set(String(e.user), [e.page]);
        }
    });

    return visitsMap;
};

// O(x * p), 
const createUserVisitsSequence = (userVisits, k) => {

    let res = { maxCombination: "", maxValue: 0 };
    let memo = {};
    
    for (const [userId, pages] of userVisits.entries()) {// users = x, O(x)
        for(let i = 0; i < pages.length - k + 1; i++) { // pages = p, O(p)
            
            const combination = pages.slice(i, i+k).join('');
            memo[combination] = (memo[combination]) ?  (memo[combination]) + 1 : 1;
            
            if (memo[combination] > res.maxValue) {
                res.maxCombination = combination;
                res.maxValue = memo[combination];
            }
        }
    }

    return res;
};




const logs = [
    { 'user': '1', 'page': 'A'},
    { 'user': '2', 'page': 'B'},
    { 'user': '1', 'page': 'B'},
    { 'user': '1', 'page': 'D'},
    { 'user': '2', 'page': 'A'},
    { 'user': '3', 'page': 'B'},
    { 'user': '3', 'page': 'D'},
    { 'user': '1', 'page': 'C'},
    { 'user': '3', 'page': 'C'},
    { 'user': '1', 'page': 'C'},
    { 'user': '2', 'page': 'C'},
    { 'user': '3', 'page': 'B'},
    { 'user': '1', 'page': 'A'},
    { 'user': '3', 'page': 'C'}
];

const k = 3;

console.log(mostPopularSequence(logs, k));

// We need to find the sequence of pages of length 3, that is the most popular.
// ex:
// user 1 visits: A, B, D, C, C, A
// user 2 visits: B, A, C
// user 3 visits: B, D, C, B, C

// Possible consecutive sequences:
// ABD, BDC, DCC, CCA, 
// BAC, 
// BDC, DCB, CBC
// The most popular is BDC, since user 1 and user 3 visit that sequence

// Time complexity: O (n) + O(x * p)
// Memory complexity: O(1)