const router = require("express").Router();

router.get("/", (req, res, next) => {
  res.json("All good in students");
});

const studentsRoutes = require("./students.routes");
router.use("/students", studentsRoutes);

module.exports = router;
