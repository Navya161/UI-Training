let transactions = [150.50, -40.00, 200.00, 50.75, -10.00, 300.25];
let total = 0;

for (let i = 0; i < transactions.length; i++) {
    if (transactions[i] < 0) {
        continue; 
    }

    total = total + transactions[i];
}

console.log("Total Valid Transactions:", total);