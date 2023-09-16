const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`;

const fetchAPi = document.querySelector('#fetch');
const deleteButton = document.querySelector('#deleteall');

fetchAPi.addEventListener('click', function(event) {
	const category = document.getElementById("category").value;
	const url = `${apiUrl}&tag=${category}`;
	fetch(url)
		.then(response => response.json())
		.then(data => {
			const imageUrl = data.data.images.original.url;
			const img = document.createElement("img");
			img.src = imageUrl;
			const deleteButton = document.createElement("button");
			deleteButton.textContent = "Delete";
			deleteButton.addEventListener("click", function() {
				img.remove();
				deleteButton.remove();
			});        
			document.getElementById("gif-container").appendChild(img);
			document.getElementById("gif-container").appendChild(deleteButton);
		})
		.catch(error => console.error(error));
});

deleteButton.addEventListener('click', function(event) {
        document.getElementById("gif-container").innerHTML = "";
})
