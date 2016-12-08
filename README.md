<h3>Diff Two Arrays</h3>

https://www.freecodecamp.com/challenges/diff-two-arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

```javascript

function diffArray(arr1, arr2) {
    var newArr1 = [];
    var newArr2 = [];
    var sliced = [];
    for (var y = 0; y < arr1.length; y++) {
        if (arr2.includes(arr1[y]) === false) {
            newArr1.push(y);
        }
    }
    for (var i = 0; i < newArr1.length; i++) {
        sliced.push(arr1.splice(newArr1[0], 1));
    }
    for (var x = 0; x < arr2.length; x++) {
        if (arr1.includes(arr2[x]) === false) {
            newArr2.push(x);
        }
    }
    for (var j = 0; j < newArr2.length; j++) {
        sliced.push(arr2.splice(newArr2[0], 1));
    }
    //var finalArr = [].concat(...sliced); or
    var finalArr = [].concat.apply([], sliced);
    return finalArr;
}

//diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray([1, "calf", 3, "piglet"], [7, "filly"]);

/*
Flattening multidimensional Arrays in JavaScript
http://www.jstips.co/en/flattening-multidimensional-arrays-in-javascript/

Array.prototype.slice()
Array.prototype.filter()
Array.prototype.indexOf()
Array.prototype.concat()
Array.prototype.splice()
Array.prototype.includes()
*/

```
