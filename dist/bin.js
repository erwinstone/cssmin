#!/usr/bin/env node
var s=require("./main.js");(async()=>{const a=process.argv[2],c=process.argv[3]==="--watch";await(0,s.cssmin)({path:a,watch:c})})();
