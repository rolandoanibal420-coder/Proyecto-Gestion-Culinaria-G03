// asi podemos eliminar una receta si quisieramos, es algo meramente visual.
function eliminarReceta(boton) {
    let confirmar = confirm("¿vas a eliminar la receta?");

    if (confirmar) {
  
        let fila = boton.parentNode.parentNode;
        
        fila.remove();
        
        alert("¡Receta eliminada!");
    }
}