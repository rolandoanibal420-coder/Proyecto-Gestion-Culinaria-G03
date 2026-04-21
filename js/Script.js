// asi podemos eliminar una receta si quisieramos, es algo meramente visual y de confirmacion.
function eliminarReceta(boton) {
    let confirmar = confirm("¿vas a eliminar la receta?");
// el confim es una funcion nativa de los navegadores web que nos permiten mostrar al usuario un boton de confirmacion
    if (confirmar) {
  
        let fila = boton.parentNode.parentNode; //eliminar el registro entero de la tabla
        
        fila.remove();
        
        alert("¡Receta eliminada!");
    }
}


// limpia la receta asignada a un día
function limpiarDia(boton) {
    let spanReceta = boton.parentNode.querySelector('span');
    
    spanReceta.innerText = "Pendiente de asignar";
    
    console.log("Día limpiado");
}