// Task 1: Function Declaration

// lines below create a function to calculate the invoice of a sale
function calculateInvoice(subtotal, taxRate, discount) {
    let total = (subtotal + (subtotal * taxRate)) - discount; // this line creates the equation in the function
    console.log(`Total Invoice: $${total.toFixed(2)}`); // this line will log the result in the console
};


// lines below run the function using the parameters provided
calculateInvoice(100, 0.08, 5);
calculateInvoice(500, 0.1, 20);


// Task 2: Function Expression

// lines below create a function to calculate the hourly wage of an employee
function calculateHourlyWage(salary, hoursPerWeek) {
    let hourlyWage = salary/(hoursPerWeek*52);  // creates the equation in the function
    console.log(`Hourly Wage: $${hourlyWage.toFixed(2)}`);  // this line logs the output in the console
};


// lines below run the function using the parameters provided
calculateHourlyWage(52000,40);
calculateHourlyWage(75000,35);
