import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import createToken from '../utils/createToken.js';

export const signUp_post = async (req, res) => {
  const { username, email, password } = req.body;
  const user = await User.findOne({email:email});
  if (user) {
    res.status(401).json({
      success: false,
      msg: 'Такой email уже занят',
    });
  } else {
    const salt = bcrypt.genSaltSync(10);
    const user = new User({
      username,
      email,
      password: bcrypt.hashSync(password, salt),
    });
    await user.save();
    const token = createToken(user._id);
    res.status(201).json({ user: user, token, success: true });
  }
};
