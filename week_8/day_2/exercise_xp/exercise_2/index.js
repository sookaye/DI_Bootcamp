const users = [{ firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
             { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
             { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
             { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
             { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
             { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
             { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
            ];

const welcomeStudents = users.map((n) => `Hello ${n.firstName}`);
console.log(welcomeStudents);

const fullStackResident = users.filter(word => word.role === "Full Stack Resident");
console.log(fullStackResident);

const fullStackResident2 = fullStackResident.map((n) => `${n.lastName}`);
console.log(fullStackResident2);