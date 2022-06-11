let A = [222,7,3,8,5,6,15];


const merge_sort = (array) => {
    if (array.length === 1) return array;
    let q = Math.trunc(array.length / 2);
    //left
    let left = merge_sort(array.slice(0, q));
    //right
    let right = merge_sort(array.slice(q, array.length)); 

    return merge(left, right);
}

const merge = (left, right) => {
   let l = Array.from(left);
   let r = Array.from(right);

   l.push(Infinity);
   r.push(Infinity);

   let ar = [];
   let i = j = 0;
   for(let k = 0; k < (left.length + right.length); k++) {
     if (l[i] <= r[j]) {
       ar[k] = l[i];
       i++;
     } else {
       ar[k] = r[j];
       j++;
     }
   }
  console.log(ar);
  return ar;
}


merge_sort(A);


