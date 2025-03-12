// Basic Object
const human = {
    name: 'John',
    age: 30,
    isActive: true
}; // Basic object with properties

// Nested Object
const employee = {
    name: 'Alice',
    age: 28,
    position: 'Developer',
    address: {
        street: '123 Main St',
        city: 'Metropolis',
        zipCode: '12345'
    }
}; // Nested object with another object inside

// Object with Methods
const car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020,
    start() {
        console.log('Car started');
    },
    stop() {
        console.log('Car stopped');
    }
}; // Object with methods (functions)

// Object with Type Annotations
interface Person {
    name: string;
    age: number;
    isActive: boolean;
}
const personTyped: Person = {
    name: 'John',
    age: 30,
    isActive: true
}; // Object with type annotations using an interface

// Index Signatures
interface StringArray {
    [index: number]: string;
}
const myArray: StringArray = ['Apple', 'Banana', 'Grapes']; // Object with index signatures

// Readonly Properties
interface ReadonlyPerson {
    readonly name: string;
    age: number;
}
const readonlyPerson: ReadonlyPerson = {
    name: 'Jane',
    age: 25
}; // Object with readonly properties

// Optional Properties
interface Book {
    title: string;
    author?: string; // Optional property
}
const book: Book = {
    title: 'The Great Gatsby'
}; // Object with optional property

// Function Type Properties
interface Calculator {
    add: (a: number, b: number) => number;
    subtract: (a: number, b: number) => number;
}
const calculator: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
}; // Object with function type properties

// Dynamic Properties
const dynamicObject: { [key: string]: any } = {};
dynamicObject.name = 'Dynamic';
dynamicObject.age = 99; // Object with dynamic properties

// Union Types
interface SuccessResponse {
    status: 'success';
    data: any;
}
interface ErrorResponse {
    status: 'error';
    message: string;
}
type ApiResponse = SuccessResponse | ErrorResponse;
const response: ApiResponse = {
    status: 'success',
    data: { id: 1, name: 'Item' }
}; // Object with union type

// Base Class
class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }

    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}

// Derived Class
class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name); // Call the constructor of the base class
        this.breed = breed;
    }

    bark() {
        console.log('Woof! Woof!');
    }
}

const myDog = new Dog('Rex', 'Golden Retriever');
myDog.bark(); // Woof! Woof!
myDog.move(10); // Rex moved 10 meters.
console.log(`My dog's breed is ${myDog.breed}`); // My dog's breed is Golden Retriever

// Interface Definition
interface AnimalInterface {
    name: string;
    move(distance: number): void;
}

// Class Implementing the Interface
class AnimalWithInterface implements AnimalInterface {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    move(distance: number = 0) {
        console.log(`${this.name} moved ${distance} meters.`);
    }
}

// Derived Class with Interface Implementation
class DogWithInterface extends AnimalWithInterface {
    breed: string;

    constructor(name: string, breed: string) {
        super(name); // Call the constructor of the base class
        this.breed = breed;
    }

    bark() {
        console.log('Woof! Woof!');
    }
}

const myDogWithInterface = new DogWithInterface('Rex', 'Golden Retriever');
myDogWithInterface.bark(); // Woof! Woof!
myDogWithInterface.move(10); // Rex moved 10 meters.
console.log(`My dog's breed is ${myDogWithInterface.breed}`); // My dog's breed is Golden Retriever
