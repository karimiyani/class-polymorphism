class Animal{
    constructor (name) {
        this.name = name
    }
    eats(){
       console.log(`the ${this.name} eats  food`)
    }
}

const animal1 = new Animal("animal");
console.log(animal1.eats());
// the animal eats  food


class Dog extends Animal {
    eats(){
        console.log(`the ${this.name} eats  pizza`);
    }
}
const dog1 = new Dog("Dony");
console.log(dog1.eats());
// the Dony eats  pizza


class Cat extends Animal {
    eats(){
        super.eats();
        console.log(`the ${this.name} eats  milk`);
    }
}
const cat1 = new Cat("somy");
console.log(cat1.eats());
// the somy eats  food
// index.js:28 the somy eats  milk