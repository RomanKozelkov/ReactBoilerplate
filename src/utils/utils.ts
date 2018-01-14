
//Object
export function mapValues<T=any, R=T>(hash: {[key: string]: T}, handler: (obj: T, k: string, idx: number) => R) : R[] {
	return Object.keys(hash).map((k, idx) => handler(hash[k], k, idx));
}

//Array
export function addUnique(arr: any[], value: any) {
	return arr.indexOf(value) >= 0 ? [...arr] : [...arr, value];
}

export function last(arr: any[]) {
	return arr[arr.length-1];
}

export function compareArrays(arr1: any[], arr2: any[]) {
	return !!arr1 && !!arr2 && arr1.length === arr2.length && arr1.every((a1, idx) => a1 === arr2[idx]);
}