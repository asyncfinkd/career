const router = require("express").Router();
const JobSchema = require("../../schema/job/JobSchema");

router.route("/job").post(async (req, res) => {
  const title = req.body.title;
  const location = req.body.location;
  const time = req.body.time;
  const description = req.body.description;
  const lastTime = req.body.lastTime;
  const route = req.body.route;

  const Job = new JobSchema({
    title: title,
    location: location,
    time: time,
    description: description,
    lastTime: lastTime,
    route: route,
  });
  Job.save();
  res.json({ success: true });
});

router.route("/getalljob").post(async (req, res) => {
  JobSchema.find({}).then((result) => {
    res.json({ data: result });
  });
});

module.exports = router;
