// Types
const numbers: number = 123; // Integer value assigned to variable
const string: string = 'Hi'; // Text string value assigned to variable
const boolean: boolean = true; // True or false value assignment 
const number_array: number[] = [1, 2, 3]; // Array containing numbers only
const string_array: string[] = ['Apples', 'Bananas', 'Grapes']; // Array containing text strings only
const boolean_array: boolean[] = [true, false, true, true]; // Array of boolean values
const array_array: number[][] = [[123, 321], [321, 312]]; // Array of arrays of numbers
const null_type: null = null; // Value explicitly set to null
const func: Function = () => { // Function definition for various tasks
    // this is a function
};
const mixed_type: (string | number) = 'mixed'; // Variable containing string or number
const undefined_type: undefined = undefined; // Undefined value initialization
const bigint_type:BigInt = BigInt(12345678901234567890); // Large integer value assignment
const symbol_type: symbol = Symbol('symbol'); // Unique symbol identifier
const tuple_type: [number, string, boolean] = [1, 'two', true]; // Tuple with mixed types
const enum_type: { 
    RED: 1,
    GREEN: 2,
    BLUE: 3
} = { 
    RED: 1, 
    GREEN: 2, 
    BLUE: 3 
}; // Enumeration of constants
const void_func: () => void = () => { // Function returns no value
    console.log('This is a function that returns void');
};
const any_type: any = [123, 'Abc', [], true]; // Variable allowing any data type
const unknown_type: unknown = 'unknown'; // Variable with unknown type initially

interface Person { // Person interface with three properties
    name: string;
    age: number;
    isActive: boolean;
}
const person: Person = { // Person object created using interface
    name: 'John',
    age: 30,
    isActive: true
};
