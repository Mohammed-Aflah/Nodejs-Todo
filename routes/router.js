const router = require("express").Router();
const controller = require("../controller/controll");
router.get("/", controller.todoHome);
router.post("/tasks", controller.addToDb);
router.get("/delete/:id", controller.deleteTask);
router.get("/edit-task/:id", controller.editTask);
router.post("/edit-task/:id", controller.editTaskPost);
module.exports = router;
