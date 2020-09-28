let baseAlimentos = localStorage.getItem('articulos')
baseAlimentos =  baseAlimentos !== null ?  baseAlimentos.split(','): []


console.log('baseAlimentos B0', baseAlimentos)

let agregar = () => {
    alert('Se esta Agregando el Articulo')
   let nombreArticulo = document.getElementById('ingreAlim').value
   baseAlimentos.push(nombreArticulo)
   localStorage.setItem('Articulos', baseAlimentos)
}

let listarArticulos = () => {

    let html = ''
    for(let i = 0; i <  baseAlimentos.length; i++) {
        html += `<div class= 'col-12'> ${baseAlimentos[i]} </div>`
    }
    document.getElementById('listaBase').innerHTML = html
}