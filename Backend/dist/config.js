"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = void 0;
// config file for the server port
const env_var_1 = __importDefault(require("env-var"));
exports.PORT = env_var_1.default.get("SERVER_PORT").default(8000).asPortNumber();
