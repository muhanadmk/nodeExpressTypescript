"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express_1 = tslib_1.__importDefault(require("express"));
const UserRouter_1 = require("./routes/UserRouter");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use('/api/user', UserRouter_1.UserRouter);
exports.default = app;
