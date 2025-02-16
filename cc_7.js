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


// Task 3: Arrow Function

// lines below create a function to calculate a discount based on the loyalty of the customer
const calculateLoyaltyDiscount = (amount, years) => {
    let loyaltyDiscount = 0;
    if (years >= 5) loyaltyDiscount = amount - (amount * .15); // lines 34-36 use if-else statements to figure out which discount percent to use based on the years
    else if (years >= 3) loyaltyDiscount = amount - (amount * .1);
    else loyaltyDiscount = amount - (amount * .05);

    console.log(`Discounted Price: $${loyaltyDiscount.toFixed(2)}`); // this line logs the output in the console
};


// lines below run the function using the parameters provided
calculateLoyaltyDiscount(100, 6);
calculateLoyaltyDiscount(200, 2);


// Task 4: Parameters and Arguments

// lines below create a function to calculate the shipping cost of an item
function calculateShippingCost(weight, location, expedited = false) {
    let rates = { "USA": 5 + (0.5*weight), "Canada": 10 + (0.7*weight)};
    let shippingCost = (rates[location]); // this line picks the equation out of the object depending on the location

    if (expedited === true) {  // declares that if the recipient chooses to expedite it, then add $10 to the cost
        shippingCost += 10;
    };
    
    // line 59 tells the function to log the results in the console
    console.log(`Total Cost: $${shippingCost.toFixed(2)}`);
}


// lines below run the function using the parameters provided
calculateShippingCost(10, "USA", true);
calculateShippingCost(5, "Canada", false);