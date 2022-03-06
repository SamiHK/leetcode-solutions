// To operate a call center, at any given day, a min of 3 english speaking, 2 dutch speaking and 1 spanish speaking employee need to be there. 
// (you can have one employee speaking two or more languages) An employee can atmost work for 5 days. For simplicity let's say an employee works for a 
// standard of 8 hrs every day. (not sure if hours were relevant) The call center operates 7 days a week.
// Given employees and the languages they speak, can you atleast come up with a schedule for the first week ?


// Employee 1: English, Dutch -> e1
// Employee 2: English, Dutch -> e2
// Employee 6: English, Dutch -> e6
// Employee 7: English, Spanish -> e7
// Employee 4: English, Dutch, Spanish -> e4
// Employee 3: Spanish, Dutch -> e3
// Employee 5: Dutch, Spanish -> e5

// We have = 5 english, 6 Dutch, 4 spanish

/**
 * connstraints: 
 * 1. 3 english speaking, 2 dutch speaking and 1 spanish speaking employee need to be there
 * 2. working shift is 8 hours / day -> Assume that this is for working times (call center is not 24x7)
 * 3. Employee Working week is 5 days a week 
 * 4. Call cneter operates 7 days a week.
 */

// employees  -> e1(0), e2(0), e3(0), e4(0), e5(0)
// d1 e=3 : e1(1), e2(1), e3(1)

// employees  ->  e4(0), e5(0), e1(1), e2(1), e3(1)
// d2 e=3 : e4(1), e5(1), e1(2)

// employees  ->  e2(1), e3(1), e4(1), e5(1), e1(2)
// d3 e=3 : e2(2), e3(2), e4(2)

// employees  ->  e5(1), e1(2), e2(2), e3(2), e4(2)
// d4 e=3 : e5(2), e1(3), e2(3)

// employees  ->  e3(2), e4(2), e5(2), e1(3), e2(3)
// d5 e=3 : e3(3), e4(3), e5(3)

// employees  ->  e1(3), e2(3), e3(3), e4(3), e5(3)
// d6 e=3 : e1(4), e2(4), e3(4)

// employees  -> e4(3), e5(3), e1(4), e2(4), e3(4)
// d7 e=3 : e4(4), e5(4), e1(5)


// --------------------------------------------------
// Employee 1: English, Dutch -> e1
// Employee 2: English, Dutch -> e2
// Employee 3: English, Dutch -> e3
// Employee 4: English, Spanish -> e4
// Employee 5: English, Dutch, Spanish -> e5
// Employee 6: Spanish, Dutch -> e6
// Employee 7: Dutch, Spanish -> e7

// We have = 5 english, 6 Dutch, 4 spanish
// select employee based on language priority

// employees  -> e1([e,d]  0), e2([e,d]  0), e3([e,d]  0), e4([e,s]  0), e5([e,d,s]  0), e6([d,s]  0), e7([d,s]  0)
// d1 e=3, d=2, s=1 : e1([e,d]  1), e2([e,d]  1), e4([e,s]  1)

// employees  ->  e3([e,d]  0), e5([e,d,s]  0), e6([d,s]  0), e7([d,s]  0), e1([e,d]  1), e2([e,d]  1), e4([e,s]  1)
// d2 e=3, d=3, s=1 : e3([e,d]  1), e5([e,d,s]  1), e1([e,d]  2)

// employees  ->  e6([d,s]  0), e7([d,s]  0), e2([e,d]  1), e4([e,s]  1), e3([e,d]  1), e5([e,d,s]  1), e1([e,d]  2)
// d3 e=3, d=3, s=2 : e6([d,s]  1), e2([e,d]  2), e4([e,s]  2), e3([e,d]  2)

// employees  -> e7([d,s]  0), e5([e,d,s]  1), e1([e,d]  2), e6([d,s]  1), e2([e,d]  2), e4([e,s]  2), e3([e,d]  2)
// d4 e=3, d=4, s=2 : e7([d,s]  1), e5([e,d,s]  2), e1([e,d]  3), e2([e,d]  3)

