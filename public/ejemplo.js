var igv=0.19;
var nota=18.5;

console.log(igv);
igv=0.18;

console.log(igv);

igv++; /* igv=igv+1;*/

console.log(nota)
console.log(igv);
nota=igv;

console.log("el valor de nota es: "+nota);  

var visible=0;

console.log(!visible);


p=true;
q=false;

console.log("tabla para el AND");
console.log(p&&q);

console.log("tabla para el OR");
console.log(p||q);

var num1=2;
var num2=3;

suma=num1+num2;
multiplicar=num1*num2;
restar=num1-num2;
dividir=num1/num2;

console.log(suma);
console.log(multiplicar);
console.log(restar);
console.log(dividir);

/******************************/
var mensaje="Probando escribir desde JS";

var bloqueJs= document.getElementById('bloque-js');
/*Imprimir dentro del bloque*/

bloqueJs.innerHTML=mensaje;

document.write('escribiendo una nueva línea en el html');
console.log(mensaje);

let resultado;

resultado=Math.random();
resultado=Math.floor(Math.random()*10);
console.log(resultado);