"use strict";
/// <reference path="../node_modules/package-one/TestFile.d.ts" />
Object.defineProperty(exports, "__esModule", { value: true });
exports.doSomething = void 0;
function doSomething(args) {
    return window.custom.getSomething();
}
exports.doSomething = doSomething;
