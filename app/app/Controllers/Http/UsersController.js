"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(global[Symbol.for('ioc.use')]("App/Models/User"));
class UsersController {
    async index({ response }) {
        const users = await User_1.default.all();
        return response.status(200).json(users);
    }
    async store({ request, response }) {
        const user = new User_1.default();
        user.name = request.input('name');
        user.email = request.input('email');
        await user.save();
        return response.status(201).json(user);
    }
}
exports.default = UsersController;
//# sourceMappingURL=UsersController.js.map