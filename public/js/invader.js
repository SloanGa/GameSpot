const app = {
  invaderContainer: document.querySelector("#invader"),
  pixelsContainer: document.createElement("div"),
  eachPixels: [],
  button: "",
  gridValue: 0,
  pixelValue: 0,
  colorPallet: document.querySelectorAll(".color"),

  // Create form
  init: () => {
    const inputGrid = document.createElement("input");
    inputGrid.classList.add("input-field");
    inputGrid.placeholder = "Taille de la grille";

    const inputPixel = document.createElement("input");
    inputPixel.classList.add("input-field");
    inputPixel.placeholder = "Taille de pixels";

    app.button = document.createElement("button");
    app.button.classList.add("btn");
    app.button.textContent = "Valider";

    const formContainer = document.querySelector(".configuration");
    formContainer.appendChild(inputGrid);
    formContainer.appendChild(inputPixel);
    formContainer.appendChild(app.button);

    // Create pixel container
    app.pixelsContainer.setAttribute("id", "pixelContainer");
    app.invaderContainer.appendChild(app.pixelsContainer);
    inputGrid.addEventListener("input", (e) => {
      app.gridValue = e.target.value;
    });

    inputPixel.addEventListener("input", (e) => {
      app.pixelValue = e.target.value;
    });

    app.button.addEventListener("click", (e) => {
      e.preventDefault();
      app.pixelsContainer.innerHTML = ``;
      app.createPixel(app.gridValue, app.pixelValue);
    });
  },

  // This function create pixel div
  createPixel: (grids, pixels) => {
    for (let i = 0; i < grids * grids; i++) {
      const pixelsElement = document.createElement("div");
      pixelsElement.setAttribute("id", "pixelsElement");
      app.pixelsContainer.appendChild(pixelsElement);
      pixelsElement.style.height = `${pixels}px`;
      pixelsElement.style.width = `${pixels}px`;
    }
    // Adjust width and heigth of pixel container according to pixels and grids
    app.pixelsContainer.style.height = `${pixels * grids + grids * 4}px`;
    app.pixelsContainer.style.width = `${pixels * grids + grids * 4}px`;

    app.eachPixels = document.querySelectorAll("#pixelsElement");

    // allow choose color
    let colorId;
    app.colorPallet.forEach((color) => {
      color.addEventListener("click", (e) => {
        colorId = e.target.id;
      });
      app.eachPixels.forEach((pixel) => {
        pixel.addEventListener("click", (e) => {
          pixel.className = colorId;
        });
      });
    });
  },
};

app.init();
