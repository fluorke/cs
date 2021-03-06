//time complexity equal O(n)

let a = [1,2,3,4,5,6,7,8];

const Sentinel_Linear_Search = (A,n,x) => {
  let last = A[n - 1];
  A[n - 1] = x;
  let i = 0;

  while(A[i] != x) {
    i++;
  }
  A[n - 1] = last;
  if (i < n - 1 || A[n - 1] === x) return i;
  return "not-found";
}

//console.log(Sentine_Linear_Search(a, 8, 10));
