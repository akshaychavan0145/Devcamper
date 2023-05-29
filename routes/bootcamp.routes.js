const express = require("express");
const {
  getBootcamps,
  updateBootcamps,
  deleteBootcamps,
  createBootcamps,
  getAllBootcamps,
} = require("../controllers/bootcamp.controller");

const router = express.Router();

router.route("/").get(getAllBootcamps).post(createBootcamps);

router
  .route("/:id")
  .delete(deleteBootcamps)
  .put(updateBootcamps)
  .get(getBootcamps);
module.exports = router;
