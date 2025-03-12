const num: number = 12345.6789; // Initial number

num.toFixed(2); // Format number with fixed decimals: "12345.68"
num.toExponential(2); // Convert to exponential notation: "1.23e+4"
num.toPrecision(5); // Format to specified precision: "12346"
num.toString(); // Convert exampleber to string format: "12345.6789"
Number.isNaN(num); // Check if value is NaN: false
Number.isInteger(num); // Check if value is integer: false
Number.isFinite(num); // Check if value is finite: true
Number.isSafeInteger(num); // Check safe integer range: false
Number.parseFloat("123.456"); // Parse string to float: 123.456
Number.parseInt("123.456", 10); // Parse string to integer: 123
Math.abs(num); // Get absolute value: 12345.6789
Math.ceil(num); // Round up to next integer: 12346
Math.floor(num); // Round down to previous integer: 12345
Math.round(num); // Round to nearest integer: 12346
Math.max(1, 2, 3); // Find maximum number: 3
Math.min(1, 2, 3); // Find minimum number: 1
Math.pow(2, 3); // Calculate power of number: 8
Math.sqrt(16); // Calculate square root: 4
Math.random(); // Generate random number: 0 to 1
