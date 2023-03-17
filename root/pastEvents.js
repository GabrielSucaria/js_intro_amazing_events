
const contenedorTarjetas = document.querySelector("#containerPastEvents");


function mostrarTarjetas(data){


    const events = data.events;
    const currentDate = data.currentDate;

    let tarjetas = "";

    contenedorTarjetas.innerHTML = "";


    for (const event of events) {

        if(event.date < currentDate){

            tarjetas +=`<div class="card" style="width: 18rem;">
            <img src="${event.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${event.name}</h5>
                <p class="card-text">${event.date}</p>
                <p class="card-text">${event.description}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
            </div>`
        }


    }

    return tarjetas;
}

contenedorTarjetas.innerHTML = mostrarTarjetas(data);
