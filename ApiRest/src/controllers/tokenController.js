import { compareSync } from 'bcryptjs';
import User from '../models/User';

class TokenController {
  async create(req, res) {
    const { email, password } = req.body;

    if (!email || !password) return res.status(401).json({ errors: 'Invalid Credentials' });
    const user = await User.findOne({ where: { email } });

    if (!user) return res.status(401).json({ errors: 'Invalid User' });

    const validUser = compareSync(password, user.password_hash);
    if (!validUser) return res.status(401).json({ errors: 'Invalid Credentials' });
    return res.json('OK');
  }
}

export default new TokenController();
