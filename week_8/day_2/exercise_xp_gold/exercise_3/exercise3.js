const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})
// The browser will first alert : 1, 2, 4, 5, 8, 9;
// Then 1 at index 0
// 2 1
// 4 2
// 5 3
// 8 4
// 9 5
// Then [2,4,8,10,16,18]
