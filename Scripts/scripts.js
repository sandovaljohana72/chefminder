const cells = document.querySelectorAll(".meal-cell");
const saveButton = document.getElementById("save-button");

// Cargar datos del calendario al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  const savedData = JSON.parse(localStorage.getItem("weeklyMenu"));
  if (savedData) {
    cells.forEach((cell, index) => {
      cell.textContent = savedData[index] || "";
    });
  }
});

// Guardar el calendario al hacer clic en el botón
saveButton.addEventListener("click", () => {
  const menuData = Array.from(cells).map(cell => cell.textContent);
  localStorage.setItem("weeklyMenu", JSON.stringify(menuData));
  alert("Menu saved successfully!");
});
