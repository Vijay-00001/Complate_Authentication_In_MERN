const jwt = require("jsonwebtoken");
const Collect = require("../Database/Schema");

const middleware = async (req,res,next) => {
    try{
        const token =  req.cookies.generateToken;
        
        const verifyToken = jwt.verify(token, "HGRLSRGHLS");
        
        const data = await Collect.findOne({_id:verifyToken._id,"tokens:token":token});
        
        const rootUser = await Collect.findOne({_id:verifyToken._id});
        
        if(!rootUser){
            throw new Error('User is not found.');
        }

        req.token = token;
        req.rootUser = rootUser;
        req.userId = rootUser._id;

        next();
    }catch(err){
        res.status(401).send("unothorized user.");
        console.log("err");
    }
}

module.exports = middleware;