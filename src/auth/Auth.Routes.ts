import { Router } from 'express';
import {  login  } from './Auth.Controller'
 
const router = Router();

router.route('/auth/login').get(login); 
// router.route('/auth/register').get(getByUId); 
// router.route('/auth/forgot').post(addShortUrl);

export default router;