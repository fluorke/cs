// time complexity equal O(n^2)

const selection_sort = (A, n) => {
  let smallest = 0;
  for (let i = 0; i < n - 1; i++) {
    smallest = i;
    for (let j = i + 1; j < n; j++) {
      if (A[j] < A[smallest]) smallest = j;
    }
    [A[i], A[smallest]] = [A[smallest], A[i]];
  }
}

let A = [2,7,3,8,5,6,1,4];

selection_sort(A, 8);
console.log(A);