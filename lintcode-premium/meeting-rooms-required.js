

// if there is any overlap of meeting return false;
const meetingRoomsRequired  = (intervals) => {
    
    if(intervals === null) return 0;
    if(!intervals[0][0] && !intervals[0][1]) return 0;

    intervals.sort( ([v1],[v2]) => [v1-v2]); // unnessary if meetings are in sorted order of start-time/end-time

    let previousMeetingEnd = intervals[0][1];
    let endSoon = previousMeetingEnd;
    let rooms = 1;
    let maxCount = 1

    // since checking starts from the 2nd-index 
    for (let index = 1; index < intervals.length; index++) {

        let [start, end] = [intervals[index][0], intervals[index][1]];

        /*  
            if previous meeting ends before new meeting starts then we update
            previousMeetingEnd to current meeting start
        */

        if(start >= previousMeetingEnd){
            previousMeetingEnd = end;
        } else {
            rooms +=1;
        }

        // checking for end-meetings
        if(endSoon > end) endSoon = end; 
        if(start > endSoon) {
            rooms--; // rooms decrement till zero
            endSoon = start; 
        }

        maxCount = Math.max(maxCount, rooms); // choose the max for result
    }

    return maxCount;
};

console.log("rooms required?: ", meetingRoomsRequired([[]])); // -> 0
console.log("rooms required?: ", meetingRoomsRequired([[1,2]])); // -> 1
console.log("rooms required?: ", meetingRoomsRequired([[0,8],[8,0]])); // -> 1
console.log("rooms required?: ", meetingRoomsRequired([[0,30],[5,10]])); // -> 2
// The start of new meeting should be after/=end of first meeting for it to adjust to same room.
//         2-----------           2------------
// 1----------------------------------------------------------------
// 0 ----- 5 -------10 -------- 15 -------- 20 -------- 25 --------30
// console.log("rooms required?: ", meetingRoomsRequired([[5,10],[15,20],[0,30]])); // -> 2
// The start of new meeting should be after/=end of first meeting for it to adjust to same room.
//         3-----------------------------------
//         2-----------           3------------
// 1---------------------------------------------------------------- 1----------
// 0 ----- 5 -------10 -------- 15 -------- 20 -------- 25 --------30--------35
console.log("rooms required?: ", meetingRoomsRequired([[0,30],[5,10],[15,20],[5,20], [30, 35]])); // -> 3

// [[0,30],[5,10],[5,20],[15,20],[30, 35]]
// s = 0, e = 30, ls = 0, le = 30, 
//count = 1, endSoon = e = 30
// IFF endSoon > s, count ++

// s = 5, e = 10, ls = 0, le = 30, 
//count = 2, if(endSoon < e) endSoon = e = 10 
// IFF endSoon > s, count ++

// s = 5, e = 20, ls = 5, le = 10, 
//count = 3, if(endSoon < e) endSoon = 10 <- lower
// IFF endSoon > s, count ++

// s = 15, e = 20, ls = 5, le = 20, count = 3, ending-soon = 10 <- lower
//count = 3, if(endSoon < e) endSoon = 10 <- lower !important 
// IFF endSoon < s, no count change, IFF s > endsoon; endSoon = e; endsoon = 20

// s = 30, e = 35, ls = 15, le = 20, count = 3, ending-soon = 20 <- lower
//count = 3, if(endSoon < e) endSoon = 10 <- lower !important 
// IFF endSoon < s, no count change