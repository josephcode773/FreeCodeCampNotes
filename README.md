```javascript

function diffArray(arr1, arr2) {
  var newArr1 = [];
  var newArr2 = [];
  // Same, same; but different.
  //return arr1.includes(arr2[0]);
  var sliced = "";
  for (var x = 0; x<arr2.length; x++) {
    if (arr1.includes(arr2[x]) === false) {
      newArr1.push(x);
      //sliced = arr2.splice(newArr[0], 1);
    }
  }
  for (var y = 0; y<arr1.length; y++) {
    if (arr2.includes(arr1[y]) === false) {
      newArr2.push(y);
      //sliced = arr2.splice(newArr[0], 1);
    }
  }
  return newArr1;
  //return sliced;
}

//diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);
```
