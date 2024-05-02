"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConflictException = exports.InternalServerException = exports.ForbiddenException = exports.UnauthorizedException = exports.UnprocessableEntityException = exports.BadRequestException = exports.NotFoundException = exports.BaseException = void 0;
const lib_1 = require("http-status/lib");
class BaseException extends Error {
    code;
    constructor(message, statusCode = 400) {
        super(message);
        Object.setPrototypeOf(this, new.target.prototype);
        this.code = statusCode;
        Error.captureStackTrace(this);
    }
}
exports.BaseException = BaseException;
class NotFoundException extends BaseException {
    constructor(message) {
        super(message, lib_1.NOT_FOUND);
        this.name = NotFoundException.name;
    }
}
exports.NotFoundException = NotFoundException;
class BadRequestException extends BaseException {
    constructor(message) {
        super(message, lib_1.BAD_REQUEST);
        this.name = BadRequestException.name;
    }
}
exports.BadRequestException = BadRequestException;
class UnprocessableEntityException extends BaseException {
    constructor(message) {
        super(message, lib_1.UNPROCESSABLE_ENTITY);
        this.name = UnprocessableEntityException.name;
    }
}
exports.UnprocessableEntityException = UnprocessableEntityException;
class UnauthorizedException extends BaseException {
    constructor(message) {
        super(message, lib_1.UNAUTHORIZED);
        this.name = UnauthorizedException.name;
    }
}
exports.UnauthorizedException = UnauthorizedException;
class ForbiddenException extends BaseException {
    constructor(message) {
        super(message, lib_1.FORBIDDEN);
        this.name = ForbiddenException.name;
    }
}
exports.ForbiddenException = ForbiddenException;
class InternalServerException extends BaseException {
    constructor(message) {
        super(message, lib_1.INTERNAL_SERVER_ERROR);
        this.name = InternalServerException.name;
    }
}
exports.InternalServerException = InternalServerException;
class ConflictException extends BaseException {
    constructor(message) {
        super(message, lib_1.CONFLICT);
        this.name = ConflictException.name;
    }
}
exports.ConflictException = ConflictException;
//# sourceMappingURL=index.js.map