// 1. Create the account object containing properties and methods
const account = {
    accountName: "Dash",
    balance: 1000, // Starting balance for testing

    getBalance: function () {
        console.log(`Your current balance is: $${this.balance.toFixed(2)}`);
    },

    deposit: function () {
        let input = prompt("Enter amount to deposit:");
        if (input === null) return; // User clicked cancel

        let amount = parseFloat(input);

        if (isNaN(amount) || amount <= 0) {
            this.accountError();
        } else {
            this.balance += amount;
            console.log(`Successfully deposited $${amount.toFixed(2)}. New balance: $${this.balance.toFixed(2)}`);
        }
    },

    withdrawal: function () {
        let input = prompt("Enter amount to withdraw:");
        if (input === null) return;

        let amount = parseFloat(input);

        if (isNaN(amount) || amount <= 0) {
            this.accountError();
        } else if (amount > this.balance) {
            console.log("Error: Insufficient funds for this withdrawal.");
        } else {
            this.balance -= amount;
            console.log(`Successfully withdrew $${amount.toFixed(2)}. Remaining balance: $${this.balance.toFixed(2)}`);
        }
    },

    getAccountName: function () {
        console.log(`Account Holder Name: ${this.accountName}`);
    },

    // accountError handles invalid inputs or formatting mistakes using a thinking/logic approach
    accountError: function () {
        console.log("Error: Invalid input. Please enter a valid positive number.");
    },

    exitAccount: function () {
        console.log("Thank you for using the ATM. Goodbye!");
    }
};

// 2. The atm() function managing the user interface and choices
function atm() {
    let keepRunning = true;

    while (keepRunning) {
        const message = parseFloat(
            prompt("Select a choice:\n1.) See balance\n2.) Make a deposit\n3.) Make a withdrawal\n4.) Get account name\n5.) Exit")
        );

        // Handle case where user clicks cancel on the main prompt
        if (isNaN(message)) {
            console.log("Exiting ATM session.");
            break;
        }

        switch (message) {
            case 1:
                account.getBalance();
                break;
            case 2:
                account.deposit();
                break;
            case 3:
                account.withdrawal();
                break;
            case 4:
                account.getAccountName();
                break;
            case 5:
                account.exitAccount();
                keepRunning = false; // Stops the loop and exits
                break;
            default:
                account.accountError();
                break;
        }
    }
}

// Uncomment below to run the ATM interface in your browser console:
// atm();