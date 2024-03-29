#! /usr/bin/env node 
import inquirer from "inquirer";
let myBalance = 100000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: "Enter your pin code",
        type: "number"
    }
]);
if (pinAnswer.pin === myPin) {
    console.log("Correct pin code!!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select options",
            type: "list",
            choices: ["Withdraw", "Check Balance", "fast cash"]
        }
    ]);
    console.log("operationAns");
    if (operationAns.operation === "Withdraw") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance!");
        }
        else {
            myBalance -= amountAns.amount;
            console.log("Your remaining balance is: " + myBalance);
        }
    }
    if (operationAns.operation === "Check Balance") {
        console.log("Your Balance is :" + myBalance);
    }
    else if (operationAns.operation === "fast cash") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "select your amount",
                type: "list",
                choices: [1000, 2000, 3000, 4000, 5000, 10000, 100000, 200000]
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance!");
        }
        else {
            myBalance -= amountAns.amount;
            console.log("Your remaining balance is:" + myBalance);
        }
    }
}
else {
    console.log("invalid pin code !");
}
