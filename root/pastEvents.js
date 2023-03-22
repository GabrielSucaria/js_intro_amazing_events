
const contenedorTarjetas = document.querySelector("#containerPastEvents");

let events = "";
let currentDate = "";

function traerDatos(){
    fetch('https://mindhub-xj03.onrender.com/api/amazing' || './data.json')
    .then(response => response.json())
    .then(datosApi =>{
        console.log(datosApi)
        events = datosApi.events;
        currentDate = datosApi.currentDate;
        console.log(events)
        console.log(currentDate)
        contenedorTarjetas.innerHTML = mostrarTarjetas(events,currentDate);
    })
    .catch(error => console.log(error.message))
}

traerDatos()


function mostrarTarjetas(array,fecha){

    let tarjetas = "";

    contenedorTarjetas.innerHTML = "";
    
    if(array != 0){

        array.forEach(event => {

            if(event.date < fecha){

                tarjetas += `<div class="card" style="width: 18rem;">
                <img src="${event.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${event.name}</h5>
                    <p class="card-text">${event.date}</p>
                    <p class="card-text">${event.description}</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
                </div>`
            }

        })
    
        return tarjetas;
    } 
    
    else{

        tarjetas = `<h3>Event not found</h3>`
        return tarjetas
    }

}

//contenedorTarjetas.innerHTML = mostrarTarjetas(events);


// Funcion de busqueda mediante input


let searchInput = document.getElementById("input");
searchInput.addEventListener("keyup",filtrarTarjeta);

function filtrarTarjeta(){

    let tarjetafiltrada = [];

    if(searchInput.value != ""){

        tarjetafiltrada.push(...events.filter(event => event.name.toLowerCase()
                            .includes(searchInput.value.toLowerCase())))

        console.log(tarjetafiltrada)
        contenedorTarjetas.innerHTML = mostrarTarjetas(tarjetafiltrada);  

    }
    else{
        contenedorTarjetas.innerHTML = mostrarTarjetas(events,currentDate);
      }
}