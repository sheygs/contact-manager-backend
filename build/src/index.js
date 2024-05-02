"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const server_1 = require("./server");
const interfaces_1 = require("./interfaces");
if (process.env.NODE_ENV !== interfaces_1.ENV.TEST) {
    const app = (0, app_1.createApp)();
    (0, server_1.startServer)(app);
}
//# sourceMappingURL=index.js.map