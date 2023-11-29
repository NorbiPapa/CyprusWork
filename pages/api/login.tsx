import { NextApiRequest, NextApiResponse } from 'next';
import { connectToDatabase } from '../../database/db';
import bcrypt  from 'bcrypt';
import jwt from 'jsonwebtoken';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
      const { username, password } = req.body;
      const client = await connectToDatabase();
  
      // Query to find user by username
      const userQuery = 'SELECT * FROM users WHERE username = $1';
      const { rows } = await client.query(userQuery, [username]);
      const user = rows[0];
  
      if (!user) {
        res.status(401).json({ message: 'User not found' });
        return;
      }
  
      // Compare the hashed password
      const passwordIsValid = await bcrypt.compare(password, user.password);
      console.log("Password is valid:", passwordIsValid);
  
      if (!passwordIsValid) {
        console.error('Invalid password attempt for user:', username);
        res.status(401).json({ message: 'Invalid password' });
        return;
      }

      const secret = process.env.JWT_SECRET || 'default_secret_key';

      // Generating token
      const token = jwt.sign(
        { userId: user.id }, // Payload could be the user's ID or other identifier
        secret, // Secret key for signing the token
        { expiresIn: '1h' }   // Token expiration time
      );

      console.log("Generated JWT token:", token);
      console.log('Login successful for user:', username);
      res.status(200).json({ token, message: 'Login successful' });
    } else {
      // Handle non-POST requests
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }