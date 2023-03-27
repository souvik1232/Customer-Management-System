const sql = require("mssql");

const config = {
  server: "MSI\\SQLEXPRESS",
  user: "sa",
  password: "12345678",
  database: "EmployeeManagement",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
    trustServerCertificate: true
  },
};
module.exports = config

// sql.connect(config, function (err) {
//   if (err) console.log(err);
//   let request = new sql.Request();
//   request.query("SELECT * from employee_list", function (err, records) {
//     if (err) console.log(err);
//     else console.log(records);
//   });
// });
