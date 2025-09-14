const pd1 = {
    name : "Quat",
    price : 300,
    inStock : true
}
const pd2 = {
    name : "Ghe",
    price : 100,
    inStock : true
}
const pd3 = {
    name : "Ban",
    price : 400,
    inStock : false
}
const pd4 = {
    name : "The",
    price : 30,
    inStock : true
}
const pd5 = {
    name : "But",
    price : 10,
    inStock : false
}
const pd6 = {
    name : "Tu",
    price : 3000,
    inStock : true
};


const products = [pd1, pd2, pd3, pd4, pd5];

console.log(pd1.name);

pd2.price = 150;
console.log(products);

products.push(pd6);
a = products.slice()
console.log(a);

products.pop();
console.log(products);

products.forEach((key,value) => {
    console.log(key.name);
})

b = products.map((key,value) =>{
    return key.price;
})
console.log(b);

c = products.filter((key,value) =>{
    return key.inStock == true;
})
console.log(c);


