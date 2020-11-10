// En este ejercicio deberéis crear un array de objetos a partir de la siguiente lista de usuarios:
//  * name: usuario1, country: spain, money: 199, premiumAccount: true
//  * name: usuario2, country: france, money: 0, premiumAccount: false
//  * name: usuario3, country: spain, money: 537, premiumAccount: false
//  * name: usuario4, country: italy, money: 1004, premiumAccount: true
//  * name: usuario5, country: spain, money: 250, premiumAccount: false
//  * name: usuario6, country: ireland, money: 799, premiumAccount: true
//  * name: usuario7, country: spain, money: 3345, premiumAccount: false

// Este array de usuarios debe generarse en una función llamada "createUsers". Al generar el array hay que asignarlo a una variable que haya sido declarada globalmente fuera de la función.

// Después de crear el array, deberéis realizar un filtrado empleando el método del objeto "Array", "filter".
// Este filtrado deberá generar otro array con los usuarios que sean de españa y que tengan más de 200 euros.
// El filtrado se realizará desde una función llamada "filterUsers" que recibirá por parámetros la lista de usuarios y devolverá el array filtrado.
// Las dos últimas instrucciones de la función "onLoad" deben ser dos console.log para mostrar los dos arrays.
// Utilizad constantes siempre que sea posible.
// Suerte!

window.addEventListener("load", onLoad);

function onLoad() {
  console.log("hi");

  var arrayUsuario = [];

  createUsers();

  console.log(arrayUsuario);
  console.log(filterUsers(arrayUsuario));

  function createUsers() {
    var objeto1 = {
      name: "usuario1",
      country: "spain",
      money: 199,
      premiumAccount: true
    };

    var objeto2 = {
      name: "usuario2",
      country: "france",
      money: 0,
      premiumAccount: false
    };
    var objeto3 = {
      name: "usuario3",
      country: "spain",
      money: 537,
      premiumAccount: false
    };
    var objeto4 = {
      name: "usuario4",
      country: "italy",
      money: 1004,
      premiumAccount: true
    };
    var objeto5 = {
      name: "usuario1",
      country: "spain",
      money: 250,
      premiumAccount: true
    };
    var objeto6 = {
      name: "usuario6",
      country: "ireland",
      money: 799,
      premiumAccount: true
    };
    var objeto7 = {
      name: "usuario7",
      country: "spain",
      money: 3345,
      premiumAccount: false
    };
    arrayUsuario = [3, 4, 6];

    arrayUsuario = [
      objeto1,
      objeto2,
      objeto3,
      objeto4,
      objeto5,
      objeto6,
      objeto7
    ];
  }

  function filterUsers(arrayUsuario) {
    var resultado = [];

    for (let i = 0; i < arrayUsuario.length; i++) {
      if (arrayUsuario[i].country == "spain" && arrayUsuario[i].money > 200) {
        resultado.push(arrayUsuario[i]);
      }
    }
    return resultado;
  }
}
