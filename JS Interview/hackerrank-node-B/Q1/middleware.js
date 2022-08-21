const VPK = __dirname + "/valid-keys.txt";

const EL = require("os").EOL;

const FS = require("fs");

module.exports = function (req, res, next) {

    const X_API_KEY = "x-api-key";

    const KEY_MISSING = "Invalid Secret Key";

    const ENCODER = "utf-8";

    const AU_AUTHORIZED = 401;

    try {

        const API_KEY = req.headers[X_API_KEY];
   
        if (!API_KEY) { throw KEY_MISSING; }
   
        let blob = FS.readFileSync(VPK, ENCODER);
   
        const VALID_KEY  = blob.split(EL);
   
        if (VALID_KEY.includes(API_KEY)) { next(); }
    
        else { throw KEY_MISSING; }

    } catch (error) {
       
        res.status(AU_AUTHORIZED)
        .send(error);
   
    }
};