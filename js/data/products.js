window.products = [
    {sku:"FOO123",	name:"loaf of bread",  	type:"food",	quantity:1,		price:0.85},
    {sku:"FOO124",	name:"multipack beans",	type:"food",	quantity:1,		price:1},
    {sku:"FOO125",	name:"mushrooms",  	type:"food",	quantity:10,   	price:0.1},
    {sku:"ALC222",	name:"can of beer",		type:"alcohol", 	quantity:4,	price:1.1},
    {sku:"ALC223",	name:"prosecco",   		type:"alcohol", 	quantity:1,		price:8.99},
    {sku:"FOO126",	name:"steak",      		type:"food",	quantity:2,	price:3.99},
    {sku:"FOO127",	name:"blue cheese",		type:"food",	quantity:1,		price:2.99},
    {sku:"HOM310",	name:"candles",    		type:"home",	quantity:3,	price:1.99},
    {sku:"FOO128",	name:"cheesecake", 		type:"food",	quantity:1,		price:4.99},
    {sku:"FOO129",	name:"onions",     		type:"food",	quantity:3,	price:0.4}
];

window.products = [
    {sku:"DK001",	name:"Navy",  	type:"Double Knitting",	length:"295", kneedle:"4", quantity:1,  price:2.19},
    {sku:"DK002",	name:"Denim",   type:"Double Knitting",	length:"295", kneedle:"4", quantity:1,  price:2.19},
    {sku:"DK003",	name:"Silver",  type:"Double Knitting",	length:"295", kneedle:"4", quantity:1,	price:2.19},
    {sku:"DK004",	name:"Mustard", type:"Double Knitting",	length:"295", kneedle:"4", quantity:1,	price:2.19},
    {sku:"AR001",	name:"Navy",    type:"Arran",	length:"196", kneedle:"5", quantity:1,	price:2.19},
    {sku:"AR002",	name:"Denim",   type:"Arran",	length:"196", kneedle:"5", quantity:1,	price:2.19},
    {sku:"AR003",	name:"Silver",  type:"Arran",	length:"196", kneedle:"5", quantity:1,	price:2.19},
    {sku:"AR004",	name:"Mustard", type:"Arran",	length:"196", kneedle:"5", quantity:1,	price:2.19},
    {sku:"CH001",	name:"Navy",    type:"Chunky",	length:"144", kneedle:"6", quantity:1,	price:2.19},
    {sku:"CH002",	name:"Denim",   type:"Chunky",	length:"144", kneedle:"6", quantity:1,	price:2.19},
    {sku:"CH003",	name:"Silver",  type:"Chunky",	length:"144", kneedle:"6", quantity:1,	price:2.19},
    {sku:"CH004",	name:"Mustard", type:"Chunky",	length:"144", kneedle:"6", quantity:1,	price:2.19},
    {sku:"XL001",	name:"Navy",    type:"XL",	length:"136", kneedle:"10", quantity:1,	price:5.29},
    {sku:"XL002",	name:"Denim",   type:"XL",	length:"136", kneedle:"10", quantity:1,	price:5.29},
    {sku:"XL003",	name:"Silver",  type:"XL",	length:"136", kneedle:"10", quantity:1,	price:5.29},
    {sku:"XL004",	name:"Mustard", type:"XL",	length:"136", kneedle:"10", quantity:1,	price:5.29}
];

// Returns the product where the sku matches the supplied parameter
function getProductBySku(sku) {
    let products = window.products.filter(product => product.sku === sku);

    return products[0];
}