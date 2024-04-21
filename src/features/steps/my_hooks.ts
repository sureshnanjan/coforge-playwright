import {After,Before} from "@cucumber/cucumber"

      Before(function() {
        console.log("BEFORE:: HOOK every step")
      })
      After(function() {

        console.log("AFTER :: HOOK ")
      })