# Pokemon Battle

## Project Info

I have built a test-driven programme which allows Pokemon trainers to battle against each other. For the purposes of this project, Pokemon have the following properties: 
- name;
- type (defaults to Normal if not provided);
- hitPoints (the Pokemon's health, represented as a number);
- attackDamage (amount of damage a Pokemon can inflict on another Pokemon, represented as a number); and
- move (defaults to Tackle if not provided).

Pokemon attacks can be 'effective against' other Pokemon. If Pokemon A's attack is 'effective against' Pokemon B, that makes Pokemon B 'weak to' Pokemon A. Normal-type Pokemon are not effective against anything.

Pokemon should be able to 'use their move' against another Pokemon and a Pokemon will 'take damage' when they are on the receiving end of another Pokemon's move. Pokemon 'faint' when their health (hitPoints) is reduced to 0 or below.

For the purposes of this programme I have worked with four Pokemon types: Fire, Water, Grass, Normal.
- `Fire` Pokemon are effective against grass & weak against water.
- `Grass` Pokemon are effective against water & weak against fire.
- `Water` Pokemon are effective against fire & weak against grass.
- `Normal` Pokemon are not effective against or weak to any of the above types.


## Pokemon

- `Charmander` - Fire Pokemon & has as its move "ember".
- `Squirtle` - Water Pokemon & has as its move "water gun".
- `Bulbasaur` - Grass Pokemon & has as its move "vine whip".
- `Leafeon` - Grass Pokemon & has as its move "giga drain".
- `Vaporeon` - Water Pokemon & has as its move "hydro pump".
- `Rattata` - Normal Pokemon & has as its move "tackle".

## Pokeballs

Pokeballs are the containers for Pokemon. Pokeball behaviours include:
- being able to 'store' a Pokemon; 
- throwing it to 'catch' a Pokemon; 
- throwing it to 'release' a Pokemon for battle; and 
- checking which Pokemon is 'contained' in the Pokeball.
  
## Trainers

Trainers have a belt that contains 6 Pokeballs. Empty Pokeballs can be thrown to catch Pokemon.
  
## Battle

Pokemon trainers can use their Pokemon to battle. Battles should involve two trainers and up to 6 Pokemon, with one Pokemon per trainer active in battle at any one time. 

Critical hits can occur randomly and they award double damage for a move. 

I have constructed an example_battle function in the example_battle file. Running this file will print the battle progress and outcome to the terminal based on the Pokemon I have provided. Try creating additional Pokemon with different movesets/stats and making them battle!


## Ideas for Next Steps:

- allow user to pick trainer name
- allow trainers to change Pokemon mid-battle (which should end their turn)
- give each Pokemon up to 4 moves where each move modifies the Pokemon's attack damage. Each move only should be available a finite amount of times (PP - power points) & when a move is used, it loses a power point.
- add in legendary Pokemon... 😮😰😱
