
const tipoRopa =[
  {name: 'Remera', price: 1500},
  {name: 'Pollera', price:2500},
  {name:'Pantalon', price: 3500},
  {name: 'Buzo', price: 4000},
];

let tienda = prompt ('Bienvenidos a Skull World, ¿Deseas ingresar a nuestra tienda? (si/no)').toLowerCase(); 

if (tienda === 'si') {
  let cart = [];
  while (true) {
    console.log ('Prendas en stock:');

    for (let i = 0; i < tipoRopa.length; i++) {
      console.log(`${i + 1}. ${tipoRopa[i].name} - $${tipoRopa[i].price}`);
    }
    let choice = prompt ('Ingrese el número de prendas que deseas añadir al carrito (o "abandonar" para salir)):');

    if (choice === 'abandonar'){
      break;
    }
    else {
      choice =parseInt (choice);
      if (isNaN(choice) || choice < 1 || choice > tipoRopa.length) {
        console.log('Elección no válida, inténtelo de nuevo.');
      }
      
    else {
      cart.push(tipoRopa[choice - 1]);
          console.log(`${tipoRopa[choice - 1].name} added to cart.`);
    }
  }
}
console.log('Prendas en tu carrito de compras:');
    for (let i = 0; i < cart.length; i++) {
      console.log(`${i + 1}. ${cart[i].name} - $${cart[i].price}`);
    }
  
    
    let total = cart.reduce((acc, item) => acc + item.price, 0);
    console.log(`Precio total: $${total}`);

    let compra = prompt('¿Deseas completar tu compra? (si/no)').toLowerCase();
    if (compra === 'si') {
      console.log('¡Gracias por tu compra!');
    } else {
      console.log('Compra cancelada.');
    }
  } else {
    console.log('Gracias por visitar Skull World. ¡Vuelve pronto!');
  }