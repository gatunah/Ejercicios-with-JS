let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function (event) {
  event.preventDefault();
  let txtNombre = document.getElementById("nombre").value;
  let txtAsunto = document.getElementById("asunto").value;
  let txtMensaje = document.getElementById("mensaje").value;

  if (validacionDatos(txtNombre, txtAsunto, txtMensaje)) {
    // console.log(`Nombre correcto: ${txtNombre}`);
    // console.log(`Asunto correcto: ${txtAsunto}`);
    // console.log(`Mensaje correcto: ${txtMensaje}`);
    document.querySelector(".resultado").innerHTML =
      "¡Mensaje enviado con éxito!";
  } else {
    document.querySelector(".resultado").innerHTML = "";
  }
});
function validacionDatos(txtNombre, txtAsunto, txtMensaje) {
  let resVal = true;
  let testNombreYmensaje = /^[a-zA-Z]{3,}(?: [a-zA-Z]+)*$/; //NOMBRE Y/O APELLIDO
  let testAsunto = /^[a-zA-Z]{4,}$/;

  let errorNombre = document.querySelector(".errorNombre");
  let errorAsunto = document.querySelector(".errorAsunto");
  let errorMensaje = document.querySelector(".errorMensaje");

  ////NOMBRE
  if (txtNombre.trim() === "") {
    errorNombre.innerHTML = "Nombre es requerido";
    resVal = false;
  } else if (!testNombreYmensaje.test(txtNombre)) {
    errorNombre.innerHTML =
      "El nombre debe tener al menos tres letras y solo contener letras";
    resVal = false;
  } else {
    errorNombre.innerHTML = "";
  }
  ////ASUNTO
  if (txtAsunto.trim() === "") {
    errorAsunto.innerHTML = "Asunto es requerido";
    resVal = false;
  } else if (!testAsunto.test(txtAsunto)) {
    errorAsunto.innerHTML =
      "El Asunto debe tener al menos cuatro letras y solo contener letras";
    resVal = false;
  } else {
    errorAsunto.innerHTML = "";
  }
  ////MENSAJE
  if (txtMensaje.trim() === "") {
    errorMensaje.innerHTML = "Mensaje es requerido";
    resVal = false;
  } else if (!testNombreYmensaje.test(txtMensaje)) {
    errorMensaje.innerHTML = "El Mensaje solo debe contener letras";
    resVal = false;
  } else {
    errorMensaje.innerHTML = "";
  }
  return resVal;
}
