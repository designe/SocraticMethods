/*
*
* Socratic Methods for javascript
*
* Author : jbear
* Contact : jbear.co
*
*/

// if performance class is not present
if(typeof performance == "undefined") {
    performance = {
        "now" : function() {
            var speed = process.hrtime();
            var ret = speed[0] + speed[1] / 1000000000;
            return ret;
        }
    };
}

var d = new Array(20);
function remainderRecursive(a, b) {
    if(a < b) return a; // first
    if(a - b < b) return a - b; // second
    // recursive
    a = remainderRecursive(a, b + b);
    if(a < b) return a;
    return a - b;
}

function remainderLoop(a, b) {
    if(a < b) return a;
    var c = b;
    while(a - c  >= c) { c += c; }
    a = a - c;
    while(c != b) { c >>= 1; if(c <= a) a -= c; }
    return a;
}

function remainderLoopEx(a, b) {
    if(a < b) return a;
    d[0] = b; var idx = 0;
    while(a - b >= b) { b += b; d[++idx] = b; }
    a = a - b;
    for(var i = idx - 1; i > 0; i--) if(d[i] <= a) a -= d[i];
    return a;
}

function rawRemainder(a, b) {
    return a % b;
}

var start = performance.now();
var a = remainderRecursive(1000,13);
var stop = performance.now();
console.log(`${a} : ${stop - start}`);

start = performance.now();
a = remainderLoop(1000, 13);
stop = performance.now();
console.log(`${a} : ${stop - start}`);

start = performance.now();
a = remainderLoopEx(1000, 13);
stop = performance.now();
console.log(`${a} : ${stop - start}`);

start = performance.now();
a = rawRemainder(1000, 13);
stop = performance.now();
console.log(`${a} : ${stop - start}`);



