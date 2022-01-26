const isValidState = (state) => {
    let a  =  new Set();
    // check if is is a valid solution
    return true;
};

const getCandidates = (state) => {
    return [];
};

const search = (state, solutions) => {
    if(isValidState(state)){
        solutions.push(state.copy())
    }
    // return : depending upon whether you are required to return in the first search of by exhausting all possibilities

    for (const candidate in getCandidates(state)) {
        state.add(candidate);
        search(state, solutions);
        state.delete(candidate);
    }
};

const solve = () =>{
    const solutions = [];
    const state = new Set();
    search(state, solutions);
    return solutions;
};

console.log("Solution: ", solve());

