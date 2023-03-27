class employee {
  contructor(
    empid,
    emp_first_name,
    emp_last_name,
    emp_email,
    emp_phone,
    emp_password
  ) {
    this.empid = empid;
    this.emp_first_name = emp_first_name;
    this.emp_last_name = emp_last_name;
    this.emp_email = emp_email;
    this.emp_phone = emp_phone;
    this.emp_password = emp_password;
  }
}
module.exports = employee;
