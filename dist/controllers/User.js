"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const db_config_1 = tslib_1.__importDefault(require("../db-config"));
exports.getUsers = (req, res, next) => {
    db_config_1.default.query('SELECT * FROM USERS', (err, result) => {
        if (err) {
            console.log(err);
            res.sendStatus(500);
            return;
        }
        console.log(result);
        res.status(200).json(result);
    });
};
