//Exercise 2 : Users And Style
const div = document.querySelector('div');
console.log(div?.style);

const divBackgroud = getComputedStyle(div).backgroundColor
const users = document.querySelectorAll('li');
console.log('users:', users)
if (divBackgroud === 'rgb(173, 216, 230)') {
    console.log('This is lightblue')
    console.log(`Hello ${users[0].textContent} and ${users[1].textContent} !`)
}