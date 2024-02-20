import bcryptjs from "bcryptjs";

const registerUserSqlQuery = async (
  firstName,
  middleName,
  lastName,
  userName,
  userEmail,
  hashPassword,
  userPhoneNumber
) => {
  // const salt = await bcryptjs.genSaltSync(10);
  // const hashPassword = await bcryptjs.hashSync(password, salt);

  return `INSERT INTO myuser (firstName, middleName, lastName, userName, userEmail, password, userPhoneNumber) VALUES('${firstName}','${middleName}','${lastName}', '${userName}', '${userEmail}', '${hashPassword}','${userPhoneNumber}');`;
};

const fecthPassword = (userEmail) => {
  return `SELECT password FROM  myuser
WHERE userEmail='${userEmail}';`;
};

const loginUser = (pasword, userEmail) => {
  return `SELECT pasword, userEmail FROM myuser WHERE userName='${pasword}' && userEmail='${userEmail}';`;
};

const getAllusersSqlQuery = () => {
  return `SELECT * FROM  myuser;`;
};

// const getuserSqlQuery = (id) => {
//   return `SELECT * FROM myuser  WHERE id = ${id};`;
// };

const getuserSqlQuery = (id) => {
  return `SELECT * FROM myuser WHERE id = '${id}';`;
};

const getuserByEmailSqlQuery = (userEmail) => {
  return `SELECT * FROM myuser WHERE userEmail = '${userEmail}';`;
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
  fecthPassword,
  getuserSqlQuery,
  getuserByEmailSqlQuery,
  getAllusersSqlQuery,
  updateUserSqlQuery,
  deleteUserSqlQuery,
  deleteAllUserSqlQuery,
};
