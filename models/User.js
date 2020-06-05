const  { Schema, model, Types } = require('mongoose');

const schema = new Schema({
    creationDate: { type: Date, default: Date.now },
    name:{type: String, required: true, unique: true},
    password:{type: String, required:true},
    admin:{type: Boolean, default:true},
})

module.exports = model('User', schema);