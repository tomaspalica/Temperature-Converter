const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");
const kelvin = document.getElementById("kelvin");
const list = document.querySelector(".scale-list");

list.addEventListener("change", (e) => {
  const initialValue = +e.target.value;
  console.log((fahrenheit.value = 5));
  console.log(e.target.name);
  switch (e.target.name) {
    case "celsius":
      kelvin.value = (initialValue + 273.15).toFixed(2);
      fahrenheit.value = (initialValue * 1.8 + 32).toFixed(2);
      break;
    case "fahrenheit":
      celsius.value = ((initialValue - 32) / 1.8).toFixed(2);
      kelvin.value = ((initialValue - 32) / 1.8 + 273.15).toFixed(2);
      break;
    case "kelvin":
      celsius.value = (initialValue - 273.15).toFixed(2);
      fahrenheit.value = ((initialValue - 273.15) * 1.8 + 32).toFixed(2);
  }
});
