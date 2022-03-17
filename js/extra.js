let indice = 0;


const fetchPokemon = () => {

    const pokeName = document.getElementById('pokeName');
    let pokeInput = pokeName.value.toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`

    fetch(url).then((res) => {
        if (res.status != "2000") {

            // // console.log(res);
            pokeImage("./images/404.svg");
            pokeData("ERROR", "00");



        } else {
            return res.json();
        }

        return res.json();

    }).then((data) => {


        let pokeweight = data.weight;
        let pokeheight = data.height;
        let pokename = data.name;
        let pokenum = data.id;
        let poketype = data.types.map((type) => type.type.name).join(' ');
        let pokeabilities = data.abilities.map((ability) => ability.ability.name).join(' <br>');
        let imgurl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokenum}.png`;


        pokeImage(imgurl);
        pokeData(pokename, pokenum, pokeweight, pokeheight);
        pokeType(poketype, pokeabilities);
        // console.log(imgurl);

        indice = pokenum;
        
        jpName();

    })

}


const changePokemon = () => {


    const url = `https://pokeapi.co/api/v2/pokemon/${indice}`


    fetch(url).then((res) => {

        if (res.status != "2000") {

            pokeImage("./images/404.svg");
            pokeData("ERROR", "00");
        } else {
            return res.json();
        }
        return res.json();
    }).then((data) => {


        let pokeweight = data.weight;
        let pokeheight = data.height;
        let pokename = data.name;
        let pokenum = data.id;
        let poketype = data.types.map((type) => type.type.name).join(' ');
        let pokeabilities = data.abilities.map((ability) => ability.ability.name).join(' ');
        let imgurl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokenum}.png`;

        pokeImage(imgurl);
        pokeData(pokename, pokenum, pokeweight, pokeheight);
        pokeType(poketype, pokeabilities);
        
        

    })
}


const namebG = (poketxt) => {

    const pokeTxt = document.getElementById("poketxt");
    pokeTxt.innerHTML = poketxt;

}

const pokeData = (name, id, weight, height) => {

    const poketitle = document.getElementById("poketitle");
    const pokenum = document.getElementById("pokenum");
    const index = document.getElementById("pokeindex");
    const pokew = document.getElementById("pokew");
    const pokeh = document.getElementById("pokeh");
    const pokeKg = weight * 0.1;
    const pokeM = height * 0.1;
    poketitle.innerHTML = name.toUpperCase();
    pokenum.innerHTML = `#0${id}`;
    index.innerHTML = id;
    pokew.innerHTML = `${pokeKg.toFixed(1)}Kg`;
    pokeh.innerHTML = `${pokeM.toFixed(2)}m`;
}

const pokeImage = (url) => {

    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;

}

const pokeType = (types, abilities) => {

    const poketypes = document.getElementById("poketype");
    const pokeabilities = document.getElementById("abilities");
    const pokebg = document.getElementById("pokebg");

    poketypes.innerHTML = types;
    pokeabilities.innerHTML = abilities;
    pokebg.className = types;
}


const jpName = () => {
    const speciesUrl = `https://pokeapi.co/api/v2/pokemon-species/${indice}`;

    fetch(speciesUrl).then((res) => {

        return res.json();

    }).then((data) => {

        let jpname = data.names[0].name;
        let jpid = data.id;

        namebG(jpname);


    })

}



var btnUp = document.querySelector("#btnUp");
var btnDown = document.querySelector("#btnDown");
var searchInput = document.querySelector("#pokeName");

btnUp.addEventListener("click", function onclick(event) {
    indice++;
    // // console.log(indice)
    changePokemon();
    jpName();

});

btnDown.addEventListener("click", function onclick(event) {
    indice--;
    // // console.log(indice)
    changePokemon();
    jpName();

});



window.pokeName.addEventListener('change', () => {
    // console.log(window.pokeName.value);

    fetchPokemon();
    
    
});
