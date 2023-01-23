/*
let manufactu: string[]=["samsung","sony","LG"];
manufactu.forEach(element => {
    console.log(`manufacture is ${element}`)
});

let manu : Array<string>=["samsung","sony","LG"];
manu.forEach(element => {
    console.log(`manufacture is ${element}`)
});
let man:Array<string>=manu.splice(1,2);
man.forEach(element => {
    console.log(`manufacture is ${element}`)
});
*/
// declaring an array of any datatype
const  manufacturers: any[] = [{ id: 'Samsung', checked: false },
        { id: 'Motorola', checked: false },
        { id: 'Apple', checked: true },
        { id: 'Sony', checked: false }
    ];

console.log('Available Products are: ');

 // logic to populate the above declared array's id value
for (const item of manufacturers) {

    if(item.id=="Apple" && item.checked){
     console.log(item.id);}
}