const str: string = "Hello, World!"; // Initial string

str.length; // Get string length: 13
str.charAt(1); // Get character at index: "e"
str.concat(" How are you?"); // Concatenate strings together: "Hello, World! How are you?"
str.includes("World"); // Check if includes substring: true
str.indexOf("World"); // Get index of substring: 7
str.lastIndexOf("o"); // Get last index of substring: 8
str.replace("World", "Everyone"); // Replace substring with another: "Hello, Everyone!"
str.replaceAll("o", "a"); // Replace all occurrences: "Hella, Warld!"
str.slice(0, 5); // Extract part of string: "Hello"
str.split(", "); // Split string into array: ["Hello", "World!"]
str.startsWith("Hello"); // Check if starts with substring: true
str.endsWith("!"); // Check if ends with substring: true
str.substring(0, 5); // Extract substring between indices: "Hello"
str.toLowerCase(); // Convert string to lowercase: "hello, world!"
str.toUpperCase(); // Convert string to uppercase: "HELLO, WORLD!"
str.trim(); // Remove whitespace from both ends
str.trimStart(); // Remove whitespace from start: "Hello, World!"
str.trimEnd(); // Remove whitespace from end: "Hello, World!"
str.padStart(15, '*'); // Pad start with characters: "**Hello, World!"
str.padEnd(15, '*'); // Pad end with characters: "Hello, World!**"ddd           
str.repeat(2); // Repeat string multiple times: "Hello, World!Hello, World!"
str.localeCompare("hello, world!"); // Compare two strings: -1
str.match(/World/); // Match regex in string: ["World"]
str.search("World"); // Search for substring: index 7
