"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("../src/app");
const server_1 = require("../src/server");
const supertest_1 = __importDefault(require("supertest"));
const app = (0, server_1.startServer)((0, app_1.createApp)());
describe('App Health', () => {
    test('should display "okay ✅"', async () => {
        const response = await (0, supertest_1.default)(app).get('/').expect(200);
        expect(response.body.code).toEqual(200);
        expect(response.body.status).toBe('success');
        expect(response.body.message).toEqual('okay ✅');
    });
    test('should return "Not Found" for invalid routes', async () => {
        const response = await (0, supertest_1.default)(app).get('/me').expect(404);
        expect(response.body.error.code).toEqual(404);
        expect(response.body.error.status).toBe('failure');
        expect(response.body.error.message).toEqual('Not Found');
    });
});
afterAll(() => {
    app.close();
});
//# sourceMappingURL=app.test.js.map