function reassignedPriorities(priorities) {
    
    if(priorities === null || priorities.length === 0) return [];
    
    let priorityMap = new Map();
    let counter = 1;
    let copyArr = [];
    copyArr = Object.assign(copyArr, priorities);
    copyArr = copyArr.sort( (a,b) => (a-b));
    for(let i = 0; i < copyArr.length; i++){
        if(priorityMap.has(String(copyArr[i]))){
            continue;
        } else {
            priorityMap.set(String(copyArr[i]), counter);
            counter++;
        }
    }
    
    console.log(priorityMap);
    
    for(let i = 0; i < priorities.length; i++){
        priorities[i] = priorityMap.get(String(priorities[i]));
    }    
    
    return priorities;
     
}

console.log(reassignedPriorities([1,2,4,8,6,7,52,2222,445,42,2,3,2,]));