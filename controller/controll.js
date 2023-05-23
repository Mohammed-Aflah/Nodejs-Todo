const db = require("../model/db");
module.exports = {
  todoHome: async (req, res) => {
    let datas = await db.find();
    res.render("Todo", { datas });
  },
  addToDb: async (req, res) => {
    try {
      console.log(req.body.task, "tsk");
      const insert = new db({
        task: req.body.task,
      });
      await insert
        .save()
        .then((res) => console.log("data Inserted  and res", res));
      res.redirect("/");
    } catch (err) {
      console.log("Error to insert db", err);
    }
  },
  deleteTask: async (req, res) => {
    try {
      const Id = req.params.id;
      let datas = await db.deleteOne({ _id: Id });
      res.redirect("/");
    } catch (err) {
      console.log("Error in Delete Task", err);
    }
  },
  editTask: async (req, res) => {
    try {
      const id = req.params.id;
      const data = await db.findById(id);
      res.render("edit-task", { data });
    } catch (err) {
      console.log("Error in Edit get", err);
    }
  },
  editTaskPost: async (req, res) => {
    try {
      let id = req.params.id;
      updatePost = await db.updateOne(
        { _id: id },
        { $set: { task: req.body.task } }
      );
      res.redirect("/");
    } catch (err) {
      console.log("Error Occured on Update Task", err);
    }
  },
};
