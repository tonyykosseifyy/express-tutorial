const mongoose = require("mongoose");

const { Schema } = mongoose;

const BootcampSchema = new Schema({
  name : {
    type: String ,
    required: [ true , "Please add a name"],
    unique: true ,
    maxlength: [50 , "Name cannot be more than 50 characters"],
    trim : true
  },
  slug: String ,
  description: {
    type: String ,
    required: [ true , "Please add a description"],
    maxlength: [500 , "Name cannot be more than 500 characters"]
  },
  website: {
    type: String ,
    match: [/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g , "Please add a valid url"‌​]
  },
  phone: {
    type: String ,
    maxlength : [20 ,"Phone number cannot be more than 50 characters" ]
  },
  email : {
    type: String ,
    match:[/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ , "Please add a valid email"]
  },
  address: {
    type: String,
    required: [ true , "Please add an address"]
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true,
      index: "2dsphere"
    },
    formattedAddress : String ,
    street : String ,
    city: String ,
    state: String ,
    zipcode: String,
    country: String
  },
  careers: {
    type: [String] ,
    required: true ,
    enum: [
      "Web development",
      "Mobile development",
      "UI/UX",
      "Data Science",
      "Business",
      "Other"
    ]
  },
  averageRating : {
    type: Number ,
    min: [1 , "Rating must be at least 1"],
    max: [10 , "Rating can not be more than 10"]
  },
  averageCost:Number ,
  photo: {
    type: String ,
    default: "no-photo.jpg"
  },
  housing: {
    type : Boolean ,
    default: false
  },
  jobAssistance: {
    type : Boolean ,
    default: false
  },
  jobGuarrantee: {
    type : Boolean ,
    default: false
  },
  acceptGi: {
    type : Boolean ,
    default: false
  },
  createdAt: {
    type: String ,
    default: Date.now
  }
});

module.exports = mongoose.model("Bootcamp", BootcampSchema);
