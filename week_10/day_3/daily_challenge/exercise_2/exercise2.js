function getSunriseTime(lat, lng) {
    const url = `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`;
    return fetch(url)
      .then(response => response.json())
      .then(data => data.results.sunrise);
  }

  function handleFormSubmit(event) {
    event.preventDefault();

    const city1Lat = document.getElementById('city1Lat').value;
    const city1Lng = document.getElementById('city1Lng').value;
    //
    const city2Lat = document.getElementById('city2Lat').value;
    const city2Lng = document.getElementById('city2Lng').value;

    const promise1 = getSunriseTime(city1Lat, city1Lng);
    const promise2 = getSunriseTime(city2Lat, city2Lng);

    Promise.all([promise1, promise2])
      .then(results => {
        const sunrise1 = results[0];
        const sunrise2 = results[1];

        const sunriseResults = document.getElementById('sunriseResults');
        sunriseResults.innerHTML = `Sunrise in City 1: ${sunrise1}<br>Sunrise in City 2: ${sunrise2}`;
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  const form = document.getElementById('sunriseForm');
  form.addEventListener('submit', handleFormSubmit);