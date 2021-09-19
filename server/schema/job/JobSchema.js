const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const JobFunctions = mongoose.Schema({
  title: {
    type: String,
  },
});

const WorkExperiences = mongoose.Schema({
  title: {
    type: String,
  },
});

const knows = mongoose.Schema({
  title: {
    type: String,
  },
});

const Inputs = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  maxLength: {
    type: String,
  },
  text: {
    type: String,
  },
  isHalf: {
    type: String,
  },
});

const JobDescription = mongoose.Schema({
  title: {
    type: String,
  },
  functions: [JobFunctions],
  qualitificationRequire: {
    type: String,
  },
  workExperience: [WorkExperiences],
  know: [knows],
  salary: {
    type: String,
  },
  inputs: [Inputs],
});

const JobSchema = mongoose.Schema({
  title: {
    type: String,
  },
  location: {
    type: String,
  },
  time: {
    type: String,
  },
  description: [JobDescription],
  lastTime: {
    type: String,
  },
});

const Job = mongoose.model("jobs", JobSchema);
module.exports = Job;
