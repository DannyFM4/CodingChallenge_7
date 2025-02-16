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


// Task 5: Returning Values

// the lines below create a function to calculate the interest on a loan
function calculateLoanInterest(principal, rate, years) {
    let loanInterest = (principal * rate * years).toFixed(2); // creates the equation to calcualte the interest amount
    return `Total Interest: $${loanInterest}` // returns the result in a template literal form
};


// the lines below run the function using the parameters provided and log its results in the console
console.log(calculateLoanInterest(1000, 0.05, 3));
console.log(calculateLoanInterest(5000, 0.07, 5));


// Task 6: Higher-Order Functions

let transactions = [500, 1200, 3000, 800, 2200]; // defines an array named tranactions

// lines below create a function that filters all transactions above 1000
function filterHighValueTransactions(transactions, filterFunction) {
    let filteredTransactions = transactions.filter(filterFunction); // this line uses the filter method to filter the array

    // line 91 logs the filtered array in the console
    console.log(filteredTransactions);
};

// line 95 runs the filter function using the parameters provided
filterHighValueTransactions(transactions,amount => amount > 1000);


// Task 7: Closures

// the lines below create a function to track budget expenses
function createBudgetTracker() {
    let totalBudget = 0;

    return function(expense) {
        totalBudget += expense; // this line adds each expense to the last
        console.log(`Current Balance: -$${totalBudget}`); // this line logs the result in the console
    };
};

// line 111 gives a variable the result of the function
let budget = createBudgetTracker()

// the lines below run the function using the parameters provided
budget(300);
budget(200);


// Task 8: Recursion in JavaScript

// the lines below create a function to calculate the projected revenue growth
function calculateGrowth(years, revenue) {
    if (years >= 10) return revenue;
    return calculateGrowth(years + 1, revenue * 1.05); // if the year is less than 10 than it will run the equation to find projected revenue
};

// the lines below run the function using the parameters provided, also logging it in the console
console.log(`Projected Revenue: $${calculateGrowth(8, 1000).toFixed(2)}`);
console.log(`Projected Revenue: $${calculateGrowth(5, 5000).toFixed(2)}`);

