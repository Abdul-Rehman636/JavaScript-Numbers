//Number In JavaScript

//1 Number Method

var a = "32";

var num = Number(a);

console.log(num);

//Now we can do calculations with this value

var b = "ab";

var number = Number(b);

console.log(number + 20);

//2 ParseInt Method

var c = "44.99";

var d = parseInt(c);

console.log(d);

//3 ParseFloat Method

var e = "10.38";

var f = parseFloat(e);

console.log(f);

//4 IsFinite Method

var g = 100;

var h = Number.isFinite(g);

console.log(h);

//5 isInteger Method

var i = 100;

var j = Number.isInteger(i);

console.log(j);

//6 ToFixed Method

var k = 77.32;

var l = k.toFixed(1);

console.log(l);

//7 ToPrecision Method

var m = 63.28832;

var n = m.toPrecision(3);

console.log(n);