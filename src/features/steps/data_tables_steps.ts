import {Given} from "@cucumber/cucumber"
import { expect } from "chai";
import { table } from "console";
Given('table without headers', function (table_from_feature) {
    console.table(table_from_feature.raw())

});

Given('table with headers', function (table_from_feature) {
    console.log("+++ Hash from the Table +++")
    console.table(table_from_feature.hashes())
    console.log(table_from_feature.hashes())
    console.log("+++ Rows from the Table +++")
    console.table(table_from_feature.rows())
    console.log(table_from_feature.rows())
    console.log("+++ Rows Hash from the Table +++")
    console.table(table_from_feature.rowsHash())
    console.log(table_from_feature.rowsHash())


});
