swal("Hello Theacher!", "Lista Para Cuestinar Mi Tercer Trabajo", "success");


function preguntarPremio() {

    let date = parseInt(document.getElementById("date").value);
    let i = "mujer";
    let a = "hombre";

    if (date <= 10) {
        alert('¡Felicidades, Ganaste Un Jugo!');
   
    } else if (date >= 18) {
        alert('Felicidades, Ganaste Una Cerveza');

    } else if (date = i) {
        alert('¡Felicidades, Ganaste Una Porción de Pizza Hawaiana!');

    } else if (date = a) {
        alert('¡Felicidades, Ganaste una Porción de Pizza Tres Carnes!');

    } else {
        alert('Lo Sentimos, Desafortunadamente No ha Ganado Nada')
    }
    document.getElementById("preguntarPremio").innerHTML = html;
}

