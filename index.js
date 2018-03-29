"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
exports.readFile = (fileName, opts = {}) => new Promise((resolve, reject) => {
    fs.readFile(fileName, opts, (err, data) => {
        err ? reject(err) : resolve(data);
    });
});
exports.writeFile = (fileName, data, opts = {}) => new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, opts, err => {
        err ? reject(err) : resolve(data);
    });
});
//# sourceMappingURL=index.js.map