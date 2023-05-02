const users = { user1: 18273, user2: 92833, user3: 90315 }
const usersArray = Object.entries(users);
console.log(usersArray);
const modifiedArray = usersArray.map(users => [users[0], users[1] * 2]);
console.log(modifiedArray);


