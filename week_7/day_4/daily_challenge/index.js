let client = "John";

const groceries = {
    fruits : ["pear", "apple", "banana"],
    vegetables: ["tomatoes", "cucumber", "salad"],
    totalPrice : "20$",
    other : {
        payed : true,
        meansOfPayment : ["cash", "creditCard"]
    }
}

const displayGroceries = () => {
    groceries.fruits.forEach(fruit => {
        console.log(fruit);
    });
}
displayGroceries();

const cloneGroceries = () => {
    let user = client;
    client = "Betty";
}

console.log(cloneGroceries());
//No, we will not see this modification in the user variable. This is because when we assign a variable to another (client = user) it only copies the value of the previous variable and not the reference.
// So when we change the value of the client variable, the user variable will remain unchanged.

const cloneGroceries2 = () => {
    let user = client;
    client = "Betty";
    let shopping = groceries;
    shopping.totalPrice = "35$";
    shopping.other.payed = false;
    console.log(groceries === shopping)
}
cloneGroceries2();


//Yes, we will see this modification in the shopping object because when we assign a variable to an object (shopping = groceries), it is copying the reference of the object and not the value. 
//So when we change the value of the keys, it will be reflected in the shopping object.