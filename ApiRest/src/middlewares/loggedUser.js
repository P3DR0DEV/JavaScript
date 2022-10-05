import dotenv from 'dotenv';
import { verify } from 'jsonwebtoken';
import User from '../models/User';

dotenv.config();

export default async (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization) return res.status(401).json({ errors: ['Required login'] });

  const [texto, token] = authorization.split(' ');

  try {
    if (texto !== 'Bearer') return res.status(403).json({ errors: ['Invalid type token.'] });

    const payload = verify(token, process.env.JWT_SECRET);

    const { id, email } = payload;
    const user = await User.findOne({
      where: {
        id,
        email,
      },
    });

    if (!user) {
      return res.status(401).json({
        errors: ['Invalid User.'],
      });
    }

    req.userId = id;
    req.userEmail = email;

    return next();
  } catch (e) {
    return res.status(401).json({
      errors: ['Token invalido ou expirado'],
    });
  }
};
