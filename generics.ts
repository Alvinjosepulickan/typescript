/*
function Display<T>(input:T){
    let j:Array<T>=new Array<T>();
    j.push(input);
    console.log(j)
    console.log(input)
}
Display<number>(10);

class Rectangle<T,u>{
    public width:T;
    public length:u;
    constructor(width:T,Length:u) {
        
        this.width=width;
        this.length=Length;
    }
    
}
*/
/*
class Product<T>{
    public  productName :T ;
    constructor(name:T){
        this.productName=name;
    }
}
function printData<T>( data: T): T {
   return data;
   }

// variable declaration to access Generic function
const stringData: string = printData<string>('Hello Generics');
let productData: Product<String> = printData<Product<String>>(new Product<String>("Phone"));
// line to populate the result of Generic function on console.
console.log('String data ' + stringData);
console.log(productData);

*/
// declaring Generic interface named Inventory
interface Inventory<T> {
    addItem: (newItem: T) => void;
    getProductList: () => Array<T>;
    }

// declaring Gadget class implementing Generic interface Inventory of string type
class Gadget implements Inventory<string> {

    // assigning string array value to variable
    productList: Array<string> = ['Mobile', 'Tablet', 'Ipod'];

    addItem(newItem: string): void {
        console.log('Item added');
    }

    // method to populate the product list
    getProductList(): Array<string> {
    return this.productList;
    }

}

// creating the reference variable of string type Inventory interface holding Gadget class object
const productInventory: Inventory<string> = new Gadget();

// logic to store the product list information into a variable
const allProducts: Array<string> = productInventory.getProductList();

// line to populate the products details on console
console.log('The available products are : ' + allProducts);

