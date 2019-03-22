"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const IObjectStore_1 = require("./IObjectStore");
describe('IObjectstore', () => {
    it('should be tested', () => __awaiter(this, void 0, void 0, function* () {
        const x = new IObjectStore_1.ExampleObjectStore();
        x.get(null, null);
        x.put(null);
        x.query(null);
        x.remove(null);
        expect(x).toBeDefined();
    }));
});
