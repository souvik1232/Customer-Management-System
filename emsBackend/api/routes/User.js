const express = require("express");
const router = express.Router();
var dboperations = require("../../dboperation");
var Employee = require("../../employeelist");
const { v4: uuidv4 } = require("uuid");
const token = uuidv4();

router.post("/", (req, res, next) => {
  const userInfo = {
    userName: req.body.userName,
    status: "Logged In",
  };
  res.status(200).json({
    message: "Login SuccessFul",
    token: token,
    user: userInfo,
  });
});

router.get("/get_employeelist", (req, res, next) => {
  dboperations.getEmployees().then((result) => {
    res.json(result[0]);
  });
});

router.post("/add_employee", (req, res, next) => {
  let employee = { ...req.body };
  dboperations.addEmployee(employee).then((result) => {
    res.status(201).json({
      result: result,
      message: "successful",
    });
  });
});

router.put("/update_employee/:id", (req, res, next) => {
  let employee = { ...req.body };
  let id = req.params.id;
  dboperations.updateEmployee(employee, id).then((result) => {
    res.status(201).json({
      result: result,
      message: "successful",
    });
  });
});

router.delete("/delete_employee/:id", (req, res, next) => {
  let id = req.params.id;
  dboperations.deleteEmployee(id).then((result) => {
    res.status(200).json({
      message: "successful",
      result: result,
    });
  });
});
module.exports = router;
