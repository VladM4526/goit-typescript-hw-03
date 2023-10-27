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
  door: false;
  key: Key;
  tenants: Array<Person> = [];

  comeIn(person: Person) {
    if (!this.door) {
      console.log("Door is open");
        this.tenants.push(person);
        this.door;
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super();
    this.key = key;
  }

  openDoor(key: Key):void {
    if (key.getSignature() === this.key.getSignature()) {
      console.log("Welcome home!");
      this.door;
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