// Pokemon Parent Class
class Pokemon {
    constructor(name, type, hitPoints, attackDamage, move) {
        this.name = name;
        this.type = type || "normal";
        this.hitPoints = hitPoints;
        this.attackDamage = attackDamage; 
        this.move = move || "tackle"; 
    }

    isEffectiveAgainst(enemy) {
        return false
    }

    isWeakTo(enemy) {
        return false
    }

    takeDamage(number) {
        this.hitPoints -= number;
        if (this.hitPoints <= 0) {
            this.hasFainted()
        }}

    useMove() {
            console.log(`${this.name} used ${this.move}!`)
            return this.attackDamage;
        }

    hasFainted() {
            return this.hitPoints <= 0
        }
    }

// Fire Pokemon Child Class
class Fire_Pokemon extends Pokemon {
    constructor(name, hitPoints, attackDamage, move){
        super(name, 'fire', hitPoints, attackDamage, move)
    }
    isEffectiveAgainst(enemy){
        return enemy.type === 'grass'
    }
    isWeakTo(enemy){
        return enemy.type === 'water'
    }
}

// Grass Pokemon Child Class
class Grass_Pokemon extends Pokemon {
    constructor(name, hitPoints, attackDamage, move){
        super(name, 'grass', hitPoints, attackDamage, move)
    }
    isEffectiveAgainst(enemy){
        return enemy.type === 'water'
    }
    isWeakTo(enemy){
        return enemy.type === 'fire'
    }
}

// Water Pokemon Child Class
class Water_Pokemon extends Pokemon {
    constructor(name, hitPoints, attackDamage, move){
        super(name, 'water', hitPoints, attackDamage, move)
    }
    isEffectiveAgainst(enemy){
        return enemy.type === 'fire'
    }
    isWeakTo(enemy){
        return enemy.type === 'grass'
    }
}

// Charmander Child Class
class Charmander extends Fire_Pokemon {
    constructor(){
        super("Charmander", 44, 17, 'Ember')
    }
}

// Squirtle Child Class
class Squirtle extends Water_Pokemon {
    constructor(){
        super("Squirtle", 44, 16, "Water Gun")
    }
}

// Bulbasaur Child Class
class Bulbasaur extends Grass_Pokemon {
    constructor(){
        super("Bulbasaur", 45, 16, "Vine Whip")
    }
}

// Rattata Child Class
class Rattata extends Pokemon {
    constructor(){
        super("Rattata", "", 100, 100, "")
    }
}

// Pokeball Class
class Pokeball {
    constructor() {
        this.storedPokemon;
        this.empty = true;
    }

    throw (pokemon) {
        if (this.empty === true) {
            this.storedPokemon = pokemon;
            this.empty = false;
            console.log(`${pokemon.name} was caught!`)
        } else if (arguments.length === 0 && this.empty === false) {
            return this.storedPokemon;
        }
    }

    isEmpty() {
        return this.empty
    }

    contains() {
        if (this.empty === false) {
            console.log(`Go ${this.storedPokemon.name}!`);
            return this.storedPokemon.name;
        } return "empty..."
    }
}

// Trainer Class with Belt
class Trainer {
    constructor(name){
        this.name = name;
        this.currentPokemon = 0;

        this.ball1 = new Pokeball()
        this.ball2 = new Pokeball()
        this.ball3 = new Pokeball()
        this.ball4 = new Pokeball()
        this.ball5 = new Pokeball()
        this.ball6 = new Pokeball()

        this.belt = [this.ball1, this.ball2, this.ball3, this.ball4, this.ball5, this.ball6]
    }

    catch(pokemon) {
        for (let ball of this.belt){
            if (ball.isEmpty()){
                ball.throw(pokemon)
                return;
            }
        }
        let str = `Belt is full! Can't catch ${pokemon.name}!!`
        console.log(str)
        return str;
    }

    getPokemon(pokemon){
        for (let ball of this.belt){
            if (ball.storedPokemon.name === pokemon){
                return ball.throw();
            }
        }

    }

}

// Battle Class
class Battle {
    constructor(trainer1, party1, trainer2, party2)
    {   this.trainer1  = trainer1;
        this.trainer2 = trainer2;
        this.party1 = party1;
        this.party2 = party2;

        this.party1.forEach((pokemon) => {
          this.trainer1.catch(pokemon)
        })
        this.party2.forEach((pokemon) => {
            this.trainer2.catch(pokemon)
        })
    }

    fullMatch(){
        console.log(`${this.trainer2.name} wants to battle!`)
    let gameOver = false    
    while(gameOver === false){
        gameOver = this.fight(this.trainer1, this.trainer2)
        if (gameOver === true){
            console.log(`${this.trainer1.name} Wins!`)
            return;
        }
        gameOver = this.fight(this.trainer2, this.trainer1)
        if (gameOver === true){
            console.log(`${this.trainer2.name} Wins!`)
            return;
        }
    }
    }

    fight(attackTrainer, defendTrainer) {
        let attackingPokemon = attackTrainer.belt[attackTrainer.currentPokemon].storedPokemon;
        let defendingPokemon = defendTrainer.belt[defendTrainer.currentPokemon].storedPokemon;

        if (Math.random() <= 0.0625){
            defendingPokemon.hitPoints -= 2 * attackingPokemon.useMove()
            console.log('Critical Hit!')
        }
        else if (defendingPokemon.isWeakTo(attackingPokemon)) {
            defendingPokemon.hitPoints -= (attackingPokemon.useMove() * 1.25);
            console.log("It's super effective!");

        } else if (defendingPokemon.isEffectiveAgainst(attackingPokemon)) {
            defendingPokemon.hitPoints -= (attackingPokemon.useMove() * 0.75)
            console.log("It's not very effective!");

        } else defendingPokemon.hitPoints -= attackingPokemon.useMove() 
        
        if (defendingPokemon.hasFainted()) {
            console.log(`${defendingPokemon.name} fainted!`);
            defendTrainer.currentPokemon++
            if (defendTrainer.belt[defendTrainer.currentPokemon].isEmpty()){
                return true;
            }
        }
        return false;
        }
    }


    
module.exports = {
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
};
