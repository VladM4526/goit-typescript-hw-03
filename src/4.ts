class Key {
    private signature: number;

  constructor() {
    this.signature = Math.random();
    }
    
    getSignature() {
        return this.signature;
    }
}

const key = new Key();

abstract class House {
    door: boolean = false;
    key: Key;
    tenants: Array<Person> = [];

    constructor(key: Key) {
        this.key = key;
    }

    comeIn(person: Person) {
        if (this.door) {
            this.tenants.push(person);
        }
    }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
openDoor(key: Key):void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
  }
}

const house = new MyHouse(key);

class Person {
  private key: Key;
  constructor(key: Key) {
    this.key = key;
  }

  getKey() {
    return this.key;
  }
}

const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);


export {};