

// if there is any overlap of meeting return false;
const meetingRooms  = (intervals) => {
    
    intervals.sort( ([v1],[v2]) => [v1-v2]); // unnessary if meetings are in sorted order of start-time/end-time
    
    let result = true;

    let previousMeetingEnd = intervals[0][1];
    
    for (let index = 1; index < intervals.length-1; index++) {

        let [start, end] = [intervals[index][0], intervals[index][1]];

        /*  
            if previous meeting ends before new meeting starts then we update
            previousMeetingEnd to current meeting start
        */

        if(start >= previousMeetingEnd){
            previousMeetingEnd = end;
        } else {
            return false;
        }
        
    }

    return result;
};


console.log("overlaping?: ", meetingRooms([[0,8],[8,0]]));

console.log("overlaping?: ", meetingRooms([[0,30],[5,10]]));

console.log("overlaping?: ", meetingRooms([[0,30],[5,10],[15,20]]));

console.log("overlaping?: ", meetingRooms([[5,10],[15,20],[0,30]]));
