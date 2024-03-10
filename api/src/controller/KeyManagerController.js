const Key = require('../model/Entity/Key');

exports.gen = async (req, res) =>{
    let keys = Key.Key.gen();
    res.status(200).json({
        publicKey: keys.publicKey,
        privateKey: keys.privateKey,
    })
}
exports.sign = async (req, res) =>{
    var alice = Key.Key.gen();
    var bob = Key.Key.gen();
    var eve = Key.Key.gen();
    var group = [alice, bob, eve].map((m) => m.publicKey);
    let privateKey = req.body.privateKey;
    let publicKey = req.body.publicKey;
    let forms = JSON.stringify(req.body.forms);
    let participant = {
        privateKey: privateKey,
        publicKey: publicKey
    }
    let sign = Key.Key.sign(group, participant,forms);
    res.status(200).json({
        message: "success",
        sign: sign
    })
}