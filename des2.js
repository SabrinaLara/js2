let name = prompt("Ingresa tu nombre");
let nickname = prompt("Ingresa tu apodo");

if ( (name !="") && (nickname !="") ) {
    alert("Hola, que tal: " + name + " o " + nickname);
}
else {
    alert("Por favor ingresa bien tus datos");
}

let age= parseInt(prompt("ingrese su edad"));

if (age >= 18) {
    alert("Eres mayor de edad");
} 

else {
    alert("No eres mayor de edad");
}

let money= parseInt(prompt("ingrese dinero que traerá"));

if (money < 200) {
    alert("Pasas al área baja");
}

else if (money == 200) {
    alert("Pasas al área media");
}

else if (money >= 500) {
    alert("Pasas al área mayor");
}

else {
    alert("No pasas a ningún área");
}