// Adicione o código JavaScript abaixo ao seu arquivo script.js

function createSnowflake() {
  const snowflake = document.createElement("div");
  snowflake.classList.add("snowflake");
  snowflake.style.left = Math.random() * window.innerWidth + "px";
  document.querySelector(".snowflakes").appendChild(snowflake);

  setTimeout(() => {
      snowflake.remove();
  }, 7000); // Tempo de vida de cada floco de neve
}

function createSnowflakes() {
  setInterval(createSnowflake, 400); // Intervalo para criar novos flocos de neve
}

createSnowflakes(); // Iniciar a criação de flocos de neve
