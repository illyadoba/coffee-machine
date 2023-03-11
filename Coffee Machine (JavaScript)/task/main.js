// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages

const input = require('sync-input')

class CoffeeMachine {
    constructor(money, water, milk, coffeeBeans, disposableCups) {
        this.money = money;
        this.water = water;
        this.milk = milk;
        this.coffeeBeans = coffeeBeans;
        this.disposableCups = disposableCups;
    }

    chooseAction() {
        let action = input(`Write action (buy, fill, take, remaining, exit): \n`)
        switch (action) {
            case 'buy':
                this.buy();
                return true;
            case 'fill':
                this.fill();
                return true;
            case 'take':
                this.take();
                return true;
            case 'remaining':
                this.getStats();
                return true;
            case 'exit':
                return false;
            default:
                console.log("Wrong action.");
                return true;
        }
    }

    buy() {
        let drinkNumber = input(`What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu: \n`)
        switch (drinkNumber) {
            case '1':
                this.makeEspresso();
                break;
            case '2':
                this.makeLatte();
                break;
            case '3':
                this.makeCappuccino();
                break;
            default:
                console.log();
        }
    }

    makeEspresso() {
        if (this.water < 250) {
            console.log("Sorry, not enough water!")
        } else if (this.coffeeBeans < 16) {
            console.log("Sorry, not enough coffee beans!")

        } else if (this.disposableCups < 1) {
            console.log("Sorry, not enough coffee disposable cups!")
        } else {
            console.log("I have enough resources, making you a coffee!")
            this.water -= 250;
            this.coffeeBeans -= 16;
            this.disposableCups -= 1;
            this.money += 4;
        }
    }

    makeLatte() {
        if (this.water < 350) {
            console.log("Sorry, not enough water!")
        } else if (this.milk < 75) {
            console.log("Sorry, not enough milk!")
        } else if (this.coffeeBeans < 20) {
            console.log("Sorry, not enough coffee beans!")
        } else if (this.disposableCups < 1) {
            console.log("Sorry, not enough coffee disposable cups!")
        } else {
            console.log("I have enough resources, making you a coffee!")
            this.water -= 350;
            this.milk -= 75;
            this.coffeeBeans -= 20;
            this.disposableCups -= 1;
            this.money += 7;
        }
    }

    makeCappuccino() {
        if (this.water < 200) {
            console.log("Sorry, not enough water!")
        } else if (this.milk < 100) {
            console.log("Sorry, not enough milk!")
        } else if (this.coffeeBeans < 12) {
            console.log("Sorry, not enough coffee beans!")
        } else if (this.disposableCups < 1) {
            console.log("Sorry, not enough coffee disposable cups!")
        } else {
            console.log("I have enough resources, making you a coffee!")
            this.water -= 200;
            this.milk -= 100;
            this.coffeeBeans -= 12;
            this.disposableCups -= 1;
            this.money += 6;
        }
    }

    fill() {
        this.water += Number(input(`Write how many ml of water you want to add: `))
        this.milk += Number(input(`Write how many ml of milk you want to add: `))
        this.coffeeBeans += Number(input(`Write how many grams of coffee beans you want to add: `))
        this.disposableCups += Number(input(`Write how many disposable cups you want to add: `))
    }

    take() {
        console.log(`I gave you $${this.money}`)
        this.money = 0;
    }

    getStats() {
        console.log(`\nThe coffee machine has:
${this.water} ml of water
${this.milk} ml of milk
${this.coffeeBeans} g of coffee beans
${this.disposableCups} disposable cups
$${this.money} of money\n`)
    }
}

let coffeeMachine1 = new CoffeeMachine(550, 400, 540, 120, 9);
while (coffeeMachine1.chooseAction()) {
}