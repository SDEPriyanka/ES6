// var o = {p: 42, q: true};
// var p = o.p;
// var q = o.q;
// console.log(p); 
// console.log(q); 


var o = {p: 42, q: true};
var {p, q} = o;

console.log(p); 
console.log(q); 


const colors = ['red', 'green'];

// Destructuring with default values
const [primary="test" , secondary="www", tertiary = "eee"] = colors;

for(  co in colors){
    console.log("co", colors[co])
}


console.log(primary);   // 'red' (default value not used)
console.log(secondary); // 'green'
console.log(tertiary);  // 'orange'
