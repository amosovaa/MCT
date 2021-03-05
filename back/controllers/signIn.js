import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import createToken from '../utils/createToken.js';

export const signIn_post = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({email:email});
  if (user) {
    const passwordRes = bcrypt.compareSync(password, user.password);
    if (passwordRes) {
      const token = createToken(user._id);
      res.status(200).json({ user: user, token, success: true });
    } else {
      res.status(401).json({
        success: false,
        msg: 'Пароли не совпали',
      });
    }
  } else {
    res.status(404).json({
      success: false,
      msg: 'Пользователь не найден',
    });
  }
};

