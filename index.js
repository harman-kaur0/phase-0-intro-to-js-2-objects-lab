// Write your solution in this file!
const employee = {
  name: "jack",
  streetAddress: "123 jackson st",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newEmp = { ...employee };
  newEmp[key] = value;
  return newEmp;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

function deleteFromEmployeeByKey(employee, key) {
  const obj = { ...employee };
  delete obj[key];
  return obj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
