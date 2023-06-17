
function mostrarMensajeCrearUsuario() {
  alert("Bienvenidos a Skull World, para crear su cuenta, llene los siguientes campos");
}

function mostrarMensajeUsuarioCreado() {
  alert("Su cuenta fue creada con éxito. Por favor, inicie sesión");
}

mostrarMensajeCrearUsuario();

let usuario = prompt("Ingrese su nombre de usuario");
let clave = prompt("Ingrese su clave de acceso");

mostrarMensajeUsuarioCreado();

let usuarioAutorizado;
let intento;

for (let i = 0; i < 3; i++) {
  usuarioAutorizado = prompt("Ingrese su usuario");

  if (usuarioAutorizado !== usuario) {
      continue;
  }

  intento = prompt("Ingrese su clave");

  if (clave !== intento) {
      alert("Usuario o clave incorrecta. Vuelva a intentarlo.");
      continue;
  }

  alert("Sesión iniciada con éxito");
  break;
}