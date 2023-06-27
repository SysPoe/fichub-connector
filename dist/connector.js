"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connector = void 0;
const InvalidEndpointError_1 = require("./InvalidEndpointError");
class Connector {
    constructor(endpoint = new URL("https://fichub.net/api/v0/")) {
        this.endpoint = new URL(endpoint);
        if (!this.test()) {
            throw new InvalidEndpointError_1.InvalidEndpointError(`Unable to access endpoint ${this.endpoint}`);
        }
    }
    test(testPath = "./meta", expectedResponse = JSON.stringify({
        "err": -1,
        "msg": "no query",
        "q": ""
    })) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = new URL(testPath, this.endpoint);
            try {
                let response = yield fetch(url);
                let text = yield response.text();
                return text.trim() === expectedResponse;
            }
            catch (error) {
                return false;
            }
        });
    }
}
exports.Connector = Connector;
