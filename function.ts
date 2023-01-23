function functionName(name: string, age:number):string{
    return `Name is ${name} and Age is ${age}`
}
console.log(functionName("Alvin",25));



var getProductDetails=(productId: number):string=>{return `Product is ${productId}`}
console.log(getProductDetails(10));

/*

const manufacturers = [{ id: 'Samsung', price: 150 },
        { id: 'Microsoft', price: 200 },
        { id: 'Apple', price: 400  },
        { id: 'Micromax', price: 100  }
    ];

let test;

// Arrow function to populate the details of Array whose price is greater than 200
function myFunction() {
  test = manufacturers.filter((manufacturer) => manufacturer.price >= 200);
}

// self-invoking an arrow function
myFunction();

console.log('Details of Manufacturer array are : ');

// logic to populate the manufacturer array details based on id value
for (const item of test) {
    console.log(item.id);
}
*/
/*
let calculateAge=(yearOfBirth:number):number=>{return 2023-yearOfBirth};
console.log(calculateAge(1997));

function getProductName(productName:string):string{
    return productName;
}
let productName: string=getProductName("productName");
console.log(productName);
*/
/*
function nameFunc(age:number,...names:string[]){
    console.log(names)
}
nameFunc(2,"Ali","Imran")
*/
function add(num1:number,num2?:number) {
    if(num2){
        return num1+num2;
    }
    return num1;
}
console.log(add(3,5)+add(5)+add(3));