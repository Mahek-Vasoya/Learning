function findLongestConseqSubseq(arr, n) {
  let ans = 0,
    count = 0;

  // sort the array
  arr.sort(function (a, b) {
    return a - b;
  });
  console.log(arr);
  var v = [];
  v.push(arr[0]);
  //insert repeated elements only once in the vector
  for (let i = 1; i < n; i++) {
    if (arr[i] !== arr[i - 1]) v.push(arr[i]);
  }
  console.log(v);

  // find the maximum length
  // by traversing the array
  for (let i = 0; i < v.length; i++) {
    // Check if the current element is equal
    // to previous element +1
    if (i > 0 && v[i] === v[i - 1] + 1) count++;
    // reset the count
    else count = 1;

    // update the maximum
    ans = Math.max(ans, count);
  }
  return ans;
}

// Driver code

let arr = [1, 9, 3, 10, 4, 20, 2];
let n = arr.length;
document.write(
  "Length of the Longest contiguous subsequence is " +
    findLongestConseqSubseq(arr, n)
);
