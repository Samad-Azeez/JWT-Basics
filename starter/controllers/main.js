import jwt from 'jsonwebtoken';
import { CustomAPIError } from '../errors/custom-error.js';

export const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new CustomAPIError('Please provide email and password', 400);
  }

  //  just for demo, normally provided by the DB
  const id = new Date().getDate();

  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: '3d',
  });

  res.status(200).json({ msg: 'user created', token });
};

export const dashboard = async (req, res) => {
  console.log(req.user);

  const luckyNumber = Math.floor(Math.random() * 100);

  res.status(200).json({
    msg: `Hello, ${req.user.username}`,
    secret: `Here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};
