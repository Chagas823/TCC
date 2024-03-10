const lrs = require("lrs/index")
class Key{
    constructor(){
        
    }
    static gen(){
        return lrs.gen();
    }
    static multipleAnswerCheck(signatureA, signatureB){
        return lrs.link(signatureA, signatureB);
    }
    static sign(group, party, message){
        return lrs.sign(group, party, message);
    }

}

module.exports = { Key };
