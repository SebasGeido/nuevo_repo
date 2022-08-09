itemsSeleccionados = 0
function contarItems () {
    if (this.itemsSeleccionados === 0){
        console.log(`Su carrito esta vacío`)
    }else{
        console.log(`Tiene ${this.itemsSeleccionados} articulos seleccionados`)
    }
}
function aplicarDescuento(precio, descuento) {
    let precioConDescuento = precio - precio * (descuento / 100);
    console.log(`El precio final es de ${precioConDescuento}`)
}
function contraseña() {
    let contraseña = prompt(`¿Cuál es el equipo más grande?`);
    while(contraseña != `Boca`) {
        alert("El usuario no le sabe al fulbo")
        contraseña = prompt(`¿Cuál es el equipo más grande?`)
    }
}
aplicarDescuento(1000, 30)
contarItems()
contraseña()