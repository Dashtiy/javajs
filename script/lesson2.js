// Step 1: Ask the user to enter a price tag using prompt (e.g. "$49.99")
let inputPrice = prompt("Enter the price tag (e.g., $49.99):");
// Step 2: Convert the input from string to number 
let cleanPrice = parseFloat(inputPrice.replace('$', ''));
// Step 3: Reduce the price by 10 percent
let discountedPrice = cleanPrice - (cleanPrice * 0.10);