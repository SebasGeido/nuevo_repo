itemsSeleccionados = 0
class Camiseta {
    constructor(nombre, precio, seleccionado) {
        this.nombre = nombre
        this.precio = precio
        this.seleccionado = seleccionado
    }
}
const camisetas = [];
camisetas.push(new Camiseta(`BocaTit22`, 10000, true))
camisetas.push(new Camiseta("BocaSup22", 12000, false))
camisetas.push(new Camiseta("BocaAlt22", 12000, false))
camisetas.push(new Camiseta("RivTit22", 10000, true))
camisetas.push(new Camiseta("RivSup22", 12000, false))
camisetas.push(new Camiseta("RivArq22", 14000, false))
camisetas.push(new Camiseta("RivAlt22", 15000, false))
function contarSeleccionados(_seleccionados) {
    if (_seleccionados == true)
        this.itemsSeleccionados = itemsSeleccionados + 1
}
function contarItems() {
    if (this.itemsSeleccionados === 0)
        console.log(`Su carrito esta vacío`)
    else {
        console.log(`Tiene ${this.itemsSeleccionados} articulos seleccionados`)
    }
}
function aplicarDescuento(precio, descuento, nombre) {
    this.precioConDescuento = precio - precio * (descuento / 100);
    console.log(`El precio final de ${nombre} es de ${precioConDescuento}`)
}
for (const Camiseta of camisetas) {
    aplicarDescuento(Camiseta["precio"], 30, Camiseta["nombre"])
}
for (const Camiseta of camisetas) {
    contarSeleccionados(Camiseta["seleccionado"])
}
contarItems()
let camisetasConIva = camisetas.map((el) => {
    return {
        nombre: el.nombre,
        precio: el.precio * 1.21,
        seleccionado: el.seleccionado
    }
})
camisetasConIva.sort((a, b) => {
    if (a.precio > b.precio) {
        return 1;
    }
    if (a.precio < b.precio) {
        return -1;
    }
})
console.log(camisetasConIva)
let titulo1 = document.getElementById("mainTitle")
titulo1.innerHTML = prompt("Ingrese un titulo")
