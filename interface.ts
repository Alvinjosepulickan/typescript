/*
interface IProduct{
    id:number;
    name:String;
    getProductName(id:number):string;
    displayProductName:(id:number)=>string;
}
*/
/*
// declaring an interface with optional parameter
interface Product {
    productId?: number;
    productName: string;
}

// logic to display the Product details with interface object as parameter
function getProductDetails(productobj: Product): string {
    return 'The product name is ' + productobj.productName;
}

// declaring a variable along with interface properties
const prodObject = {productName: 'Mobile', productCategory: 'Gadget'};

// declaring variable and invoking Product details function
const productDetails: string = getProductDetails(prodObject);

// line to populate the created product variable on console
console.log(productDetails);

*/

/*
interface Category{
    CategoryName:string;
}
interface Product{
    ProductId?:number;
    ProductName?:string;
}
interface ProductList extends Category,Product{
    List:Array<string>
}

let productDetailsObj: ProductList={
    CategoryName:"Mobile",
    //ProductId:100,
    //ProductName:"LG",
    List:["Apple","Samsung"]
}
*/

interface Product{
    ProductId:number;
    ProductName:string;
    //getProductName(id:number):string;
}
class Gadget implements Product{
    ProductId: number;
    ProductName: string;
    constructor(productId:number,productName:string) {
        this.ProductId=productId;
        this.ProductName=productName;
    }
    getProductName(id:number):string{
        return this.ProductName;
    }
}
var j:Product=new Gadget(1,"1");
console.log(j.getProductName(j.ProductId));
