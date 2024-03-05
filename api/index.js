let lrs = require("./lrs/index");
let chagas = lrs.gen();
let vicente = lrs.gen();
let sales = lrs.gen();
let grupo = [chagas.publicKey, vicente.publicKey, sales.publicKey];

let assinatura = lrs.sign(grupo, sales, "Sales é feio");
// Anyone is able to verify *some* of them signed that message
console.log(lrs.verify(grupo, assinatura, "Sales é feio"));
let assinatura2 = lrs.sign(grupo, sales, "Vicente é feio");

console.log(lrs.link(assinatura, assinatura2))