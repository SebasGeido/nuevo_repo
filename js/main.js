itemsSeleccionados = 0
let avisoContacto = localStorage.getItem(`avisoContacto`)
if(avisoContacto != `true`) {
    setTimeout(()=> {
        Swal.fire({
            icon: 'question',
            title: 'Hey!',
            text: '¿Tienes alguna duda o consulta? No dudes en contactarte con nosotros',
            footer: '<a href="./pages/contacto.html">Ir a pagina de Contacto</a>',
            color: `Black`,
          })
          localStorage.setItem(`avisoContacto`, `true`)
    },15000)
}
function sinCamiseta () {
    Swal.fire({
        title: '¡Lo sentimos! La camiseta que seleccionaste no esta disponible. Seleccione otra.',
        width: 600,
        padding: '3em',
        color: '#143F6B',
        background: `url(https://i.pinimg.com/736x/80/05/36/800536363d097be1244d85726d754f39.jpg)`,
        backdrop: `
          rgba(0,0,123,0.4)
          url("/images/nyan-cat.gif")
          left top
          no-repeat
        `
    })
}
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
/* let titulo1 = document.getElementById("mainTitle");
titulo1.innerHTML = ; */
camisetasConIva.sort((a, b) => {
    if (a.precio > b.precio) {
        return 1;
    }
    if (a.precio < b.precio) {
        return -1;
    }
})
console.log(camisetasConIva)

function darkMode() {
    let el = document.body;
    el.classList.toggle(`darkMode`)
    localStorage.setItem(`color`, `black`)
}
function lightMode() {
    let el = document.body;
    el.classList.toggle(`darkMode`)
    localStorage.clear()
}
let bodyColor = localStorage.getItem(`color`)

if (bodyColor == `black`) {
    darkMode()
}