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
const test_1 = require("@playwright/test");
(0, test_1.test)('has title', (_a) => __awaiter(void 0, [_a], void 0, function* ({ page }) {
    yield page.goto('https://the-internet.herokuapp.com/');
    // Expect a title "to contain" a substring.
    yield (0, test_1.expect)(page).toHaveTitle('The Internet');
}));
(0, test_1.test)('Home Page Has 44 Examples', (_b) => __awaiter(void 0, [_b], void 0, function* ({ page }) {
    yield page.goto('https://the-internet.herokuapp.com/');
    yield (0, test_1.expect)(page.locator('li')).toHaveCount(46);
}));
(0, test_1.test)('Heading and SubheadIng Matches', (_c) => __awaiter(void 0, [_c], void 0, function* ({ page }) {
    yield page.goto('https://the-internet.herokuapp.com/');
    yield page.getByRole('heading', { name: 'Welcome to the-internet' }).click({
        button: 'right'
    });
    yield page.getByRole('heading', { name: 'Welcome to the-internet' }).click({
        button: 'right'
    });
}));
