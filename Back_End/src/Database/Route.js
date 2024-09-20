const express = require("express");
const route = new express.Router();
const Collect = require("./Schema");
const ancript = require("bcryptjs");
const middleware = require('../authenticate/middleware');


route.get("/Aboutchecking", middleware, (req, res) => {
    console.log("I am in a middleware.");
    res.send(req.rootUser);
});

route.get("/Contectchecking", middleware, (req, res) => {
    console.log("I am in a middleware.");
    res.send(req.rootUser);
});

route.get("/Logoutchecking", middleware, (req, res) => {
    res.clearCookie("generateToken")
    console.log("I am in a logout.");
    res.send("req");
});


// for message checking and accepted some features
route.post("/ContectPaging", async (req, res) => {

    const { name, email, mobile, message } = req.body;
    console.log(name);
    if (!name || !email || !mobile || !message) {
        return res.status(404).json({ message: "Any one fild is empty" });
    }

    try {
        const verify = await Collect.findOne({ name:name });

        if (verify) {
            const messageSaving = await verify.savingMessage(name, email, mobile, message);
            const conform = verify.save();

            if (conform) {
                res.status(200).json({ message: "Id meet successfully...." });
            }else{
                res.status(400).json({ message: "Not data inserted...." });
            }
        }

    } catch (err) {
        console.log(err);
    }

})



/*
route.get("/", async (req,res) => {
    res.send("I am live on this server.");
    res.send(Collection.find());
 });*/
/*
route.post("/Add",async (req,res)=>{
    const { name,enroll,email,mobail,password } = req.body;
 
    if(!name || !enroll || !email || !mobail || !password){
        return res.send("Your any one field is blank.");
    }
    try{
        const resemail = await Collect.findOne({ email:email });
        
        if(resemail){
            return res.status(422).json({error:"Your email is already exist"});
        }
        const ndata = new Collect({
            name,enroll,email,mobail,password
        });
        const result = await ndata.save();
        console.log(result);
        res.status(201).json({message:"Your data is add successfull."});
    }catch(err){
        console.log(err);
    }
})*/

route.post("/Ragistretion", async (req, res) => {
    const { name, enroll, email, mobile, password } = req.body;

    if (!name || !enroll || !email || !mobile || !password) {
        return res.send("Your any one field is blank.");
    }
    try {
        const resemail = await Collect.findOne({ email: email });

        if (resemail) {
            return res.status(422).json({ error: "Your Email is already exist." });
        }
        const ndata = new Collect({
            name, enroll, email, mobile, password
        });
        const result = await ndata.save();
        console.log(result);
        res.status(201).json({ message: "Your data is add successfull." });
    } catch (err) {
        console.log(err);
    }
})

route.post("/Loginchecking", async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(204).json({ error: "Your any one field is empty." });
    }
    try {
        const checke = await Collect.findOne({ email: email });

        if (!checke) {
            return res.status(422).json({ error: "your email is wronge." });
        }

        const checkp = await ancript.compare(password, checke.password);
        if (!checkp) {
            return res.status(401).json({ error: "your password is wronge." });
        }

        const token = await checke.generateAuthToken();
        res.cookie("generateToken", token, ({
            expires: new Date(Date.now() + 1000000000),
            httpOnly: true
        })
        );

        return res.status(200).json({ message: "Your login is successfull." });

    } catch (e) {
        console.log("Your try function in not inserted just try again.");
    }
})

module.exports = route;