// There is list of hotels and they are given in below format:
// [ hotel id, parent hotel id, no. of hotel]
// mutlilevel hotel hierarchy exits in the system.
// example:

// [ 
// [ 3,0,14]
// [0, null, 10]
// [4,0,44]
// [6, null, 7]
// [10, 6, 13]
// [7, 6, 17]
// [2, null, 2]
// [14, 2, 9]
// [25, 14, 10]
// [12, 2, 10]
// [13, 0, 1]
// [14, 2, 9]
// ]

// Here null represent the top level of the hotel. We want to know top k hotel chains.
// o/p: if k =2:
// [(0,69), (2,56)]

// let p = number of parents
// O (p log p) here, `p` is smaller than n in average case, `p = n` in worst case)
// O (p) 

const findTopKHotelChains = (data, k) => {
    // map.entries() -> creates an array of key,pairs i.e. [[k1,v1], [k2,v2], ... [kn, vn]]
    let res = [...buildHotelsMap(data).entries()].sort( (a,b) => b[1]-a[1]);
    return res.slice(0, k);
};

// O(n), O(p)
const buildHotelsMap = (data) => {

    let hotelsMap = new Map();

    for(let edge of data){

        let [hid, pid, weight] = edge;

        if(!hotelsMap.has( String(pid) ) && pid !== null){
            hotelsMap.set( String(pid), weight);
        } else {
            if(pid === null) {
                let oldWeight = hotelsMap.get(String(hid)) ? hotelsMap.get(String(hid)) : 0;
                hotelsMap.set( String(hid), weight + oldWeight);
            } else {
                hotelsMap.set( String(pid), weight + hotelsMap.get( String(pid)));
                //check if child exist as parent?
                if(hotelsMap.has(String(hid))){
                    // if yes, then add its weight to its parent
                    hotelsMap.set( String(pid), hotelsMap.get(String(pid)) + hotelsMap.get( String(hid)));
                    // delete this child
                    hotelsMap.delete( String(hid))
                }
            }
        }
    }

    return hotelsMap;
};


// [ hotel id, parent hotel id, no. of hotel]
let data = [
    [ 3, 0, 14],
    [ 0, null, 10],
    [ 4, 0, 44],
    [ 6, null, 7],
    [ 10, 6, 13],
    [ 7, 6, 17],
    [ 2, null, 2],
    [ 14, 2, 9],
    [ 25, 14, 10],
    [ 12, 2, 10],
    [ 13, 0, 1],
    [ 14, 2, 9]
]

// 0 = 69, 6 = 37, 2 = 40  
// (0,69), (6,37), (2,40) 
console.log(findTopKHotelChains(data, 2));
// o/p: if k =2:
// [(0,69), (2,40)]