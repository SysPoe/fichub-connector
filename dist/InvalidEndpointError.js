"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvalidEndpointError = void 0;
class InvalidEndpointError extends Error {
    constructor(message) {
        super(message || "");
        this.name = this.constructor.name;
        throw this;
    }
}
exports.InvalidEndpointError = InvalidEndpointError;
