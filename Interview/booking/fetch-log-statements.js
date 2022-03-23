// Say we got the black box from airplane cradh, There is huge set of log files with contents unsorted. We need to fetch the lastet half an hour log. 
// design a suitable algorithm to fetch lastest half an hour log statement. 
// the formula of log statement would be
/**
<DD-MM-YYYY HH:MM:SS:sss> <LogStatement>
example - 07-03-2022 10:02:01:001 abcd
*/


const fetchLogs = (diffInMins, streams) => {


    const re = new RegExp(/^([1-9]|([011][0-9])|(3[01]))\-([0]{0,1}[1-9]|1[011])\-\d\d\d\d\s([0-1]?[0-9]|2?[0-3]):([0-5]\d):([0-5]\d):(\d\d\d)/ig);

    let lastLogs = [];
    let currDateTimeInMillis = new Date().getTime();
    let diffInMillis = diffInMins*60*1000;

    for (let i = streams.length - 1; i >= 0; i--) {
        
        let logLine = streams[i];
        let stream = logLine.match(re);
        if(stream) {
            
            let logDateTimeInMillis = new Date(stream[0]).getTime();

            if(currDateTimeInMillis - logDateTimeInMillis >= diffInMillis){
                lastLogs.push(logLine);
            }
        }
    }

    return lastLogs;
};

// assuming time-zones and times are in sync at server
let logs = [
    "03-03-2022 11:32:01:001 abcd",
    "03-03-2022 11:32:01:001 abdc",
    "03-03-2022 11:33:01:001 acbd",
    "03-03-2022 11:34:01:001 acdb",
    "03-03-2022 11:40:01:001 adbc",
    "03-03-2022 11:41:01:001 adcb",
    "03-03-2022 11:51:01:001 bacd"
];

console.log(fetchLogs(1000, logs));