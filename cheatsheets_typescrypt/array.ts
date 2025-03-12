const arr: any[] = [1, 2, 3, 4]; // Initial array

arr.at(1); // Access element at index one: 2
arr.push(5); // Add element to end of array: [1, 2, 3, 4, 5]
arr.pop(); // Remove last element from array: [1, 2, 3, 4]
arr.fill(1); // Fill array with same value: [1, 1, 1, 1]
arr.shift(); // Remove first element from array: [2, 3, 4]
arr.unshift(5); // Add element to beginning: [5, 1, 2, 3, 4]
arr.reverse(); // Reverse the entire array order: [4, 3, 2, 1]
arr.includes(2); // Check if includes element: true/false
arr.map(item => 2 * item); // Map each element by function: [2, 4, 6, 8]
arr.filter(item => item > 2); // Filter elements by condition: [3, 4]
arr.find(item => item > 2); // Find first element matching condition: 3
arr.every(item => item > 0); // Check if every element matches: true/false
arr.findIndex(item => item === 2); // Find index of first match: 2
arr.reduce((prev, curr) => prev + curr, 0); // Reduce array to single value: 10
arr.toString(); // Convert array to string format: "1,2,3,4"
arr.join("*"); // Join elements with separator: "1*2*3*4"
arr.splice(2, 0, "i", "p"); // Add/remove elements by index: [1, "i", "p", 2, 3, 4]
arr.slice(1, 4); // Extract portion of array: [2, 3, 4]
arr.sort(); // Sort elements by default order: [1, 2, 3, 4]
arr.sort((a, b) => a - b); // Sort elements in ascending order: [1, 2, 3, 4]
arr.sort((a, b) => b - a); // Sort elements in descending order: [4, 3, 2, 1]
arr.sort(() => 0.5 - Math.random()); // Sort elements randomly: random order
