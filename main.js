let nombreP = document.querySelector("#nombre")
let numeroP = document.querySelector("#text")
let boton = document.querySelector("#bnombre")
let body = document.querySelector(".img")
let valor = 0
let valorT = ""

fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
    .then(respuesta => respuesta.json())
    .then(datos => {
        
        
    boton.addEventListener("click",()=>{
        valor = Number(numeroP.value)
        valorT = nombreP.value
        for(let i = 0; i < datos.results.length; i++){
            if(valorT === datos.results[i].name || valor === i+1)
            {
                fetch(`https://pokeapi.co/api/v2/pokemon/${i+1}`)
                .then(respuesta2 => respuesta2.json() )
                .then(datos2 =>{
                    body.innerHTML = `
                    <div class="img">
                        <h1>${datos2.name}  N.º${datos2.id}</h1>
                        <div id="info"> 
                            <img src="${datos2.sprites.other['official-artwork'].front_default}">
                            <div>
                                <h3>Altura</h3>
                                <h3>${datos2.height}</h3>
                                <h3>Peso</h3>
                                <h3>${datos2.weight}</h3>
                                <h3>Tipos</h3>
                                <h3>${datos2.types["0"].type.name} ${datos2.types["1"].type.name}</h3>
                            </div>
                        </div>
                    </div>`;
                    let info = document.getElementById("info")
                    info.style.display = "flex";
                    info.style.width = "590px";
                })
            }
        }
    })

    });