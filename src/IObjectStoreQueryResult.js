"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ObjectStoreQueryStatus;
(function (ObjectStoreQueryStatus) {
    ObjectStoreQueryStatus["OK"] = "OK";
    ObjectStoreQueryStatus["ERROR"] = "ERROR";
})(ObjectStoreQueryStatus = exports.ObjectStoreQueryStatus || (exports.ObjectStoreQueryStatus = {}));
class ExampleObjectStoreQueryResult {
    constructor() {
        this.status = ObjectStoreQueryStatus.OK;
        this.items = [];
    }
}
exports.ExampleObjectStoreQueryResult = ExampleObjectStoreQueryResult;
