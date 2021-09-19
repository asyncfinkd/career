const router = require("express").Router();
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
    runnedPosition,
  } = req.body;

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
    runnedPosition: runnedPosition,
    application: {
      applicationTitle: req.body.applicationTitle,
      applicationLocation: req.body.applicationLocation,
      applicationTime: req.body.applicationTime,
    },
  });
  Users.save();
  res.json({ success: true });
});

module.exports = router;
