class Pokemon {

  name = null
  type = null
  weight = null
  heigth = null
  moves = null
  picture = null

  constructor(data) {
    this.name = data.name
    this.weight = data.weight
    this.heigth = data.heigth
    this.setType(data)
    this.setMoves(data)
    this.setPicture(data)
  }

  setType(data) {
    this.type = data.types[0].type.name
  }

  setMoves(data) {
    this.moves = data.moves.reduce((acc, curValue) => acc + ", " + curValue.move.name)
  }

  setPicture(data) {
    this.picture = data.sprites.front_default
  }
}

class Pikachu extends Pokemon {

  constructor(data) {
    super(data)
    this.validator(data)
  }

  validator(data) {
    if (data.name === "pikachu") {
      return
    }
    throw Error('This pokemon is not Pikachu')
  }
}

const createPokemonCard = (imageSource, description) => {
  const card = document.createElement("div");
  card.setAttribute("class", "card shadow rounded");
  card.setAttribute("id", "pokemonCard");
  card.setAttribute("style", "width: 18rem;");
  const image = document.createElement("img");
  image.setAttribute("class", "card-img-top");
  image.setAttribute("src", imageSource);
  const cardBody = document.createElement("div");
  cardBody.setAttribute("class", "card-body");
  const bodyText = document.createElement("p");
  bodyText.setAttribute("class", "card-text text-secondary");
  bodyText.innerHTML = description;
  cardBody.appendChild(bodyText);
  card.appendChild(image);
  card.appendChild(cardBody);
  return card;
}

const getPokemon = () => {
  return fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
    .then(res => res.json())
    .then(res => { 
      console.log(res) 
      const pikachu = new Pikachu(res)
      console.log(pikachu)
      const container = document.getElementById('container')
      const card = createPokemonCard(pikachu.picture, pikachu.name)
      container.appendChild(card)

    })
}

getPokemon()