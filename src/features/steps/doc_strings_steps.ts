import {Given} from "@cucumber/cucumber"
import { expect } from "chai";
import { table } from "console";
Given('A doc string is provided', function (type, string_from_feature) {
    console.log(type);
    console.log(string_from_feature)

});