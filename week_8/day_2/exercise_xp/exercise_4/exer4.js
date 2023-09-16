const students = [
    {name: "Ray", course: "Computer Science", isPassed: true}, 
    {name: "Liam", course: "Computer Science", isPassed: false}, 
    {name: "Jenner", course: "Information Technology", isPassed: true}, 
    {name: "Marco", course: "Robotics", isPassed: true}, 
    {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
    {name: "Jamie", course: "Big Data", isPassed: false}
];

const passedStudents = students.filter(word => word.isPassed === true);
console.log(passedStudents);

passedStudents.forEach(passedStudents => {
    console.log(`Good job ${passedStudents.name}, you passed the course in ${passedStudents.course}`)
});