let lrs = require("lrs/index");
let chagas = lrs.gen();
let vicente = lrs.gen();
let sales = lrs.gen();
let grupo = [chagas.publicKey, vicente.publicKey, sales.publicKey];

// assina determinada mensagem

let assinatura = lrs.sign(grupo, sales, "Sales é feio");
// verifica se o grupo assinou determinada assinatura com determinada mensagem
console.log(lrs.verify(grupo, assinatura, "Sales é feio"));
let assinatura2 = lrs.sign(grupo, chagas, "Vicente é feio");
console.log(chagas)
console.log(lrs.link(assinatura, assinatura2))