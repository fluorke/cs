//time complexity equal O(log n)

const recursive_binary_search = (A, p, r, x) => {
  if (p > r) return "not-found"
  else {
    let q = Math.trunc((p + r) / 2);
    if (A[q] == x) return q;
    else {
      if (A[q] > x) return recursive_binary_search(A, p, q - 1, x);
      else return recursive_binary_search(A, q + 1, r, x);
    }
  }
}

let A = [1,2,3,4,5,6,7,8];

console.log(recursive_binary_search(A, 0, 8, 5));