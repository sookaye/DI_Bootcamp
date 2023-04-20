// #1
function funcOne() {
    const a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}

// #1.1 - run in the console:  "alert inside the funcOne function 3"
funcOne()
// #1.2 What will happen if the variable is declared = it will still consider the which is in the inner scope
// with const instead of let ? then the variable a inside scope will not run because const allow a unique key declaration

//#2
const a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree() // window alert 'inside the funcThree function 0'
funcTwo() // No action, the variable will only be modify
funcThree() // window alert 'inside the funcThree function 0'
// #2.2 What will happen if the variable is declared 
 funcThree() //== will take the value of the variable a (outside the scope = 0)
funcTwo() // will take the value of the variable a (inside the scope = 5)
// with const instead of let ? funcThree will  working as the same, but il will display error in funcTwo unless we put const in front of a and the we modify the value


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console: Hello will appear
 funcFour() // 
funcFive() // Error - variable a inside alert is not declared

//#4
const a = 1;
function funcSix() {
    const a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console: inside the funcSix function test
 funcSix()
// #4.2 What will happen if the variable is declared = the inner scope variable will be taken in consideration
// with const instead of let ?  will still take the variable in the inner scope into consideration

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console : in the if block 5 then  outside of the if block 2
// #5.2 What will happen if the variable is declared  - it's already declared
// with const instead of let ? = same result as let because outer variable will affect the outer declaration and the inner variable will affect the inner scope declaration