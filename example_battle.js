const {
    Pokemon,
    Fire_Pokemon,
    Grass_Pokemon,
    Water_Pokemon,
    Charmander,
    Squirtle,
    Bulbasaur,
    Rattata,
    Pokeball,
    Trainer,
    Battle
} = require("./pokemon.js");


function example_battle() {
  // Trainers
  const Ash = new Trainer("Ash");
  const Brock = new Trainer("Brock");
  
  // Pokemon
  const Squirtle_One = new Squirtle();
  const Bulbasaur_One = new Bulbasaur();
  const Charmander_One = new Charmander();
  const Rattata_One = new Rattata();

  const Leafeon_One = new Grass_Pokemon("Leafeon", 65, 17, "Giga Drain");
  const Vaporeon_One = new Water_Pokemon("Vapereon", 70, 19, "Hydro Pump");
  const Squirtle_Two = new Squirtle();
  const Bulbasaur_Two = new Bulbasaur();

  // Battle
  const party1 = [Squirtle_One, Bulbasaur_One, Charmander_One, Rattata_One];
  const party2 = [Leafeon_One, Vaporeon_One, Squirtle_Two, Bulbasaur_Two];
  const newBattle = new Battle(Ash, party1, Brock, party2);
  newBattle.fullMatch();
}

example_battle();