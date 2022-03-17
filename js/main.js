let indice = 0;

let pokeImageContainer = document.getElementById("pokeImageContainer")
let pokebg = document.getElementById("pokebg");

const pokeImage = (url) => {

    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;

}

const pokeData = (name, id) => {

    const poketitle = document.getElementById("poketitle");
    const pokenum = document.getElementById("pokenum");

    poketitle.innerHTML = name;
    pokenum.innerHTML = `Number: #${id}`;

}





const fetchPokemon = () => {

    const pokeName = document.getElementById('pokeName');
    let pokeInput = pokeName.value.toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`

    fetch(url).then((res) => {
        if (res.status != "2000") {

            // console.log(res);
            pokeImage("./images/404.svg");
            pokeData("ERROR", "00");



        } else {
            return res.json();
        }

        return res.json();

    }).then((data) => {

        // // console.log(data);
        // let pokeImg = data.sprites.front_default;
        // pokeImage(pokeImg);

        
        let pokename = data.name;
        let pokenum = data.id;
        let poketype = data.types.map((type) => type.type.name).join(' ');
        let pokeabilities = data.abilities.map((ability) => ability.ability.name).join(' ');
        let imgurl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokenum}.png`;


        pokeImage(imgurl);
        pokeData(pokename, pokenum);
        pokeType(poketype, pokeabilities);
        console.log(imgurl);


    })

}


const changePokemon = () => {


    const url = `https://pokeapi.co/api/v2/pokemon/${indice}`

    fetch(url).then((res) => {
        if (res.status != "2000") {

            // console.log(res);

            pokeImage("./images/404.svg");
            pokeData("ERROR", "00");


        } else {
            return res.json();
        }

        return res.json();

    }).then((data) => {


        // console.log(data);

        let pokeImg = data.sprites.front_default;
        let pokename = data.name;
        let pokenum = data.id;
        let poketype = data.types.map((type) => type.type.name).join(' ');
        let pokeabilities = data.abilities.map((ability) => ability.ability.name).join(' ');
        let imgurl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokenum}.png`;


        pokeImage(imgurl);

        pokeData(pokename, pokenum);

        pokeType(poketype, pokeabilities);

        console.log(`
            Abilities: ${pokeabilities},
            Type: ${poketype}
        `);

    })

}

const pokeType = (types, abilities) => {

    const poketypes = document.getElementById("poketype");
    const pokeabilities = document.getElementById("abilities");

    poketypes.innerHTML = types;
    pokeabilities.innerHTML = abilities
    pokebg.className = types;
    pokeImageContainer.className = types;
}



var buttonSearch = document.querySelector("#btnSearch");
var btnLeft = document.querySelector("#btnLeft")
var btnRight = document.querySelector("#btnRight")


buttonSearch.addEventListener("click", function onclick(event) {
    fetchPokemon();
    namePoke = document.getElementById("pokeName").value = "";
});


btnLeft.addEventListener("click", function onclick(event) {
    indice--;
    // console.log(indice)
    changePokemon();
});

btnRight.addEventListener("click", function onclick(event) {
    indice++;
    // console.log(indice)
    changePokemon();
    
});



