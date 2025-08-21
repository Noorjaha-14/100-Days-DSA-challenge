//Day1 of 100days challenge

//1.Remove Discontinued products
let products = ['Laptop', 'Mobile', 'Tablet', 'Camera', 'Watch'];
products.splice(2,2);
console.log(products);

//2./Add New Students in between
let students = ['Ali', 'Sara', 'Zoya'];
students.splice(1,0,'Nina','Omar');
console.log("New students:-",students);

//3.Extract top performers
let scores = ['Zainab', 'Ali', 'Farhan', 'Nida', 'Ayaan'];
scores.splice(3,4);
console.log("Top 3 performing students:-",scores);

//4.Show last 2 days sales
let sales = [220, 300, 280, 150, 400, 390, 310];
sales.splice(0,5);
console.log("sales of the last 2 days:-",sales);

//5.Get all users who are active
let users = [
  {name: 'Ahmed', active: true},
  {name: 'Mira', active: false},
  {name: 'John', active: true},
];
let activeUsers=users.filter(user =>user.active);
console.log( "Active users:-",activeUsers);

//6.Block short phone numbers
let phoneNumbers = ['1234567890', '12345', '9876543210', '678901234'];
let number=phoneNumbers.filter(num=>num.length===10);
console.log("valid Ph.No:-",number);

//7.Convert price to With tax
let prices = [100, 200, 300];
let pricewithTax=prices.map(price=>price*1.18); //transforms each element and returns a new array.
console.log("Price With Tax:-",pricewithTax);

//8.Append ".com" to website names
let sites = ['google', 'amazon', 'microsoft'];
let website=sites.map(site=>site+'.com'); //transforms each item in the array.
console.log("websites:-",website);

//9.calculate total Cart price
let cart = [499, 1299, 299, 799];
let total=cart.reduce((sum,price)=>sum+price,0);  //reduces array to a single value.,0 → starting value for sum.
console.log("Total Cart Price:-",total);

//10.count Frequency of Votes
let votes = ['A', 'B', 'A', 'C', 'B', 'A'];
let votecount=votes.reduce((vote,candidate)=>{  //builds an object step by step.,If the candidate is not yet in the object, start at 0.Add +1 for each occurrence.
    vote[candidate]=(vote[candidate] || 0)+1;
    return vote;
},{});
console.log("Frequency of Votes:-",votecount)



