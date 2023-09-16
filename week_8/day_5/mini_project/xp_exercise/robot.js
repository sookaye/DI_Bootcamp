const robots = [
    {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz',
        imgURL: 'https://robohash.org/Leanne'
    },
    {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        imgURL: 'https://robohash.org/Ervine'
    },
    {
        id: 3,
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        imgURL: 'https://robohash.org/Jane'
    },
    {
        id: 4,
        name: 'Patricia Lebsack',
        username: 'Karianne',
        email: 'Julianne.OConner@kory.org',
        imgURL: 'https://robohash.org/Alice'
    },
    {
        id: 5,
        name: 'Chelsey Dietrich',
        username: 'Kamren',
        email: 'Lucio_Hettinger@annie.ca',
        imgURL: 'https://robohash.org/Nicholas'
    },
    {
        id: 6,
        name: 'Mrs. Dennis Schulist',
        username: 'Leopoldo_Corkery',
        email: 'Karley_Dach@jasper.info',
        imgURL: 'https://robohash.org/Emily'
    },
    {
        id: 7,
        name: 'Kurtis Weissnat',
        username: 'Elwyn.Skiles',
        email: 'Telly.Hoeger@billy.biz',
        imgURL: 'https://robohash.org/Kurtis'
    },
    {
        id: 8,
        name: 'Nicholas Runolfsdottir V',
        username: 'Maxime_Nienow',
        email: 'Sherwood@rosamond.me',
        imgURL: 'https://robohash.org/Maxime'
    },
    {
        id: 9,
        name: 'Glenna Reichert',
        username: 'Delphine',
        email: 'Chaim_McDermott@dana.io',
        imgURL: 'https://robohash.org/Delphine'
    }
  ];

const searchBox = document.querySelector('#search-box');
const cardContainer = document.querySelector('#card-container');

function displayCards() {
  const cardElements = robots.map((robot) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${robot.imgURL}" alt="robot">
      <h2>${robot.name}</h2>
      <p>${robot.email}</p>
    `;
    return card;
  });

  cardContainer.innerHTML = '';
  cardElements.forEach((card) => cardContainer.appendChild(card));
}

displayCards();

searchBox.addEventListener('input', () => {
  const searchQuery = searchBox.value.toLowerCase();
  const filteredRobots = robots.filter((robot) =>
    robot.name.toLowerCase().includes(searchQuery)
  );

  const filteredCardElements = filteredRobots.map((robot) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${robot.imgURL}" alt="robot">
      <h2>${robot.name}</h2>
      <p>${robot.email}</p>
    `;
    return card;
  });
  cardContainer.innerHTML = '';
  filteredCardElements.forEach((card) => cardContainer.appendChild(card));
});