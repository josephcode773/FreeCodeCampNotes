
function convertToRoman(num) {
  var convertChart = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI",
  7: "VII",
  8: "VIII",
  9: "IX",
  10: "X",
  20: "XX",
  30: "XXX",
  40: "XL",
  50: "L",
  60: "LX",
  70: "LXX",
  80: "LXXX",
  90: "XC",
  100: "C",
  200: "CC",
  300: "CCC",
  400: "CD",
  500: "D",
  600: "DC",
  700: "DCC",
  800: "DCCC",
  900: "CM",
  1000: "M",
  2000: "MM",
  3000: "MMM",
  4000: "MMMM",
  5000: "MMMMM"

};

//var num = "36";
var num = num.toString();
var emptyArray = [];
for (var j = num.length - 1, y = 1; j >= 0, y <= num; j-- , y *= 10) {
  emptyArray.push(num[j] * y);
}
var holder2 = [];
for (var i = 0; i < emptyArray.length; i++) {
  holder2.unshift(convertChart[emptyArray[i]]);
}

var thatThing = holder2.join('');
 return thatThing;
}

convertToRoman(36);
