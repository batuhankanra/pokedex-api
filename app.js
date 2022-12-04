//poke image
//https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png
//poke ip : https://pokeapi.co/api/v2/pokemon/1

const searchInput=document.querySelector('#poke-input')
const searchBtn=document.querySelector('.btn-search')
const pokeContainer=document.querySelector('.poke-container')
const pokeCount=151
const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#d6b3ff",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
    ice: "#e0f5ff "
}
const initPokemon= async ()=> {
    for(let i=1; i<=pokeCount; i++){
        await getPokemon(i)
    }
}

const getPokemon=async (id)=>{
    let url=`https://pokeapi.co/api/v2/pokemon/${id}`
    let res=await fetch(url)
    let data=await res.json()
    ceratePokemonBox(data)
}
const ceratePokemonBox=(pokemon)=>{
    const name=pokemon.name[0].toUpperCase()+pokemon.name.slice(1)
    const id=pokemon.id.toString().padStart(3, '0')
    const weigth=pokemon.weight
    const type=pokemon.types[0].type.name
    const color=colors[type]
    const pokeEl=document.createElement("div")
    pokeEl.classList.add("poke-box")
    pokeEl.style.backgroundColor=`${color}`
    pokeEl.innerHTML=`<img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" 
    alt="${name} name" >
    <h4 class="poke-name">${name}</h4>
    <p class="poke-id">${id}</p>
    <p class="poke-weight">${weigth}</p>
    <p class="poke-type">type: ${type}</p>`
    pokeContainer.appendChild(pokeEl)
    
}

initPokemon()
