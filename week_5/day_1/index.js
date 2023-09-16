let divElement = document.body.children[0];
console.log(divElement);

divElement = document.body.firstElementChild;
console.log(divElement);

let ulElement = divElement.nextElementSibling;
console.log(ulElement);

ulElement = document.body.children[1];
console.log(ulElement);

let firstLiElement = ulElement.firstElementChild
console.log(firstLiElement);

let { lastElementChild: secondLiElement } = ulElement;
console.log(secondLiElement);

secondLiElement = firstLiElement.nextElementSibling
console.log(secondLiElement);

console.log('USING QUERY SELECTOR');

divElement = document.querySelector('div');
console.log(divElement);

divElements = document.querySelectorAll('div');
console.log(divElements);

for (let i = 0; i < divElements.length; i++) {
    const element = divElements[i];
    console.log(element);

}

for (const element of divElements) {

    console.log(element);
}

divElements.forEach(element => {

    console.log(element);
})

divElement = document.getElementsByName('div');
console.log(divElement);

ulElement = document.querySelector('ul');
console.log(ulElement);

secondLiElement = ulElement.querySelector('li:nth-child(2)');
console.log(secondLiElement);

secondLiElement = document.querySelector('ul>li:nth-child(2)');
console.log(secondLiElement);
//////////////////////////second exercise

let newId = document.querySelector("#dI");
console.log(newId);

const listElement = [
    document.body.getAttribute('href');
    document.body.getAttribute('hreflang');c
    document.body.getAttribute('rel');
    document.body.getAttribute('target');
    document.body.getAttribute('type');
]
console.log(listElement);

//////////
let styleP = document.body.querySelector('#text');
console.log(styleP);

styleP.style.fontSize = '25px';
styleP.style.fontWeight = '900';
styleP.style.backgroundColor = 'red';
styleP.style.color= 'white';
styleP.style.padding = '2rem';


