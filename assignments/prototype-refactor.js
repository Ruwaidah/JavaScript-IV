/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.

*/
class GameObject {
    constructor(attributes){
    this.createdAt = attributes.createdAt;
    this.name = attributes.name;
    this.dimensions = attributes.dimensions
    }
  destroy() {
      return `${this.name} was removed from the game.`
  }
}
  
  class CharacterStats extends GameObject {
      constructor(attri) {
        super(attri);    
        this.healthPoints = attri.healthPoints;
  }  
    takeDamage() {
    return `${this.name} took damage.`
  }
}
  
  
   class Humanoid extends CharacterStats {
        constructor(attrs) {
            super(attrs);
            this.team = attrs.team;
            this.weapons = attrs.weapons;
            this.language = attrs.language;
        }
        greet() {
    return `${this.name} offers a greeting in ${this.language}.`;
    }
}

  
  
    const mage = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 1,
        height: 1,
      },
      healthPoints: 5,
      name: 'Bruce',
      team: 'Mage Guild',
      weapons: [
        'Staff of Shamalama',
      ],
      language: 'Common Tongue',
    });
  
    const swordsman = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 2,
        width: 2,
        height: 2,
      },
      healthPoints: 15,
      name: 'Sir Mustachio',
      team: 'The Round Table',
      weapons: [
        'Giant Sword',
        'Shield',
      ],
      language: 'Common Tongue',
    });
  
    const archer = new Humanoid({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lilith',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    });
  
  
    console.log(mage.createdAt); // Today's date
    console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
    console.log(swordsman.healthPoints); // 15
    console.log(mage.name); // Bruce
    console.log(swordsman.team); // The Round Table
    console.log(mage.weapons); // Staff of Shamalama
    console.log(archer.language); // Elvish
    console.log(archer.greet()); // Lilith offers a greeting in Elvish.
    console.log(mage.takeDamage()); // Bruce took damage.
    console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.
  
  
    // Stretch task: 
    // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
      class Villain extends Humanoid{
        constructor(attrs) {
            super(attrs);
        }
        decreaseHealth() {
        this.healthPoints = this.healthPoints - 2;
        if (this.healthPoints == 0){
          return `Health: ${this.healthPoints}, ${this.name} had been destruction !`
        } else{
        return `Health: ${this.healthPoints}. ${this.name} Health Point decreased by -2.`
        }
      }
    }

  
  
  
        class Hero extends Humanoid {
            constructor(attrs){
                super(attrs)
            } 
            increaseHealth() {
                this.healthPoints = this.healthPoints + 3;
                if (this.healthPoints == 0){
                return `health: ${this.healthPoints}, ${this.name} had been destruction !`
                } else {
                return `Health: ${this.healthPoints} ,${this.name} increased Helth By +3.`;
                }
            }
        }
  
  
  
    // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  
     
  
  
  
    // * Create two new objects, one a villain and one a hero and fight it out with methods!
  
    const villain = new Villain ({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Lara',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    })
  
    const hero = new Hero({
      createdAt: new Date(),
      dimensions: {
        length: 1,
        width: 2,
        height: 4,
      },
      healthPoints: 10,
      name: 'Ruwaidah',
      team: 'Forest Kingdom',
      weapons: [
        'Bow',
        'Dagger',
      ],
      language: 'Elvish',
    })
  
    console.log(hero.increaseHealth());
    console.log(villain.decreaseHealth());
    console.log(villain.decreaseHealth());
    console.log(villain.decreaseHealth());
    console.log(villain.decreaseHealth());
    console.log(villain.decreaseHealth());
  
  
  