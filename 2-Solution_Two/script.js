swal("Hello Theacher!", "Lista Para Cuestinar Mi Segundo Trabajo", "success");
let num = parseInt()

//Es un comodín, para indicar cualquier clase <?>.El valor a ultilizar si la Condicion es Falsa
function parImpar() {

    let num = parseInt(document.getElementById("num").value);
    let clase = (num % 2) ? "Impar" : "Par";

    document.getElementById("resultado").innerHTML = " El Número: " + num + " Es " + clase;
    return false;
}
//console.log()
