import express from 'express';
import { login, dashboard } from '../controllers/main.js';
import { authorizationMiddleware } from '../middleware/auth.js';

export const router = express.Router();

router.route('/dashboard').get(authorizationMiddleware, dashboard);
router.route('/login').post(login);
