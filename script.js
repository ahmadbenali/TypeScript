"use strict";
let stores = [
    {
        storeName: "ElectroShop",
        storeDescription: "Your one-stop shop for all things electronics.",
        currency: "USD",
        numberOfAvailableProducts: 100,
        isCurrentlyOpen: true
    },
    {
        storeName: "appleStore",
        storeDescription: "Your one-stop shop for all things electronics.",
        currency: "USD",
        numberOfAvailableProducts: 100,
        isCurrentlyOpen: true
    }
];
let products = ["phone", "laptop", "tablet", "smartwatch", "headphones"];
let listproducts = [
    { name: "phone", price: 80, isAvailable: true },
    { name: "laptop", price: 100, isAvailable: false },
    { name: "tablet", price: 500, isAvailable: true },
    { name: "smartwatch", price: 1000, isAvailable: true }
];
function displayStores() {
    for (const store of stores) {
        document.body.innerHTML += `<h1>${store.storeName}</h1>`;
        if (store.isCurrentlyOpen) {
            document.body.innerHTML += `<h2>${store.storeName} is currently open.</h2>`;
        }
        else {
            document.body.innerHTML += `<h2>${store.storeName} is currently closed.</h2>`;
        }
    }
}
function listProducts() {
    let container = document.getElementById("productContainer");
    if (container) {
        container.innerHTML = "";
        for (const item of listproducts) {
            if (container) {
                container.innerHTML += `<div>
                <h2>${item.name}</h2>  
                <p>${item.price}<p>
            </div>`;
                if (item.price > 500) {
                    container.innerHTML += `<h4>${item.name} is expensive.</h4>`;
                }
                else if (item.price >= 100 && item.price <= 500) {
                    container.innerHTML += `<h4>${item.name} is medium.</h4>`;
                }
                else {
                    container.innerHTML += `<h4>${item.name} is affordable.</h4>`;
                }
            }
        }
    }
}
function displayProducts() {
    for (const product of products) {
        document.body.innerHTML += `<h1>${product}</h1>`;
    }
}
function higherThen100() {
    let count = 0;
    for (const item of listproducts) {
        if (item.price >= 100) {
            count++;
        }
    }
    document.body.innerHTML += `<h2>Number of products with price >= 100: ${count}</h2>`;
}
displayStores();
let button1 = document.getElementById("myButton");
if (button1) {
    button1.addEventListener("click", () => {
        listProducts();
    });
}
// ---------- Part 5: Function Parameters and Return Types ----------
function calculateDiscount(originalPrice, discountPercentage) {
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const finalPrice = originalPrice - discountAmount;
    return finalPrice;
}
function checkProductAvailability(quantity) {
    if (quantity > 0) {
        return "In Stock";
    }
    else {
        return "Out of Stock";
    }
}
function displayStoreMessage(message) {
    console.log(message);
}
function displayProductInfo(name, price, description, currency = "USD") {
    console.log("Product Name: " + name);
    console.log("Price: " + price + " " + currency);
    if (description !== undefined) {
        console.log("Description: " + description);
    }
}
function calculateTotalPrice(...prices) {
    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        total += prices[i];
    }
    return total;
}
//MAIN
displayStoreMessage("Welcome to our store!");
console.log("Final price:", calculateDiscount(200, 25));
const quantities = [5, 0, 12];
for (let i = 0; i < quantities.length; i++) {
    console.log("Quantity " + quantities[i] + ": " + checkProductAvailability(quantities[i]));
}
displayProductInfo("Laptop", 1000);
displayProductInfo("Phone", 600, "Latest model", "JOD");
console.log("Total:", calculateTotalPrice(100, 200, 50, 150)); // 500
