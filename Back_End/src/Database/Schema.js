const mongoose = require("mongoose");
const bcypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlen: 3
    },
    enroll: {
        type: Number,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    mobile: {
        type: Number,
        min: 10,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    message: [
        {
            name: {
                type: String,
                required: true,
                minlen: 3
            },
            enroll: {
                type: Number,
                unique: true,
                required: true
            },
            email: {
                type: String,
                unique: true,
                required: true
            },
            mobile: {
                type: Number,
                min: 10,
                required: true
            },
            message: {
                type: String,
                required: true
            }
        }
    ],
    tokens: [
        {
            token: {
                type: String,
                required: true
            }
        }
    ]
});

schema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = await bcypt.hash(this.password, 5);
    }
    next();
});

schema.methods.generateAuthToken = async function () {
    try {
        console.log("comming.............");
        let token = jwt.sign({ _id: this._id }, "HGRLSRGHLS");
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    } catch (e) {
        console.log(e);
    }
}

schema.methods.savingMessage = async function (name, email, mobile, message) {
    try {
        console.log("i now.");
        const messageSave = this.message.concat({ name, email, mobile, message });
        const datasave = await messageSave.save();
        return messageSave;
    }catch(err){
        console.log(err);
    }
}

const Collections = new mongoose.model("Collections", schema);

module.exports = Collections;

