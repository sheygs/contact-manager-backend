"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRequest = exports.requestValidatorHandler = void 0;
const error_1 = require("../error");
const requestValidatorHandler = (schema, input) => {
    const { error } = schema.validate(input);
    if (error) {
        throw new error_1.UnprocessableEntityException(error.details[0].message);
    }
};
exports.requestValidatorHandler = requestValidatorHandler;
function validateRequest(schema, requestPath) {
    return (req, _, next) => {
        const input = req[requestPath];
        (0, exports.requestValidatorHandler)(schema, input);
        next();
    };
}
exports.validateRequest = validateRequest;
//# sourceMappingURL=request-validator.js.map