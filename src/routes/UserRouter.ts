import express, { Request, Response, Router } from 'express';
import UserControlle from '../controllers/UserController';


export class UserRouter {
  constructor() {
  }
  rote(): Router
  const route = express.Router();

//import UserControlle from '../controllers/UserController';
  const UserControlle = require('../controllers/UserController');

  route.route('/').get(UserControlle.findAllUser)

  // export default route;
}
