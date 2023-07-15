let form = document.createElement("form");
const usuario = [];
const fechaActual = new Date();
let id = 1;

class cliente {
  constructor(info) {
    this.id = id++;
    this.dni = parseInt(info.dni);
    this.nombre = info.nombre.toUpperCase();
    this.apellido = info.apellido.toUpperCase();
    this.nacimiento = info.nacimiento;
    const edad = new Date(Date.parse(info.nacimiento));
    this.edad = Math.floor((fechaActual - edad) / (365.25 * 24 * 60 * 60 * 1000));
    this.email = info.email;
    this.telefono = parseInt(info.telefono);
    this.nacimiento = info.nacimiento;
    this.agenda = false;
  }
  agendado() {
    this.agenda = true;
  }
}

const cargaCliente = (e) => {
  e.preventDefault();

  let formulario = e.target;

  let DNI = formulario.dni.value;
  let NOMBRE = formulario.nombre.value;
  let APELLIDO = formulario.apellido.value;
  let NACIMIENTO = formulario.nacimiento.value;
  let EMAIL = formulario.email.value;
  let TELEFONO = formulario.tel.value;
  usuario.push(
    new cliente({
      dni: DNI,
      nombre: NOMBRE,
      apellido: APELLIDO,
      nacimiento: NACIMIENTO,
      email: EMAIL,
      telefono: TELEFONO,
    })
  );
  guardar();
  mostrarMensaje("AGREGADO");
  limpiarForm();
};

function limpiarForm() {
  form.reset();
}

function busqPorId() {
  let idConsulta = Number(prompt("Ingrese ID de Cliente"));
  const person = usuario.find((p) => p.id === idConsulta);
  if (person) {
    mostrarMensaje(`${person.id}- ${person.nombre} ${person.apellido}\n Edad:${person.edad}\n La agenda es: ${person.agenda}`);
    return [true, person.id];
  } else {
    mostrarMensaje("Usuario inválido");
  }
}

function guardar() {
  
  localStorage.setItem("tienda", JSON.stringify(usuario));
}

function mostrar() {
  const tiendaUsuario = JSON.parse(localStorage.getItem("tienda"));
  if (tiendaUsuario && tiendaUsuario.length > 0) {
    const lista = document.createElement("ol");
    tiendaUsuario.forEach((tiendaUsuario) => {
      const item = document.createElement("li");
      item.textContent = JSON.stringify(tiendaUsuario.nombre + " " + tiendaUsuario.apellido + " de " + tiendaUsuario.edad + " años").replace(/\"/g, "");
      lista.appendChild(item);
    });
    document.body.appendChild(lista);
  } else {
    mostrarMensaje('No hay cliente registrado');
  }
}

function mostrarMensaje(mensaje) {
  let mensajeElement = document.createElement('p');
  mensajeElement.textContent = mensaje;
  document.body.appendChild(mensajeElement);
  setTimeout(() => {
    mensajeElement.remove();
  }, 3000);
}


let inputDni = document.createElement("input");
inputDni.type = "number";
inputDni.name = "dni";
inputDni.placeholder = "DNI";

let inputNombre = document.createElement("input");
inputNombre.type = "text";
inputNombre.name = "nombre";
inputNombre.placeholder = "Nombre";

let inputApellido = document.createElement("input");
inputApellido.type = "text";
inputApellido.name = "apellido";
inputApellido.placeholder = "Apellido";

let inputNacimiento = document.createElement("input");
inputNacimiento.type = "date";
inputNacimiento.name = "nacimiento";

let inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.name = "email";
inputEmail.placeholder = "Correo electrónico";

let inputTel = document.createElement("input");
inputTel.type = "tel";
inputTel.name = "tel";
inputTel.placeholder = "Celular";


let botonAgregar = document.createElement("button");
botonAgregar.type = "submit";
botonAgregar.textContent = "Agregar";

let botonConsultar = document.createElement("button");
botonConsultar.type = "button";
botonConsultar.textContent = "Consultar";

let botonMostrar = document.createElement("button");
botonMostrar.type = "button";
botonMostrar.textContent = "Mostrar";


form.appendChild(inputDni);
form.appendChild(inputNombre);
form.appendChild(inputApellido);
form.appendChild(inputNacimiento);
form.appendChild(inputEmail);
form.appendChild(inputTel);
form.appendChild(botonAgregar);
form.appendChild(botonConsultar);
form.appendChild(botonMostrar);


document.body.appendChild(form);

form.addEventListener("submit", cargaCliente);
botonConsultar.addEventListener("click", busqPorId);
botonMostrar.addEventListener("click", mostrar);


/* a esto le falta css*/