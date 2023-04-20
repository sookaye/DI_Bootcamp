const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

const usernames = [];
gameInfo.forEach((users) => {
    usernames.push(users.username + '!')
})

console.log(usernames);

const winners = [];

gameInfo.forEach((num) =>{
    if (num.score > 5) {
        winners.push(num.username)
    }
});

console.log(winners);

let totalScore = 0;

gameInfo.forEach((num) => {
  totalScore += num.score;
});

console.log('Total Score: ' + totalScore)