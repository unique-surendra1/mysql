const registerUserSqlQuery = (userName, userEmail, userPhoneNumber) => {
  return `INSERT INTO myuser ( userName, userEmail,userPhoneNumber) VALUES( '${userName}', '${userEmail}','${userPhoneNumber}');`;
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
  getuserSqlQuery,
  getAllusersSqlQuery,
  updateUserSqlQuery,
  deleteUserSqlQuery,
  deleteAllUserSqlQuery,
};
