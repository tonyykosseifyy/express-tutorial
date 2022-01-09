const mongoose = require("mongoose");

const { Schema } = mongoose ;


const BlogSchema = new Schema({
  title: {
    type: String ,
    unique : true ,
    required: true
  },
  createdAt: { type: Date, default: Date.now },
  comment : [{type: String , date: Date.now}],
  adult: Boolean ,
  voting: Number ,
});


module.exports = mongoose.model("Blog" , BlogSchema);
