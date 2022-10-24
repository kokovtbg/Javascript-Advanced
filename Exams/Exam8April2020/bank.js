class Bank {
    constructor(bankName) {
        this._bankName = bankName;
        this.allCustomers = [];
    }

    newCustomer(customer) {
        let custInBank = this.allCustomers.find(c => c.personalId === customer.personalId);
        if (custInBank) {
            throw new Error(`${customer.firstName} ${customer.lastName} is already our customer!`);
        }
        this.allCustomers.push(customer);
        return customer;
    }

    depositMoney(personalId, amount) {
        let customer = this.allCustomers.find(c => c.personalId === personalId);
        if (!customer) {
            throw new Error('We have no customer with this ID!');
        }
        if (!customer.hasOwnProperty('totalMoney')) {
            customer.totalMoney = amount;
        } else {
            customer.totalMoney += amount;
        }
        let transObject = {
            operation: 'made deposit of',
            amount: amount
        }
        if (!customer.transactions) {
            customer.transactions = [];
        }
        customer.transactions.push(transObject);
        
        return `${customer.totalMoney}$`;
    }

    withdrawMoney(personalId, amount) {
        let customer = this.allCustomers.find(c => c.personalId === personalId);
        if (!customer) {
            throw new Error('We have no customer with this ID!');
        }
        if (customer.totalMoney < amount) {
            throw new Error(`${customer.firstName} ${customer.lastName} does not have enough money to withdraw that amount!`);
        }
        let transObject = {
            operation: 'withdrew',
            amount: amount
        }
        if (!customer.transactions) {
            customer.transactions = [];
        } 
        customer.transactions.push(transObject);
        customer.totalMoney -= amount;
        
        return `${customer.totalMoney}$`;
    }

    customerInfo(personalId) {
        let customer = this.allCustomers.find(c => c.personalId === personalId);
        if (!customer) {
            throw new Error('We have no customer with this ID!');
        }
        let result = [];
        result.push(`Bank name: ${this._bankName}`);
        result.push(`Customer name: ${customer.firstName} ${customer.lastName}`);
        result.push(`Customer ID: ${customer.personalId}`);
        result.push(`Total Money: ${customer.totalMoney}$`);
        result.push('Transactions:');
        let tempRes = [];
        customer.transactions
            .forEach((t, i) => tempRes.push(`${i + 1}. ${customer.firstName} ${customer.lastName} ${t.operation} ${t.amount}$!`));
        tempRes.reverse();
        tempRes.forEach(e => result.push(e));
        return result.join('\n');
    }
}

let bank = new Bank('SoftUni Bank');

console.log(bank.newCustomer({firstName: 'Svetlin', lastName: 'Nakov', personalId: 6233267}));
console.log(bank.newCustomer({firstName: 'Mihaela', lastName: 'Mileva', personalId: 4151596}));

bank.depositMoney(6233267, 250);
console.log(bank.depositMoney(6233267, 250));
bank.depositMoney(4151596,555);

console.log(bank.withdrawMoney(6233267, 125));

console.log(bank.customerInfo(6233267));
