swal("Hello Theacher!", "Lista Para Cuestinar Mi Sexto Trabajo", "success");

function valorMatricula() {

    let num = parseInt(document.getElementById("num").value);

    if (num < 3) {
        alert("¡Su Costo es de 1'000.000 de Pesos (NO HAY DESCUENTO)");
   
    }else if (num == 3,4 ) {
        alert('(Su Descuento es del 5%)');

    } else if (num >= 5 ) {
        alert('¡Felicidades!,(Su Descuento es del 50%)');

    } else {
        alert('Error, Su Promedios No es Valido');
    }
    document.getElementById("num").innerHTML = valorMatricula;
}
