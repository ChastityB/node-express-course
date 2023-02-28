const express = require("express");
const router = express.Router();

const {
  getPeople,
  createPerson,
  createPersonPostman,
  updatePerson,
  deletePerson,
} = require("../controllers/people");

//way one to route

// router.get("/", getPeople);
// router.post("/", createPerson);
// router.post("/postman", createPersonPostman);
// router.put("/:id", updatePerson);
// router.delete("/:id", deletePerson);

//way two to route
router.route("/").get(getPeople).post(createPerson);
router.route("postman").post(createPersonPostman);
router.route("/:id").put(updatePerson).delete(deletePerson);

module.exports = router;
