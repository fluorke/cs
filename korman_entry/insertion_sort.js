//time complexity equal O(n^2) in worst case
// * can be effective with almost sorted array *

const insertion_sort = (A, n) => {
  let key = j = 0;
  for (let i = 1; i < n; i++) {
    key = A[i];
    j = i - 1;
    while (j >= 0 && A[j] > key) {
      A[j + 1] = A[j]
      j--;
    }
    A[j + 1] = key;
  }
}

let A = [2,7,3,8,5,6,1,4];

insertion_sort(A, 8);
console.log(A);