window.addEventListener('DOMContentLoaded', function() {
    var loadButton = document.getElementById('loadButton');
    var loadingMessage = document.getElementById('loadingMessage');
    var characterInfo = document.getElementById('characterInfo');
  
    loadButton.addEventListener('click', function() {
      loadingMessage.style.display = 'block';
      characterInfo.innerHTML = '';
  
      // Call the function to get data from the API
      getStarWarsCharacterData(function(data) {
        loadingMessage.style.display = 'none';
  
        var name = data.name;
        var height = data.height;
        var gender = data.gender;
        var birthYear = data.birth_year;
        var homeWorldUrl = data.homeworld;
  
        // Call the function to get the home world data
        getHomeWorld(homeWorldUrl, function(homeWorldData) {
          var homeWorldName = homeWorldData.name;
  
          // Display the character info on the DOM
          displayCharacterInfo(name, height, gender, birthYear, homeWorldName);
        });
      });
    });
  
    // Function to get Star Wars character data from the API
    function getStarWarsCharacterData(callback) {
      var apiUrl = 'https://www.swapi.tech/api/people';
  
      var xhr = new XMLHttpRequest();
      xhr.open('GET', apiUrl, true);
  
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var response = JSON.parse(xhr.responseText);
          var results = response.results;
  
          // Get a random character from the results
          var randomIndex = Math.floor(Math.random() * results.length);
          var character = results[randomIndex];
  
          callback(character);
        }
      };
  
      xhr.send();
    }
  
    // Function to get the home world data for a character
    function getHomeWorld(homeWorldUrl, callback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', homeWorldUrl, true);
  
      xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
          var homeWorldData = JSON.parse(xhr.responseText);
          callback(homeWorldData);
        }
      };
  
      xhr.send();
    }
  
    // Function to display the character info on the DOM
    function displayCharacterInfo(name, height, gender, birthYear, homeWorldName) {
      var info = document.createElement('div');
      info.innerHTML = '<h2>Name: ' + name + '</h2>' +
                       '<p>Height: ' + height + '</p>' +
                       '<p>Gender: ' + gender + '</p>' +
                       '<p>Birth Year: ' + birthYear + '</p>' +
                       '<p>Home World: ' + homeWorldName + '</p>';
  
      characterInfo.appendChild(info);
    }
  });
  