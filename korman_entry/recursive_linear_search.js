//time complexity equal O(n) |  bottom teta(1) and O(n) top range

let a = [1,2,3,4,5,6,7,8];

const recursive_linear_search = (A, n, i, x) => {
  if (i > n) {
    return "not-found";
  } else if (i <= n) {
    if (A[i] == x) return i;
    else return recursive_linear_search(A, n, i+1, x);
  }
}

console.log(recursive_linear_search(a, 8, 0, 6));