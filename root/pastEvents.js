
const contenedorTarjetas = document.querySelector("#containerPastEvents");

const events = data.events;
const currentDate = data.currentDate;


function mostrarTarjetas(array){

    let tarjetas = "";

    contenedorTarjetas.innerHTML = "";
    
    if(array != 0){

        array.forEach(event => {

            if(event.date < currentDate){

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

        tarjetas = `<h3>No se encontro el evento</h3>`
        return tarjetas
    }

}

contenedorTarjetas.innerHTML = mostrarTarjetas(events);

//-----------------------------------------------------------------------


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
        contenedorTarjetas.innerHTML = mostrarTarjetas(events);
      }
}