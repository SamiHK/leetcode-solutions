
const findMaxSubsegmentsCount = (arr) => {

	let arrlen = arr.length;
	let memo = new Array(arrlen + 1).fill(0);
	memo[arrlen] = Infinity;

	let subSegmentsCount = 0;

	let contextMax = -1;

	// O(n)
	for (let pointer = arrlen - 1; pointer >= 0;) {
		if (memo[pointer + 1] < arr[pointer]) memo[pointer] = memo[pointer + 1]
		else memo[pointer] = arr[pointer];
		pointer = pointer - 1;
	}

	// O(n)
	for (let pointer = 0; pointer < arrlen;) {
		if (arr[pointer] > contextMax) contextMax = arr[pointer];
		if (contextMax <= memo[pointer + 1]) subSegmentsCount = subSegmentsCount + 1;
		pointer = pointer + 1;
	}

	// overall runtime = O(n) + O(n) = O(n)
	// overall space = O(n) -> i.e. of memo 
	return subSegmentsCount;
}

let arr = [2,5,1,9,7,6];
console.log(findMaxSubsegmentsCount(arr));
// 1,2,5,6,7,9