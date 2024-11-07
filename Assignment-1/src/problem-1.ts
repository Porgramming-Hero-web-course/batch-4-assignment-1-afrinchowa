function sumArray(arr: number[]): number {
  return arr.reduce((sum, current) => sum + current, 0);
}

console.log(sumArray([1, 2, 3, 4, 5]));