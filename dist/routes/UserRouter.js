"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
class UserRouter {
    constructor() {
        this.route = express_1.default.Router();
        //import UserControlle from '../controllers/UserController';
        this.UserControlle = require('../controllers/UserController');
    }
    route() { }
}
exports.UserRouter = UserRouter;
