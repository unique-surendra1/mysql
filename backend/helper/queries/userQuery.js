const registerUserSqlQuery = (
  firstName,
  middleName,
  lastName,
  userName,
  userEmail,
  userPhoneNumber
) => {
  return `INSERT INTO myuser ( firstName, middleName,lastName, userName, userEmail,userPhoneNumber) VALUES('${firstName}','${middleName}','${lastName}', '${userName}', '${userEmail}','${userPhoneNumber}');`;
};

const loginUser = (userName, userEmail) => {
  return `SELECT userName, userEmail FROM myuser WHERE userName='${userName}' && userEmail='${userEmail}';`;
};

const getAllusersSqlQuery = () => {
  return `SELECT * FROM  myuser;`;
};

const getuserSqlQuery = (id) => {
  return `SELECT * FROM myuser  WHERE id = ${id};`;
};

const updateUserSqlQuery = (userName, userEmail, userPhoneNumber, id) => {
  return `UPDATE myuser SET userName= '${userName}', userEmail='${userEmail}',userPhoneNumber= '${userPhoneNumber}' WHERE id=${id};`;
};

const deleteAllUserSqlQuery = () => {
  return `DELETE FROM myuser  WHERE id>0;`;
};

const deleteUserSqlQuery = (id) => {
  return `DELETE FROM myuser  WHERE id = ${id};`;
};

export const queries = {
  registerUserSqlQuery,
  loginUser,
  getuserSqlQuery,
  getAllusersSqlQuery,
  updateUserSqlQuery,
  deleteUserSqlQuery,
  deleteAllUserSqlQuery,
};