// employees  ->  e6([d,s]  1), e4([e,s]  2), e3([e,d]  2), e7([d,s]  1), e5([e,d,s]  2), e1([e,d]  3), e2([e,d]  3)
// d5 e=3, d=3, s=3 : e6([d,s]  2), e4([e,s]  3), e3([e,d]  3), e5([e,d,s]  3)

// employees  ->  e7([d,s]  1), e1([e,d]  3), e2([e,d]  3), e6([d,s]  2), e4([e,s]  3), e3([e,d]  3), e5([e,d,s]  3)
// d6 e=3, d=3, s=2 : e7([d,s]  2), e1([e,d]  4), e2([e,d]  4), e4([e,s]  4)

// employees  -> e6([d,s]  2), e3([e,d]  3), e5([e,d,s]  3), e7([d,s]  2), e1([e,d]  4), e2([e,d]  4), e4([e,s]  4)
// d7 e=3, d=4, s=2 : e6([d,s]  3), e3([e,d]  4), e5([e,d,s]  4), e1([e,d]  5)


// Next Week:
// employees  ->  e7([d,s]  0), e2([e,d]  0), e4([e,s]  0), e6([d,s]  0), e3([e,d]  0), e5([e,d,s]  0), e1([e,d]  0)


// --------------------------------------------------
// Employee 1: English, Dutch -> e1
// Employee 2: English, Dutch -> e2
// Employee 3: English, Dutch -> e3
// Employee 4: English, Spanish -> e4
// Employee 5: English, Dutch, Spanish -> e5
// Employee 6: Spanish, Dutch -> e6
// Employee 7: Dutch, Spanish -> e7
// ---------------------------------------------------

class Employee {
    constructor(languages){
        this.daysCount = 0;
        this.shift = 1; // assuming that working hours are from 9AM to 5PM
        this.languages = new Set(languages);
    }
}

class Schedule {
    constructor(day){
        this.day = day;
        this.employees = [];
        this.english = 0;
        this.dutch = 0;
        this.spanish = 0;
    }
}

let languages = {
    english: "english",
    dutch: "dutch",
    spanish: "spanish"
};

let days = {
    monday: "monday",
    tuesday: "tuesday",
    wednesday: "wednesday",
    thursday: "thursday",
    friday: "friday",
    saturday: "saturday",
    sunday: "sunday"
};

let req = {
    english: 3,
    dutch: 2,
    spanish: 1
}

let MaxDays = 5;
let MaxLan = 3;
/**
 * The ground is all set now the calculations will start
 */

const updateScheduleAndQueue = (employeeQueue, schedule, employee, i) => {
    
    employee.daysCount += 1;    
    if(employee.languages.has(languages.english)) schedule.english += 1;
    if(employee.languages.has(languages.dutch)) schedule.dutch += 1;
    if(employee.languages.has(languages.spanish)) schedule.spanish += 1;
    schedule.employees.push(employee);

    employeeQueue.splice(i, 1);
    employeeQueue.push(employee);
    
    return [employeeQueue, schedule];
}

