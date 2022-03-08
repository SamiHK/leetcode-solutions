// Given a list of flights between destinations something of the following order:

// Amsterdam -> Paris on August 10, Price - 300 euros
// London -> Paris on August 15, Price - 410 euros
// Paris -> London on August 13, Price - 300 euros
// London -> Amsterdam on August 17, Price - 400 euros



// Hotel cost per night:

// Amsterdam - 400 euros
// Paris - 500 euros
// London - 300 euros


// Find the longest itinerary possible (in terms of the duration) given a upper cap on the budget, say 5000 euros.
// DFS

class CityNode {
    constructor(city, hotelCost){
        this.city = city;
        this.hotelCost = hotelCost;
        this.flight = null;
    }
}

class Flight {
    constructor(fromCity, toCity, date, cost){
        this.fromCity = fromCity;
        this.toCity = toCity;
        this.date = date;
        this.cost = cost;
        this.next = [];
    }
}



const findLongestTrip = (flights, upperCap) => {

    let longestTrip = [];

    for(let flight of flights){

        let amountLimit = upperCap;

        let longTrip = [];

        const stack = [flight];

        let visited = new Set();

        while(stack.length > 0){

            let current =  stack.pop();

            for(let next of current.next){

                if(next.toCity.city in visited) continue;
                if(current.date >= next.toCity.date) continue;
                if((amountLimit - current.toCity.hotelCost * (next.date - current.date -1)) >= 0)
                {   
                    amountLimit = amountLimit - current.toCity.hotelCost * (next.date - current.date -1);
                    longTrip.push(current.toCity);
                    visited.add(next.toCity.city);
                    stack.push(next);
                }
            }
        }

        if(longTrip.length > longestTrip.length){
            longestTrip = longTrip;
        }
    }

    return longestTrip;
}






let Amsterdam = new CityNode("amsterdam", 400);
let Paris = new CityNode("paris", 500);
let London = new CityNode("London", 300);

// assuming date to be a number ... can be a complex thing .. can be optimized
let AP = new Flight(Amsterdam, Paris, 10, 300);
let LP = new Flight(London, Paris, 15, 300);
let PL = new Flight(Paris, London, 13, 300);
let LA = new Flight(London, Amsterdam, 17, 300);

AP.next.push(PL);
PL.next.push(LA);
PL.next.push(LP);
LP.next.push(PL);
LA.next.push(AP);

let upperCap = 5000;

console.log(findLongestTrip([AP,LP,PL,LA], upperCap));