import express from "express";
import { Router } from 'express'

import *as userController from '../controllers/ControllerUser'

const router = Router();


router.get('/User', userController.allUsers);

router.get('/User/:id', userController.findOneUsers);

router.post('/User', userController.createUser);

router.delete('/User/:id', userController.delUser);

router.put('/User/:id', userController.updateUser);


export default router