///<reference path="./BaseNamespace.ts"/>
import util= BaseNamespace.ChildNamespace;
let amount=util.CalculateAmount(10,10);
console.log(amount);
import util1=BaseNamespace;
console.log(util1.CalculatePrice(10,0.05));