let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText);
      console.log(data);
    }
  };

  xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q=hilarious&rating=1&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My", true);
  xhr.send();