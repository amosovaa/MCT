import jwt from 'jsonwebtoken';

// Функция для создания токена
const createToken = (id) => {
  return jwt.sign({ id }, 'myProject', {
    expiresIn: 3 * 24 * 60 * 60,
  });
};

export default createToken;
