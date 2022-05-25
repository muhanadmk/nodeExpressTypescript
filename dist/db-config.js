"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const mysql_1 = tslib_1.__importDefault(require("mysql"));
const db = mysql_1.default.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Muh*19932011',
    database: 'userTest',
    port: '3306'
});
db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('MySql is Connected...!!!!');
});
exports.default = db;
