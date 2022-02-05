function topKFrequent(nums, k) {
    const numTofreqMap = new Map();
    
    nums.forEach(num => {    // O(n)
        const freq = numTofreqMap.has(num) ? numTofreqMap.get(num) + 1: 1;
        numTofreqMap.set(num, freq);
    })

    const freqToNumMap = new Map();
    
    numTofreqMap.forEach((value, key) => {    // at max O(n)
        const nums = !freqToNumMap.has(value) ? [] : freqToNumMap.get(value);
        nums.push(key);
        freqToNumMap.set(value, nums);
    })
    
    const heap = new MaxHeap();
    
    heap.build(freqToNumMap.keys());    // O(n)
    
    const topKFreqs = heap.getTopK(k);    // O(klogn)
    
    let topKFreqNums = new Array();
    
    for(let i = 0; i < topKFreqs.length; ++i) {    // O(k)
        const numsWithFreq = freqToNumMap.get(topKFreqs[i]);
        topKFreqNums = topKFreqNums.concat(numsWithFreq);
        if(topKFreqNums.length === k) {
            break;
        }
    }
    return topKFreqNums;
}

class Heap {
    constructor(property) {
        this.data = [];
        this.property = property;
    }
    build(arr) {
        this.data = [...arr];
        const n = this.size();
        for(let idx = Math.floor((n - 1) / 2); idx >= 0; --idx) {
            this.heapify(idx);
        }
    }
    getTopK(k) {
        const result = new Array();
        while(k && this.size()) {
            [this.data[0], this.data[this.size() - 1]] = [this.data[this.size() - 1], this.data[0]];
            const key = this.data.pop();
            result.push(key);
            this.heapify(0);
            --k;
        }
        return result;
    }
    size() {
        return this.data.length;   
    }
    heapify(idx) {
        const ltIdx = 2 * idx + 1,
              rtIdx = 2 * idx + 2;
        let propertyIdx = idx;
        
        if(ltIdx < this.size() && this.compare(ltIdx, propertyIdx)) {
            propertyIdx = ltIdx;
        }
        if(rtIdx < this.size() && this.compare(rtIdx, propertyIdx)) {
            propertyIdx = rtIdx;
        }
        if(propertyIdx !== idx) {
            [this.data[idx], this.data[propertyIdx]] = [this.data[propertyIdx], this.data[idx]];
            this.heapify(propertyIdx);
        }
    }
    compare(idx1, idx2) { 
        switch(this.property) {
            case 'MAX': return this.data[idx1] > this.data[idx2]; break;
            case 'MIN': return this.data[idx1] < this.data[idx2]; break;
        }
    }
}
class MaxHeap extends Heap {
    constructor() {
        super('MAX');
    }
}