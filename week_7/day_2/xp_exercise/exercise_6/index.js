let bankAmount = 5000;
const vatPercentage = 17;
const expenses = ["+200", "-100", "+146", "+167", "-2900"];

for (let i = 0; i < expenses.length; i++) {
    let expense = parseFloat(expenses[i]); // Convert the expense string to a number
    let taxAmount = (vatPercentage / 100) * Math.abs(expense); // Calculate tax amount
    expenses[i] = expense + taxAmount; // Update the expense with tax amount included
  }

  for (let i = 0; i < expenses.length; i++) {
    bankAmount += parseFloat(expenses[i]); // Update bankAmount with expenses including taxes
  }
  
  console.log("Current bank account standing: $" + bankAmount); // Display current bank account standing