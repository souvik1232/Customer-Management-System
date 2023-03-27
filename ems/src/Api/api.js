export const loginUser = async (variables) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(variables),
  };
  let loginRes = await fetch("http://localhost:4000/user", requestOptions)
    .then((res) => res.json())
    .then((data) => {
      return data.user;
    });
  return {
    data: loginRes,
  };
};

export const addEmployee = async (variables) => {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(variables),
  };
  let loginRes = await fetch(
    "http://localhost:4000/user/add_employee",
    requestOptions
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      return data;
    });
  return {
    data: loginRes,
  };
};

export const updateEmployee = async (variables, id) => {
  const requestOptions = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(variables),
  };
  let loginRes = await fetch(
    `http://localhost:4000/user/update_employee/${id}`,
    requestOptions
  )
    .then((res) => res.json())
    .then((data) => {
      return data.user;
    });
  return {
    data: loginRes,
  };
};

export const getEmployees = async (variables) => {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  };
  let employees = await fetch(
    "http://localhost:4000/user/get_employeelist",
    requestOptions
  ).then((res) => {
    return res.json();
  });

  return {
    data: employees,
  };
};

export const deleteEmployee = async (id) => {
  const requestOptions = {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
  };
  let deleteRes = await fetch(
    `http://localhost:4000/user/delete_employee/${id}`,
    requestOptions
  )
    .then((res) => res.json())
    .then((data) => {
      return data.user;
    });
  return {
    data: deleteRes,
  };
};
