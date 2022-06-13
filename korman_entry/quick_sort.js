let a = [12, 7, 14, 9, 10, 11];



const quickSort = (arr, p = 0, r = arr.length - 1) => {
  if (p >= r) return;

  let q = partition(arr, p, r);
  quickSort(arr, p, q-1);
  quickSort(arr, q+1, r);
}

const partition = (arr, p, r) => {
  let q = 0;

  for (let i = 0; i < r; i++) {
    if (arr[i] <= arr[r]) {
      [arr[q], arr[i]] = [arr[i], arr[q]];
      q++;
    }
  }
  [arr[q], arr[r]] = [arr[r], arr[q]];
  return q;
}

quickSort(a);
console.log(a);