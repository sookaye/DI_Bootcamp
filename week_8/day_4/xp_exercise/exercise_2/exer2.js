function displayStudentInfo(objUser){
    return `Your full name is ${objUser.first} ${objUser.last}`;
}

console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'}));
