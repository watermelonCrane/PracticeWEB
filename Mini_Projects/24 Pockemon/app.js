//https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';


for (let i = 0; i < 100; i++) {
    let pokemon = document.createElement('span');
    pokemon.innerText = `#${i + 1}`;

    let newImg = document.createElement('img');
    newImg.src = `${baseURL}${i + 1}.png`;

    let newDiv = document.createElement('div');
    newDiv.classList.add('pokemon');
    newDiv.appendChild(newImg);
    newDiv.appendChild(pokemon);

    container.appendChild(newDiv);
}


/* const newImg = document.createElement('img');
newImg.src = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
container.appendChild(newImg); */