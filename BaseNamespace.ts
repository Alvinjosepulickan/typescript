namespace BaseNamespace{
    export namespace ChildNamespace{
        export function CalculateAmount(price:number,quantity:number):number{
            return price * quantity;
        }
    }
    export function CalculatePrice(price:number,quantity:number):number{
        return price * quantity;
    }
    function newFun():void{
        console.log("newFunc");
    }
}