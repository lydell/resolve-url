// Copyright 2014 Simon Lydell

var url  = require("url")
var test = require("tape")

var resolveUrl = require("../")

"use strict"

test("resolveUrl", function(t) {

  t.plan(7)

  t.equal(typeof resolveUrl, "function", "is a function")

  // Resolve like Node.js’ `url.resolve` would in series
  function testResolve() {
    var expected = window.location.toString()
    for (var index = 0, length = arguments.length; index < length; index++) {
      expected = url.resolve(expected, arguments[index])
    }
    t.equal(resolveUrl.apply(null, arguments), expected, arguments.length)
  }

  testResolve()

  testResolve("remove")

  testResolve("/static/scripts/app.js")

  testResolve("/static/scripts/app.js", "../source-maps/app.js.map")

  testResolve("/static/scripts/app.js", "../source-maps/app.js.map", "../coffee/app.coffee")

  testResolve("//cdn.example.com/jquery.js")

})
