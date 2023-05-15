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
} = require("../pokemon.js");

describe("Pokemon", () => {
    describe("Properties", () => {
    test("should have name property", () => {
        const Eevee = new Pokemon('Eevee', "", 0, 0, "")
        expect(Eevee.name).toBe("Eevee")
    })
    test("should have type property", () => {
        const Eevee = new Pokemon('Eevee', "Normal", 0, 0, "")
        expect(Eevee.type).toBe("Normal")
    })
    test("should have hitPoints property", () => {
        const Eevee = new Pokemon('Eevee', "Normal", 55, 0, "")
        expect(Eevee.hitPoints).toBe(55)

    })
    test("should have attackDamage property", () => {
        const Eevee = new Pokemon('Eevee', "Normal", 55, 18, "")
        expect(Eevee.attackDamage).toBe(18)
         })

    test("should have move property", () => {
        const Eevee = new Pokemon('Eevee', "Normal", 55, 18, "Headbutt")
        expect(Eevee.move).toBe("Headbutt")
    })
})

describe("Methods", () => {
    const Eevee = new Pokemon('Eevee', "Normal", 55, 18, "Headbutt")
    const Leafeon = new Pokemon('Leafeon', "Grass", 65, 17, "Giga Drain")
    const Flareon = new Pokemon('Flareon', "Fire", 65, 20, "Fire Blast")
    test("should have isEffectiveAgainst method", () => {
        expect(Eevee.isEffectiveAgainst(Leafeon)).toBe(false);
    })
      test("should have isWeakTo method", () => {
        expect(Eevee.isWeakTo(Leafeon)).toBe(false);
        expect(Leafeon.isWeakTo(Eevee)).toBe(false);
      })
    test("should have a takeDamage method which reduces health property by given number", () => {
        Eevee.takeDamage(17)
      expect(Eevee.hitPoints).toBe(38);
    })
    test("should have a useMove method which returns the Pokemon's attackDamage & console logs the move used", () => {
      expect(Eevee.useMove()).toBe(18);
    })
    test("should have a hasFainted method which returns returns a boolean based on whether the Pokemon has fainted", () => {
        expect(Eevee.hasFainted()).toBe(false);
        Eevee.takeDamage(100)
        expect(Eevee.hasFainted()).toBe(true)
    })
}) 
}) 

describe("Pokemon Types Class", () => {
    const Charmander = new Fire_Pokemon("Charmander", 44, 17, 'Flamethrower')
    const Leafeon = new Grass_Pokemon('Leafeon', 65, 17, "Giga Drain")
    const Vaporeon = new Water_Pokemon('Vaporeon', 70, 19, 'Hydro Pump')
  test('fire strong against grass, weak against water', () => {
    expect(Charmander.isEffectiveAgainst(Leafeon)).toBe(true);
    expect(Charmander.isWeakTo(Vaporeon)).toBe(true);
  })
  test('grass strong against water, weak against fire', () => {
    expect(Leafeon.isEffectiveAgainst(Vaporeon)).toBe(true)
    expect(Leafeon.isWeakTo(Charmander)).toBe(true)
  })
  test('water strong against fire, weak against grass', () => {
    expect(Vaporeon.isEffectiveAgainst(Charmander)).toBe(true)
    expect(Vaporeon.isWeakTo(Leafeon)).toBe(true)
  })
})

describe('Specific Pokemon Classes', () => {
  test('Charmander has attack Ember', () => {
    const charmander = new Charmander();
    expect(charmander.move).toBe("Ember")
    expect(charmander.name).toBe("Charmander")
    expect(charmander.hitPoints).toBe(44)
  })
  test("Squirtle has attack Water Gun", () => {
    const squirtle = new Squirtle()
    expect(squirtle.move).toBe("Water Gun")
    expect(squirtle.name).toBe("Squirtle")
    expect(squirtle.hitPoints).toBe(44)
  })
  test("Bulbasaur has attack Vine Whip", () => {
    const bulbasaur = new Bulbasaur()
    expect(bulbasaur.move).toBe("Vine Whip")
    expect(bulbasaur.name).toBe("Bulbasaur")
    expect(bulbasaur.hitPoints).toBe(45)
  })
  test("Rattata has attack Tackle", () => {
    const rattata = new Rattata()
    expect(rattata.move).toBe("Tackle")
    expect(rattata.name).toBe("Rattata")
    expect(rattata.hitPoints).toBe(100)
})
})

