//Day1 of 100days-DSA challenge

//1.
let products = ['Laptop', 'Mobile', 'Tablet', 'Camera', 'Watch'];
products.splice(2,2);
console.log(products);

//2.
let students = ['Ali', 'Sara', 'Zoya'];
students.splice(1,0,'Nina','Omar');
console.log("Two new students:-",students);

//3.
let scores = ['Zainab', 'Ali', 'Farhan', 'Nida', 'Ayaan'];
scores.splice(3,4);
console.log("Top 3 performing students:-",scores);

//4.
let sales = [220, 300, 280, 150, 400, 390, 310];
sales.splice(0,5);
console.log("sales of the last 2 days:-",sales);

//5.
let users = [
  {name: 'Ahmed', active: true},
  {name: 'Mira', active: false},
  {name: 'John', active: true},
];
let activeUsers=users.filter(user =>user.active);
console.log( "Active users:-",activeUsers);

//6.
let phoneNumbers = ['1234567890', '12345', '9876543210', '678901234'];
let number=phoneNumbers.filter(num=>num.length>=10);
console.log("valid Ph.No:-",number);

//7.
let prices = [100, 200, 300];
let pricewithTax=prices.map(price=>price*1.18); //transforms each element and returns a new array.
console.log("Price With Tax:-",pricewithTax);

//8.
let sites = ['google', 'amazon', 'microsoft'];
let website=sites.map(site=>site+'.com'); //transforms each item in the array.
console.log("websites:-",website);

//9.
let cart = [499, 1299, 299, 799];
let total=cart.reduce((sum,price)=>sum+price,0);  //reduces array to a single value.,0 → starting value for sum.
console.log("Total Cart Price:-",total);

//10.
let votes = ['A', 'B', 'A', 'C', 'B', 'A'];
let votecount=votes.reduce((vote,candidate)=>{  //builds an object step by step.,If the candidate is not yet in the object, start at 0.Add +1 for each occurrence.
    vote[candidate]=(vote[candidate] || 0)+1;
    return vote;
},{});
console.log("Frequency of Votes:-",votecount)

