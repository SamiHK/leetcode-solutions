// analyzing the following data
// map (key , array[objects])
let data = {
    176: [
        {
            "price": 120,
            "features": ["breakfast", "refundable"],
            "availbility": 5
        }
    ],
    177: [
        {
            "price": 130,
            "features": ["breakfast"],
            "availbility": 1
        },
        {
            "price": 140,
            "features": ["breakfast", "refundable", "wifi"],
            "availbility": 3
        }
    ],
    178: [
        {
            "price": 130,
            "features": ["breakfast"],
            "availbility": 2
        },
        {
            "price": 140,
            "features": ["breakfast", "refundable", "wifi"],
            "availbility": 7
        },
        {
            "price": 150,
            "features": ["breakfast", "refundable", "wifi", "TV"],
            "availbility": 9
        }
    ]
}
// Given above data map set, design an algorithm to get below output for below given input
let input = {
    "checkin": 176,
    "checkout": 179,
    "features": ["breakfast"],
    "rooms": 1
};

// The output must be of following type
let output = [
    {
        "price": 250,
        "features": ["breakfast"],
        "availbility": 1
    },
    {
        "price": 260,
        "features": ["breakfast", "refundable"],
        "availbility": 3
    }
]

// find rooms within checkin and checkout date ( checkout date exclusive) and calculate price for each day, based of rooms available with least features
const findRoomsWithFeatures = (data, requirement) => {

    let checkin = requirement["checkin"];
    let checkout = requirement["checkout"];
    let features = new Set(requirement["features"]);
    let results = [];

    // running loop from checkin to checkout
    while(checkin < checkout){ // O(d) <- very small due to difference between checkin/checkout, in most cases O(1)
        
        if(data[checkin]){
            let dayData = data[checkin];
            let originalPrice = 0;
            let index = 0

            while(index < dayData.length){ //rooms-available for a day O(ra)
                
                // check for the intersection of available features
                let intersectionSet = new Set();
                let setB = new Set(dayData[index].features);
                for (let i of setB) { // options-available -> very small 0(oa)
                    if (features.has(i)) {
                        intersectionSet.add(i);
                    }
                }

                //since this will be stay room, next time the current amenities will be original amenities of this room
                if(features.size < setB.size){
                    features = setB;
                }
                

                let output = {
                    price : dayData[index]["price"],
                    availbility: dayData[index]["availbility"],
                    features: [...intersectionSet.entries()].map( (a,b) => a[0])
                }

                if(results[index]){
                    if(results[index]["price"]){
                        originalPrice = results[index]["price"];
                        output["price"] += originalPrice;
                    }
                    results[index] = output;

                } else {
                    if(!results[index]) output["price"] += originalPrice;
                    results.push(output);
                }

                index++;
            }
        }
        
        checkin++;
    }
        

    // Runtime : O (oa * ra * d), assuming oa > ra > d,  d & ra being constants.
    // Space: O (ra)
    return results;
};


console.log(findRoomsWithFeatures(data, input));

// Possible approach to solve this question
/**


The problem scenario is as follows:
1- the input says that someone search for a room to take for the days (176 and 177) [178 will checkout so the room will not be used this day].
2- features included is breakfast [at least]
3- number of rooms required = 1

so the output took the 2 possible scenarios:
output:
at day 1 [176] the only available room is:

176 : 	[
                {
                    "price" : 120,
                    "features" : ["breakfast", "refundable"],
                    "availbility" : 5
                }
            ],
then on day 2 [177] there are 2 available rooms

177 : 	[
                {
                    "price" : 130,
                    "features" : ["breakfast"],
                    "availbility" : 1
                },
                {
                    "price" : 140,
                    "features" : ["breakfast", "refundable", "wifi"],
                    "availbility" : 3
                }
            ],
so if you chose the first room ,, then the total price will be [120(for first day) + 130 (for second day)], and if you chose the 2nd room then the output price total will be [120(for first day) + 140 (for second day)],
and following the same approach for the features array and taking the min availability the output will be :

[
    {
        "price" : 250,
        "features" : ["breakfast"],
        "availbility" : 1
    },
    {
        "price" : 260,
        "features" : ["breakfast", "refundable"],
        "availbility" : 3
    }
]

*/



