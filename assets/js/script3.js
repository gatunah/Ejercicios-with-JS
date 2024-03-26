let sumar = document.getElementById("btn-sumar");
let restar = document.getElementById("btn-restar");

sumar.addEventListener("click", function () {
  let num1 = parseInt(document.getElementById("valor1").value);
  let num2 = parseInt(document.getElementById("valor2").value);
  let res = num1 + num2;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Debe ingresar ambos valores y solo números");
  } else {
    document.querySelector(".resultado").innerHTML = res;
  }
//   console.log(`resultado es: ${res} ${num1} ${num2}`);
});

restar.addEventListener("click", function () {
  let num1 = parseInt(document.getElementById("valor1").value);
  let num2 = parseInt(document.getElementById("valor2").value);
  let res = num1 - num2;

  if (isNaN(num1) || isNaN(num2)) {
    alert("Debe ingresar ambos valores y solo números");
  } else if (res >= 0) {
    document.querySelector(".resultado").innerHTML = res;
  } else {
    document.querySelector(".resultado").innerHTML = 0;
  }
//   console.log(`resultado es: ${res} ${num1} ${num2}`);
});
