import express from 'express'
import { checkAuth, login, logout, register } from '../controllers/auth.controller.js';

// Routes
const router = express.Router();


// Register route
router.post('/register',register)

// Login route
router.post('/login',login)

// Logout route
router.post('/logout',logout)

// check is user authenticeated
router.get('/check-auth',checkAuth)

export default router