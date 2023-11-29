const User = require('../models/User');
const { hashPassword } = require('../utils/handleHashPassword');
const { ConflictError, BadRequestError } = require('../utils/customError');
// -------- Registration -----------

const register = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    //validate
    if (!username || !email || !password)
      return next(BadRequestError('All field are required'));

    //check email taken
    const userFound = await User.findOne({ email });
    if (userFound) return next(ConflictError('User Already Exits'));

    const passwordHash = await hashPassword(password);

    //add new user
    const newUser = new User({
      username,
      email,
      password: passwordHash,
    });

    //add the date the trial will end
    newUser.trialExpires = new Date(
      new Date().getTime() + newUser.trialPeriod * 24 * 60 * 60 * 1000
    );
    await newUser.save();

    res.json({
      status: true,
      message: 'Registration was successful',
      user: { username, email },
    });
  } catch (error) {
    throw new Error(error);
  }
};

// -------- login -----------
// -------- logout -----------
// -------- profile -----------
// -------- check user auth status -----------

module.exports = {
  register,
};
