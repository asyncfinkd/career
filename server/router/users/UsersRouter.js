const express = require("express").Router();
const UsersSchema = require("../../schema/users/UsersSchema");

router.route("/add/users").post(async (req, res) => {
  const {
    firstName,
    lastName,
    cityOrRegion,
    country,
    lastHired,
    lastPosition,
    email,
    mobilePhone,
    motivationMessage,
    checked,
    ipAddress,
    applicationTitle,
    applicationLocation,
    applicationTime,
  } = req.body;

  const application = {
    applicationTitle: applicationTitle,
    applicationLocation: applicationLocation,
    applicationTime: applicationTime,
  };

  const Users = new UsersSchema({
    firstName: firstName,
    lastName: lastName,
    cityOrRegion: cityOrRegion,
    country: country,
    lastHired: lastHired,
    lastPosition: lastPosition,
    email: email,
    mobilePhone: mobilePhone,
    motivationMessage: motivationMessage,
    checked: checked,
    ipAddress: ipAddress,
    application: [application],
  });
  Users.save();
  res.json({ success: true });
});

module.exports = router;
