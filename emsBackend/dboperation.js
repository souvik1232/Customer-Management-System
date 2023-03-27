const sql = require("mssql");
var config = require("./dbconfig");

const getEmployees = async () => {
  try {
    let pool = await sql.connect(config);
    let employees = await pool.request().query("SELECT * from employee_list");
    return employees.recordsets;
  } catch (error) {
    console.log(error);
  }
};

const addEmployee = async (employee) => {
  try {
    let pool = await sql.connect(config);
    let insertEmployee = await pool
      .request()
      .query(
        "INSERT into employee_list (empid,emp_first_name,emp_last_name,emp_email,emp_phone,emp_password) VALUES('" +
          employee.id +
          "','" +
          employee.firstname +
          "','" +
          employee.lastname +
          "','" +
          employee.email +
          "','" +
          employee.phone +
          "','" +
          employee.password +
          "')"
      );
    return insertEmployee.recordsets;
  } catch (err) {
    console.log(err);
  }
};

const deleteEmployee = async (id) => {
  try {
    let pool = await sql.connect(config);
    let employees = await pool
      .request()
      .query("DELETE FROM employee_list WHERE emp_phone=" + id);
    return employees.recordsets;
  } catch (error) {
    console.log(error);
  }
};

const updateEmployee = async (employee, id) => {
  console.log(employee, id);

  console.log(typeof id);
  var query =
    "UPDATE employee_list SET empid=" +
    parseInt(employee.id) +
    ",emp_first_name='" +
    employee.firstname +
    "',emp_last_name='" +
    employee.lastname +
    "',emp_email='" +
    employee.email +
    "',emp_phone='" +
    employee.phone +
    "',emp_password='" +
    employee.password +
    "' WHERE empid=" +
    id;
  console.log(query);
  try {
    let pool = await sql.connect(config);
    let updateEmployee = await pool.request().query(query);
    return updateEmployee.recordsets;
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  getEmployees: getEmployees,
  addEmployee: addEmployee,
  deleteEmployee: deleteEmployee,
  updateEmployee: updateEmployee,
};
