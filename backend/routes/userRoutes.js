import express from "express";

const router = express.Router();

import {getUsers, createUser, getUser, updateUser, deleteUser} from '../controllers/userController.js'

router.route('/').get(getUsers).post(createUser);

router.route('/:id').get(getUser).put(updateUser).delete(deleteUser);

export default router;