
function diffArray(arr1, arr2) {
    let newArr1 = [];
    let newArr2 = [];
    let sliced = [];
    for (let y = 0; y < arr1.length; y++) {
        if (arr2.includes(arr1[y]) === false) {
            newArr1.push(y);
        }
    }
    for (let i = 0; i < newArr1.length; i++) {
        sliced.push(arr1.splice(newArr1[0], 1));
    }
    for (let x = 0; x < arr2.length; x++) {
        if (arr1.includes(arr2[x]) === false) {
            newArr2.push(x);
        }
    }
    for (let j = 0; j < newArr2.length; j++) {
        sliced.push(arr2.splice(newArr2[0], 1));
    }
    //let finalArr = [].concat(...sliced); or
    let finalArr = [].concat.apply([], sliced);
    // return finalArr;
    console.log(finalArr);
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);


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