describe('Pokeballs', () => {
  test("should have a throw method - if Pokeball empty, captures pokemon", () => {
    const Eevee = new Pokemon('Eevee', "Normal", 55, 0, "")
    const pokeball1 = new Pokeball(); 
    expect(pokeball1.empty).toBe(true);
  })
  test("should have a throw method - if Pokeball empty, catches pokemon and Pokeball no longer empty", () => {
    const Eevee = new Pokemon('Eevee', "Normal", 55, 0, "")
    const pokeball1 = new Pokeball(); 
    pokeball1.throw(Eevee)
    expect(pokeball1.empty).toBe(false);
  })
    test("if you throw a Pokeball with a Pokemon parameter passed, releases the contained pokemon", () => {
    const Eevee = new Pokemon('Eevee', "Normal", 55, 0, "")
    const pokeball1 = new Pokeball(); 
    pokeball1.throw(Eevee);   
    expect(pokeball1.throw()).toEqual(Eevee);
  })
  test("should have a contains method which returns the string 'empty' if Pokeball is empty and returns Pokemon's name if not", () => {
    const Eevee = new Pokemon('Eevee', "Normal", 55, 0, "")
    const pokeball1 = new Pokeball(); 
    expect(pokeball1.contains()).toBe("empty...");
    pokeball1.throw(Eevee);
    expect(pokeball1.contains()).toBe("Eevee");
  })
})

describe('Trainer', () => {
  describe('Catch Method', () => {
    test('Trainer starts with belt of 6 empty Pokeballs', () => {
      const Ash = new Trainer()
      for (let i = 0; i < Ash.belt.length; i++){
        expect(Ash.belt[i].isEmpty()).toBe(true)
      }
    })
    test('should have catch method, which throws the first empty pokeball', () => {
      const Eevee = new Pokemon('Eevee', "normal", 55, 0, "")
      const Ash = new Trainer()
      expect(Ash.belt[0].isEmpty()).toBe(true);
      Ash.catch(Eevee)
      expect(Ash.belt[0].isEmpty()).toBe(false);
    })
    test('should return "belt is full" message if try to catch a Pokemon when belt is full', () => {
      const Ash = new Trainer()
      const charmander = new Charmander()
      const squirtle = new Squirtle()
      const rattata = new Rattata()
      const bulbasaur = new Bulbasaur()
      const eevee = new Pokemon('Eevee', "Normal", 55, 18, "Headbutt")
      const leafeon = new Grass_Pokemon('Leafeon', "grass", 65, 17, "Giga Drain")
      const vaporeon = new Water_Pokemon('Vaporeon', 'water', 70, 19, "Hydro Pump")
      Ash.catch(charmander)
      Ash.catch(squirtle)
      Ash.catch(rattata)
      Ash.catch(leafeon)
      Ash.catch(vaporeon)
      Ash.catch(bulbasaur)
      expect(Ash.catch(eevee)).toBe("Belt is full! Can't catch Eevee!!")
    })
  })
    describe('getPokemon Method', () => {
      test('searches for given Pokemon in the belt, returns Pokemon if found', () => {
        const Ash = new Trainer()
        const bulbasaur = new Bulbasaur();
        Ash.catch(bulbasaur)
        expect(Ash.getPokemon("Bulbasaur")).toEqual(bulbasaur)
      })
    })
})

// to complete these tests
describe.skip("Battle", () => {
  test("should have a fight method which attacks the defending Pokemon and does 1.25 damage if effective and 0.75 if weak", () => {
    const Ash = new Trainer("Ash");
    const Brock = new Trainer("Brock");
    const bulbasaur = new Bulbasaur();
    const squirtle = new Squirtle();
    const openingBattle = new Battle(Ash, bulbasaur, Brock, squirtle);
    openingBattle.fight();
    expect(squirtle.hitPoints).toBe(24)
    const secondBattle = new Battle(Brock, squirtle, Ash, bulbasaur);
    secondBattle.full();
    expect(bulbasaur.hitPoints).toBe(33)
  })

  test("if defending Pokemon faints following the attack, it returns the winning trainer's name", () => {
    const Ash = new Trainer("Ash");
    const Brock = new Trainer("Brock");
    const bulbasaur = new Bulbasaur();
    const strongPokemon = new Pokemon("Dragonite", "dragon", 200, 130, "dragon breath")
    const grandFinale = new Battle(Ash, strongPokemon, Brock, bulbasaur)
    expect(grandFinale.fight()).toBe(true)
  })
})