const scheduleEmployeesForWeek = () => {

    let employeeQueue = [
        new Employee([languages.english, languages.dutch]),
        new Employee([languages.english, languages.dutch]),
        new Employee([languages.english, languages.dutch]),
        new Employee([languages.english, languages.spanish]),
        new Employee([languages.english, languages.dutch, languages.spanish]),
        new Employee([languages.spanish, languages.dutch]),
        new Employee([languages.spanish, languages.dutch])
    ];
    let weekSchedule = [
        new Schedule(days.monday),
        new Schedule(days.tuesday),
        new Schedule(days.wednesday),
        new Schedule(days.thursday),
        new Schedule(days.friday),
        new Schedule(days.saturday),
        new Schedule(days.sunday) 
    ];

    
    weekSchedule.forEach((schedule) => {

        let empQLen = employeeQueue.length;

        let triLinguaExhausted = false;

        for(let i = 0; i < empQLen; ){

            if(schedule. english >= req.english && schedule.dutch >= req.dutch && schedule.spanish >= req.spanish) {
                break;
            }

            let employee = employeeQueue[i];

            if(employee.daysCount < MaxDays){
                // since we have one employee with three languages;
                if(!triLinguaExhausted && schedule.english < req.english && schedule.dutch < req.dutch && schedule.spanish < req.spanish) {
                    
                    if(employee.languages.size !== MaxLan) {
                        
                        let j = i+1;

                        while (j <= empQLen){

                            if(j == empQLen){
                                triLinguaExhausted = true;
                                break
                            }

                            if(employeeQueue[j].languages.size === MaxLan && employeeQueue[j].daysCount < MaxDays){
                                
                                employee = employeeQueue[j];
                                [employeeQueue, schedule] = updateScheduleAndQueue(employeeQueue, schedule, employee, j);
                                empQLen--;
                                break;
                            }
                            j++;
                        }
                    }
                // since all employees have 2 language skills, if we have room for two language skills and employee have those two languaue skills, then use this employee
                } else if(
                    ((schedule.english < req.english && employee.languages.has(languages.english)) && (schedule.dutch < req.dutch && employee.languages.has(languages.dutch)))
                    ||
                    ((schedule.english < req.english && employee.languages.has(languages.english)) && (schedule.spanish < req.spanish && employee.languages.has(languages.spanish)))
                    ||
                    ((schedule.spanish < req.spanish && employee.languages.has(languages.spanish)) && (schedule.dutch < req.dutch && employee.languages.has(languages.dutch)))
                ){
                        
                    [employeeQueue, schedule] = updateScheduleAndQueue(employeeQueue, schedule, employee, i);
                    empQLen--;
                    continue;

                // since all employees have 2 language skills, if we have room for two language skills and employee does not have those two languaue skills, then check if next employees have it
                } else if(
                    ((schedule.english < req.english && schedule.dutch < req.dutch) && (employee.languages.has(languages.english) || employee.languages.has(languages.dutch)))
                    ||
                    ((schedule.english < req.english && schedule.spanish < req.spanish) && (employee.languages.has(languages.english) || employee.languages.has(languages.spanish)))
                    ||
                    ((schedule.spanish < req.spanish && schedule.dutch < req.dutch) && (employee.languages.has(languages.spanish) || employee.languages.has(languages.dutch)))
                ){

                    if(employee.languages.size > 1) {
                        
                        let j = i+1;
                        let currReq = [];
                        if(schedule.spanish === req.spanish){
                            currReq = [languages.english, languages.dutch];
                        } else if(schedule.dutch === req.dutch){
                            currReq = [languages.english, languages.spanish];
                        } else {
                            currReq = [languages.dutch, languages.spanish];
                        }

                        while (j < empQLen){
                            if(
                                employeeQueue[j].languages.size === (MaxLan-1) 
                                && employeeQueue[j].daysCount < MaxDays 
                                && employeeQueue[j].languages.has(currReq[0])
                                && employeeQueue[j].languages.has(currReq[1])
                            ){  
                                employee = employeeQueue[j];
                                [employeeQueue, schedule] = updateScheduleAndQueue(employeeQueue, schedule, employee, j);
                                empQLen--;
                                break;
                            }
                            j++;
                        }
                    } else {
                        i++;
                    }

                } else if (
                    ((schedule.english < req.english && employee.languages.has(languages.english)))
                    ||
                    ((schedule.dutch < req.dutch && employee.languages.has(languages.dutch)))
                    ||
                    ((schedule.spanish < req.spanish && employee.languages.has(languages.spanish)))
                ){
                    [employeeQueue, schedule] = updateScheduleAndQueue(employeeQueue, schedule, employee, i);
                    empQLen--;

                } else {
                    // if employee have no skills to offer then we can skip this one
                    i++;
                    continue;
                }
     
            } else {
                if(i < (empQLen - 1)){
                    i++;
                    continue;
                }
                return "cannot schedule for this day, as there are no further employees left";
            }
        }
    });

    return [employeeQueue, weekSchedule];

};

let [employeeQueue, weekSchedule] = scheduleEmployeesForWeek();
// console.log(employeeQueue);
// console.log(weekSchedule);

weekSchedule.forEach(schedule => {
    console.log(schedule);
    console.table(schedule.employees);
    console.log("\n\n\n");
});