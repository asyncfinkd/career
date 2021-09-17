const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const ApplicationInformation = mongoose.Schema({
  aplicationTitle: {
    type: String,
  },
  applicationLocation: {
    type: String,
  },
  applicationTime: {
    type: String,
  },
});

const UsersSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  cityOrRegion: {
    type: String,
  },
  country: {
    type: String,
  },
  lastHired: {
    type: String,
  },
  lastPosition: {
    type: String,
  },
  email: {
    type: String,
  },
  mobilePhone: {
    type: String,
  },
  motivationMessage: {
    type: String,
  },
  checked: {
    type: Boolean,
  },
  ipAddress: {
    type: String,
  },
  application: [ApplicationInformation],
});

const UserSchema = mongoose.model("users", UsersSchema);
module.exports = UserSchema;
