
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

/*
        _id: 1,
        * "image":"https://amazingeventsapi.herokuapp.com/api/img/Feriadecomidas7.jpg",
        * "name":"Collectivities Party",
        "date":"2021-12-12",
        * "description":"Enjoy your favourite dishes, from different countries, in a unique event for the whole family.",
        "category":"Food Fair",
        "place":"Room A",
        "capacity":45000,
        "assistance":42756,
        "price":5
*/