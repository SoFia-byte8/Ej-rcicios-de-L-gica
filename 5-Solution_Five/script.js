swal("Hello Theacher!", "Lista Para Cuestinar Mi Quinto Trabajo", "success");

function multiplicar() {

    num = document.getElementById("num").value;
    num = parseInt(num);

    for (let i = 1; i <= 10; i++) {
        multiplicar = num * i;
        document.write(num + "x" + i + "=" + multiplicar + "<br>");
    }
}