import dotenv from 'dotenv';
import Jwt from 'jsonwebtoken';
import User from '../models/User';

dotenv.config();
class TokenController {
  async create(req, res) {
    const { email, password } = req.body;

    if (!email || !password) return res.status(401).json({ errors: 'Invalid Credentials' });
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(401).json({ errors: 'Invalid User' });

    if (!(await user.validPassword(password))) return res.status(401).json({ errors: 'Invalid Credentials' });
    const { id } = user;

    const token = Jwt.sign({ id, email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRE,
    });

    return res.json({ token });
  }
}

export default new TokenController();
