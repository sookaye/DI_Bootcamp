document.addEventListener("DOMContentLoaded", function () {

    const newTache = document.getElementById("newTask");
    const addTache = document.getElementById("addTask");
    const taskD = document.getElementById("task");
    const sortD = document.getElementById("sortDone");

    addTache.addEventListener("click", function () {
        
        const newText = newTache.value.trim();

        if (newText !== "") {
            const listItem = document.createElement("li");
            listItem.innerHTML = `
                <span>${newText}</span>
                <button class="button-style3 done-button">Done</button>
                <button class="button-style3 delete-button">Delete</button>
            `;
            taskD.appendChild(listItem);
            newTache.value = "";
        }
    });

    taskD.addEventListener("click", function (event) {
        const target = event.target;

        if (target.classList.contains("done-button")) {
            const listItem = target.parentElement;
            listItem.style.textDecoration = "line-through";
        } 
        else if (target.classList.contains("delete-button")) {
            const listItem = target.parentElement;
            listItem.remove();
        }
    });

    sortD.addEventListener("change", function () {

        const items = Array.from(taskD.children);

        const sortedItems = items.sort((a, b) => {
            const aDone = a.style.textDecoration === "line-through";
            const bDone = b.style.textDecoration === "line-through";
            return aDone - bDone;
        });
        taskD.innerHTML = "";

        sortedItems.forEach((item) => {
            taskD.appendChild(item);
        });
    });
});