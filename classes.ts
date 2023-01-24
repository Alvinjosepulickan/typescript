/* implementing interface
interface IProduct{
    Id:Number;
    Name:String
    getName(id:number):String;
}

class Product implements IProduct {
    Id:number;
    Name:string;
    constructor(id:number,name:string) {
        this.Id=id;
        this.Name=name
    }
    getName=(id:number):string=>{return this.Name;}
}
let product:Product=new Product(1,"1");

*/

/*
// declaring a Product class
class Product {

    static productPrice: string="free";
// constructor declaration
    constructor(private productId: number,private productPrice: number) {
    }
    getProductId(): string {
        return 'Product id is : ' + this.productId;
        //console.log(this.getProductPrice());
    }
    private getProductPrice(): string {
        return 'Product price is : ' + this.productPrice;
    }
}

// creation of Product class object
const product: Product = new Product(1234,12);
console.log(Product.productPrice);
// line to populate the product id details
console.log(product.getProductId());
*/
/* getters and setters
class Product{
    private productId :number
    get ProductId():number{
        return this.productId;
    }
    set ProductId(id :number){
        this.productId=id;
    }
}
var j:Product=new Product();
j.ProductId=10;
console.log(j.ProductId)
*/

/* //inheritance
class Product{
    protected productId:number;
    constructor(productId: number) {
        this.productId=productId;
    }
    public getProductId(){
        console.log("this.productId is ");
    }
}
class Gadget extends Product{
    protected productName:string;
    constructor(productName:string) {
        super(1);
        this.productName=productName
    }
    public getProductId(){
        super.getProductId();
        console.log(this.productId);
    }
}
var j=new Gadget("phone");
j.getProductId();
*/

//abstract class
/*
abstract class Product{
    protected productId:number;
    constructor(productId: number) {
        this.productId=productId;
    }
    abstract  getProductId();
}
class Gadget extends Product{
    protected productName:string;
    constructor(productName:string) {
        super(1);
        this.productName=productName
    }
    public getProductId(){
        console.log(this.productId);
    }
}
var j=new Gadget("phone");
j.getProductId();
*/
/* wired problem
class Demo {
    n :number= 9;
     check(){
           if(this.n==9){
           let n:number= 10;
               console.log(n);
           }
     }
   } 
let demoObject=new Demo();
demoObject.check();
*/
//static methods and properties
/*
class Product{
    static productId:number;
    constructor(productId: number) {
        //this.productId=productId;
    }
    public static getProductId(){
        console.log("this.productId is ");
    }
}
*/