///////////For Loop
let star = '*';
for (i = 0; i < 6; i++) {
    console.log(star+='*');
}
//////For Loop 2nd
let linesTotal = 6;
for (let i = 0; i < linesTotal; i++) {
    const line = ''.padEnd(i+1,"*");
    console.log(line);
}
//////////////Nested Loop
let line = '';
for (let i = 1; i < linesTotal; i++) {
    
    for (let j = 0; j < i; j++) {
        line +='*';
    }
    line +='\n'
}
console.log(line);
//////////////Nested Loop
let row = '*';
for (let i = 0; i < 6; i++) {
        console.log(row +='*');
    for (let j = 0; j <= 1; j++) {
      console.log(row);
    }
}

//////////////////padEnd
const pattern = '*';
console.log(pattern.padEnd(1, "*"));
console.log(pattern.padEnd(3, "*"));
console.log(pattern.padEnd(5, "*"));
console.log(pattern.padEnd(7, "*"));
console.log(pattern.padEnd(9, "*"));
