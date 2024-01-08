document.addEventListener("DOMContentLoaded", function () {
    const colorPalette = document.querySelector(".color-palette");
    const drawingGrid = document.querySelector(".drawing-grid");
  
    const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"];
  
    // Create color palette
    colors.forEach(color => {
      const colorDiv = document.createElement("div");
      colorDiv.classList.add("color");
      colorDiv.style.backgroundColor = color;
      colorDiv.addEventListener("click", () => selectColor(color));
      colorPalette.appendChild(colorDiv);
    });
  
    // Create drawing grid
    for (let i = 0; i < 100; i++) {
      const square = document.createElement("div");
      square.classList.add("square");
      square.addEventListener("mousedown", startDrawing);
      square.addEventListener("mouseup", stopDrawing);
      square.addEventListener("mouseover", draw);
      drawingGrid.appendChild(square);
    }
  
    let isDrawing = false;
    let currentColor = colors[0];
  
    function selectColor(color) {
      currentColor = color;
    }
  
    function startDrawing() {
      isDrawing = true;
      draw(event.target);
    }
  
    function stopDrawing() {
      isDrawing = false;
    }
  
    function draw(square) {
      if (isDrawing) {
        square.style.backgroundColor = currentColor;
      }
    }
  });
  