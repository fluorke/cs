let a = [12, 7, 14, 9, 10, 11];

const partition = (arr) => {
  let q = 0, r = arr.length - 1;

  for (let i = 0; i < r; i++) {
    if (arr[i] <= arr[r]) {
      [arr[q], arr[i]] = [arr[i], arr[q]];
      q++;
    }
  }
  [arr[q], arr[r]] = [arr[r], arr[q]];
}

partion(a);
console.log(a);