

























/*

function init(){

  alert("Bienvenidos a Skull World, para crear su cuenta, llene los siguientes campos");

let nuevoUsuario = crearUsuario()

  autenticarUsuario(nuevoUsuario)

}


function crearUsuario(){

  let usuario = {nombre:"",clave:""}

  usuario.nombre = prompt("Ingrese su nombre de usuario");

  usuario.clave= prompt("Ingrese su clave de acceso");

  if(usuario.nombre && usuario.clave !== undefined){

    alert("Su cuenta fue creada con éxito. Por favor, inicie sesión");

    return usuario

  }else{

    alert("error al crear el usuario")

  }

}


function autenticarUsuario(u){



  for (let i = 0; i < 3; i++) {

    let usuarioAutenticacion = prompt("Ingrese su usuario");

    let claveUsuario;

    if (u.nombre == usuarioAutenticacion) {

      claveUsuario = prompt("introduzca su clave")

      if(u.clave == claveUsuario){

        alert("Usuario valido, iniciando sistema")

        i = 4;

      }else{

        alert("clave no valida")

        i++

      }

    }else{

      alert("Usuario no valido")

      i++;


    }


  }

}



*/

