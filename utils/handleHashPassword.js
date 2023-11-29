const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

const hashPassword = async (password) => {
  const passwordHash = await bcrypt.hash(password, salt);
  return passwordHash;
};

const comparePassword = async (password, hashPass) => {
  const isMatch = await bcrypt.compare(password, hashPass);
  return isMatch;
};

module.exports = { hashPassword, comparePassword };
