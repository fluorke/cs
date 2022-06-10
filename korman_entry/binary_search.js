//time complexity equal O(log n)

let a = [1,2,3,4,5,6,7,8];

const binary_search = (A, n, x) => {
  let q, p = 0, r = n;

  while (p <= r) {
    q = Math.trunc((p + r) / 2);
    if (A[q] == x) return q;
    else if (A[q] > x) {
      r = q - 1;
    } else if (A[q] < x) {
      p = q + 1;
    } else return "not-found";
  }
}

console.log(binary_search(a, 8, 5));