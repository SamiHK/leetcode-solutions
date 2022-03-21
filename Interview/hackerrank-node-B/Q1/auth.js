const VPK = __dirname + "/valid-keys.txt";

const SHORT_ID = require("shortid");

const LE = require("os").EOL;

const FS = require("fs");


module.exports = function (req, res) {

    let CREATED = 201;
  
    const SECRET_KEY = SHORT_ID();
  
    FS.appendFileSync(VPK, SECRET_KEY + LE);
    
    res.status(CREATED).json({ apiKey :SECRET_KEY });

};