//variable para guardar datos
var objetosSeleccionados=[];



//funcion para los modal de promocion
function primeraFuncion(){
    const modalEntrada= new bootstrap.Modal("#modalEntrada");
    modalEntrada.show();
}


function añaCar(objeto){
    //obtener el elemento de ubicacion
    var contenedor= objeto.parentElement.parentElement;
    //datos del producto
    var nombre= contenedor.getElementsByTagName("h3")[0];
    var precio= contenedor.getElementsByTagName("p")[0];
    var precioFinal= contenedor.getElementsByTagName("p")[1];

    //crear el producto
    var producto={
        "nombre":nombre.innerText,
        "precio": precio.innerText, 
        "precioFinal": precioFinal.innerText,
    }

    //añadir al array

    objetosSeleccionados.push(producto);




    console.log(producto);

    

}


function actualizarLista(){
    var lista=document.getElementById("listaCarrito");
    //crear el html
    var texto="";
    objetosSeleccionados.forEach(element=>{
         texto= texto+"<p>"+element.nombre+"</p>";
         texto= texto+"<p>"+element.precio+"</p>";
         texto= texto+"<p>"+element.precioFinal+"</p>";

    });
    lista.innerHTML=texto;

}