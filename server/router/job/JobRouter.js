const router = require("express").Router();
const JobSchema = require("../../schema/job/JobSchema");

router.route("/job").post(async (req, res) => {
  const { title, description, location, time, lastTime } = req.body;

  const Job = new JobSchema({
    title: title,
    location: location,
    time: time,
    description: description,
    lastTime: lastTime,
  });
  Job.save();
  res.json({ success: true });
});

router.route("/getalljob").post(async (req, res) => {
  await JobSchema.find({}).then((result) => {
    res.json({ data: result });
  });
});

router.route("/job/:id").get(async (req, res) => {
  const result = await JobSchema.findOne({ _id: req.params.id });
  res.send(result);
});

module.exports = router;
