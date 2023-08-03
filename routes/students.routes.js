const Student = require("../models/Student.model");

const router = require("express").Router();

/*Get all students (read)*/
router.get("/", async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (error) {
    console.log(error);
    res.status(500).json({error});
  }
});

/*Get one student (read)*/
router.get("/:studentId", async (req, res) => {
  try {
    const student = await Student.findById(req.params.studendId);
    res.status(200).json(student);
  } catch (error) {
    console.log(error);
    res.status(500).json({error});
  }
});
/*Post one student (create)*/
router.post("/", async (req, res) => {
  try {
    const payload = req.body;
    const newStudent = await Student.create(payload);
    res.status(201).json(newStudent);
  } catch (error) {
    console.log(error);
    res.status(500).json({error});
  }
});
/*PUT one student (update)*/
router.put("/:studentId", async (req, res) => {
  try {
    const payload = req.body;
    const updatedStudent = await Student.findByIdAndUpdate(
      req.params.studentId,
      payload,
      { new: true }
    );
    res.status(202).json(updatedStudent);
  } catch (error) {
    console.log(error);
    res.status(500).json({error});
  }
});
/*DELETE one student (delete)*/
router.delete("/:studentId", async (req, res) => {
  try {
    const deletedStudent = await Student.findByIdAndDelete(
      req.params.studentId
    );
    res.status(202).json({ message: "Student deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({error});
  }
});

module.exports = router;
