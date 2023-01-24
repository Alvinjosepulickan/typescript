var BaseNamespace;
(function (BaseNamespace) {
    var ChildNamespace;
    (function (ChildNamespace) {
        function CalculateAmount(price, quantity) {
            return price * quantity;
        }
        ChildNamespace.CalculateAmount = CalculateAmount;
    })(ChildNamespace = BaseNamespace.ChildNamespace || (BaseNamespace.ChildNamespace = {}));
    function CalculatePrice(price, quantity) {
        return price * quantity;
    }
    BaseNamespace.CalculatePrice = CalculatePrice;
    function newFun() {
        console.log("newFunc");
    }
})(BaseNamespace || (BaseNamespace = {}));
///<reference path="./BaseNamespace.ts"/>
var util = BaseNamespace.ChildNamespace;
var amount = util.CalculateAmount(10, 10);
console.log(amount);
var util1 = BaseNamespace;
console.log(util1.CalculatePrice(10, 0.05));
