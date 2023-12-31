// Importa express y protect desde tus archivos
import express from 'express';
import { protect } from '../middleware/authMiddleware';

const router = express.Router();

import {
  getUsers,
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
} from '../controllers/userController';

router.route('/').get(getUsers).post(registerUser);
router.route('/auth').post(authUser);
router.route('/logout').post(logoutUser);
router.route('/profile').get(protect, getUserProfile).put(protect, updateUserProfile);

export default router;
