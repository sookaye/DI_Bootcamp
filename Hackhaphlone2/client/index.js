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

//top-nav sticky
window.addEventListener('DOMContentLoaded', event => {
  let navbarShrink = function () {
      const navbarCollapsible = document.body.querySelector('#mainNav');
      if (!navbarCollapsible) {
          return;
      }
      if (window.scrollY === 0) {
          navbarCollapsible.classList.remove('navbar-shrink')
      } else {
          navbarCollapsible.classList.add('navbar-shrink')
      }

  };

  navbarShrink();

  document.addEventListener('scroll', navbarShrink);

  const mainNav = document.body.querySelector('#mainNav');
  if (mainNav) {
      new bootstrap.ScrollSpy(document.body, {
          target: '#mainNav',
          rootMargin: '0px 0px -40%',
      });
  };

  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
          if (window.getComputedStyle(navbarToggler).display !== 'none') {
              navbarToggler.click();
          }
      });
  });

});

function calculateTotal() {
  let serviceSelect = document.getElementById('serviceSelect');
  let price = serviceSelect.options[serviceSelect.selectedIndex].value;
  let quantity = document.getElementById('quantity').value;
  let total = price * quantity;
  document.getElementById('totalCost').innerHTML = 'Prix : $' + total.toFixed(2);
}

function resetForm() {
  document.getElementById('serviceSelect').selectedIndex = 0;
  document.getElementById('quantity').value = 1;
  document.getElementById('totalCost').innerHTML = '';
}

function onServiceSelectChange() {
  let serviceSelect = document.getElementById('serviceSelect');
  let selectedValue = serviceSelect.options[serviceSelect.selectedIndex].value;
  if (selectedValue === '0') {
      document.getElementById('phoneNumberModal').style.display = 'block';
  } else {
      document.getElementById('phoneNumberModal').style.display = 'none';
  }
}

function openPhoneNumberModal() {
  document.getElementById('phoneNumberModal').style.display = 'block';
}

function closeModal() {
  document.getElementById('phoneNumberModal').style.display = 'none';
}

window.onload = function() {
  document.getElementById('serviceSelect').onchange = function() {
      onServiceSelectChange();
  };
  document.getElementById('quantity').onchange = function() {
      calculateTotal();
  };
  document.getElementById('resetBtn').onclick = function() {
      resetForm();
  };
  document.getElementById('phoneNumberModalBtn').onclick = function() {
      openPhoneNumberModal();
  };
  document.getElementById('closeModalBtn').onclick = function() {
      closeModal();
  };
};

