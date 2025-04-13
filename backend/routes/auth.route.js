import express from 'express'
import { checkAuth, login, logout, register } from '../controllers/auth.controller.js';
import { authMiddleware, adminMiddleware } from '../middlewares/auth.middleware.js';

// Routes
const router = express.Router();


// Register route
router.post('/register',register)

// Login route
router.post('/login',login)

// Logout route
router.post('/logout',logout)

// check is user authenticeated
router.get('/check-auth',authMiddleware,checkAuth)

// Admin only routes
router.get('/admin-only', authMiddleware, adminMiddleware, (req, res) => {
    res.json({ message: "Admin access granted" });
});

export default router;
