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
    })
}
fetch('productos.json')
    .then((res) => res.json())
    .then((json) => {
        let html = ' ';
        json.forEach((camiseta) => {
            if(camiseta.Stock == true){
                html += `<div class="containerArticulo">
                            <a href="">
                                <img class="IMGcamiseta"
                                src="${camiseta.link}"
                                alt="Camiseta Boca Juniors Titular 2022"
                                />
                                ${camiseta.Nombre} <br /> $${camiseta.Precio}
                            </a>
                        </div>`;
            }else {
                html += `<div class="containerArticulo">
                <a onclick="sinCamiseta()">
                    <img class="IMGcamiseta"
                    src="${camiseta.link}"
                    alt="Camiseta Boca Juniors Titular 2022"
                    />
                    ${camiseta.Nombre} <br /> $${camiseta.Precio}
                </a>
            </div>`;
            }
        }); 
        document.getElementById('catalogo').innerHTML = html;
    })
function darkMode() {
    let el = document.body;
    el.classList.toggle(`darkMode`)
    localStorage.setItem(`color`, `black`)
}
function lightMode() {
    let el = document.body;
    el.classList.toggle(`darkMode`)
    localStorage.removeItem(`color`)
}
let bodyColor = localStorage.getItem(`color`)

if (bodyColor == `black`) {
    darkMode()
}