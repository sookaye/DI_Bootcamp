let count = 15;

for (let n=0; n <= count; n++) {
    if (n % 2 ==0) {
console.log(`${n} is even.`);
    } else {
        console.log(`${n} is odd.`)
    }
}

/////
for (let n=0; n <=count; n++) {
    const division = n / 2;
    if (division === parseInt(division)){
console.log(`${n} is even.`);
    }
    else {
        console.log(`${n} is odd.`)
    }
}

////////////////////////////////
// let object = 1';
// for (const key in object) {
//     if (Object.hasOwnProperty.call(object, key)) {
//         const element = object[key];
        
//     }
// }
/////master reduce function///
let names= ["john", "sarah", 23, "Rudolf",34]
for (let i =0 ; i < names.length; i++) {
    if (typeof names[i] !== 'string') {
        break
    }
    else {
        console.log(names[i]);
    }
}
///////////////////