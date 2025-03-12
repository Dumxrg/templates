// Initializing Dates
const currentDate = new Date(); // Create new Date object with the current date and time
const specificDate = new Date(2025, 1, 28); // Create new Date object for a specific date: February 28, 2025 (months are 0-indexed)
const fromTimestamp = new Date(1614556800000); // Create new Date object from Unix timestamp
const fromString = new Date('2025-02-28T18:34:00Z'); // Create new Date object from an ISO string

// Getting Date Components
currentDate.getFullYear(); // Get full year: 2025
currentDate.getMonth(); // Get month (0-indexed): 1 (February)
currentDate.getDate(); // Get day of the month: 28
currentDate.getDay(); // Get day of the week (0=Sunday): 5 (Friday)
currentDate.getHours(); // Get hours: 18
currentDate.getMinutes(); // Get minutes: 34
currentDate.getSeconds(); // Get seconds: 0
currentDate.getMilliseconds(); // Get milliseconds: 0
currentDate.getTime(); // Get Unix timestamp: 1614556800000

// Setting Date Components
currentDate.setFullYear(2026); // Set full year: 2026
currentDate.setMonth(2); // Set month (0-indexed): 2 (March)
currentDate.setDate(15); // Set day of the month: 15
currentDate.setHours(10); // Set hours: 10
currentDate.setMinutes(30); // Set minutes: 30
currentDate.setSeconds(45); // Set seconds: 45
currentDate.setMilliseconds(500); // Set milliseconds: 500
currentDate.setTime(1614556800000); // Set Unix timestamp

// Formatting Dates
currentDate.toDateString(); // Convert date to readable string: "Fri Feb 28 2025"
currentDate.toISOString(); // Convert date to ISO string: "2025-02-28T18:34:00.000Z"
currentDate.toLocaleString(); // Convert date to locale string: "2/28/2025, 6:34:00 PM"
currentDate.toTimeString(); // Convert time to readable string: "18:34:00 GMT+0100 (Central European Standard Time)"

// Parsing Dates
Date.parse('2025-02-28T18:34:00Z'); // Parse date from string to timestamp: 1614556800000
const parsedDate = new Date(Date.parse('2025-02-28T18:34:00Z')); // Convert timestamp to Date object

// Date Arithmetic
const tomorrow = new Date(currentDate);
tomorrow.setDate(currentDate.getDate() + 1); // Add one day to the current date
const nextWeek = new Date(currentDate);
nextWeek.setDate(currentDate.getDate() + 7); // Add seven days to the current date

// Comparing Dates
currentDate < specificDate; // Check if current date is earlier than specific date: true or false
currentDate > specificDate; // Check if current date is later than specific date: true or false
currentDate.getTime() === specificDate.getTime(); // Check if two dates are equal: true or false
// Example date
const exampleDate = new Date('2025-02-28T18:34:45.123Z');

// Get time components
const hours = exampleDate.getHours(); // 18
const minutes = exampleDate.getMinutes(); // 34
const seconds = exampleDate.getSeconds(); // 45
const milliseconds = exampleDate.getMilliseconds(); // 123

// Convert to fixed format
const hoursFixed = hours.toFixed(2); // "18.00"
const minutesFixed = minutes.toFixed(2); // "34.00"
const secondsFixed = seconds.toFixed(2); // "45.00"
const millisecondsFixed = milliseconds.toFixed(2); // "123.00"

// Example usage
console.log(`Hours: ${hoursFixed}`); // Hours: 18.00
console.log(`Minutes: ${minutesFixed}`); // Minutes: 34.00
console.log(`Seconds: ${secondsFixed}`); // Seconds: 45.00
console.log(`Milliseconds: ${millisecondsFixed}`); // Milliseconds: 123.00
