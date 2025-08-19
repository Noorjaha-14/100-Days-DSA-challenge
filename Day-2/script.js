//Day2 of 100days DSA challenge

//1.
let items = [
    { name: "Pen", qty: 3, price: 10 },
    { name: "Notebook", qty: 2, price: 50 },
    { name: "Bag", qty: 1, price: 400 }
];
let invoice = items.map(item => {
    return {
        name: item.name, total: item.qty * item.price
    };
});
console.log("Invoice Report :-", invoice);


//2.
let users = ['Ali', 'Sara', 'Zoya', 'Ali', 'Zara', 'Sara'];
let duplicates = users.filter((user, index) => users.indexOf(user) !== users.lastIndexOf(user));
duplicates = [...new Set(duplicates)]; //removes repeated duplicates from final result.
console.log("Duplicate Entries :-", duplicates);


//3.
let orders = [
    { product: 'Pen', qty: 10 },
    { product: 'Notebook', qty: 5 },
    { product: 'Pen', qty: 15 },
    { product: 'Bag', qty: 1 },
    { product: 'Notebook', qty: 10 }
];
//Build frequency map
let sales = orders.reduce((a, order) => {
    a[order.product] = (a[order.product] || 0) + order.qty;
    return a;
}, {});
// Find product with max sales
let mostsold = Object.keys(sales).reduce((a, b) =>
    sales[a] > sales[b] ? a : b);
console.log("Most Sold Product:-", mostsold);
