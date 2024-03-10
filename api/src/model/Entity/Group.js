const lrs = require("lrs/index")
class Group{
    constructor(name, publicKeys){
        this.name = name;
        this.publicKeys = publicKeys;
    }
    gen(){
        return lrs.gen();
    }

}