// Copyright 2014 Simon Lydell

var url    = require("url")
var expect = require("chai").expect

var resolveUrl = require("../")

function testResolve() {
  var expected = window.location.toString()
  for (var index = 0, length = arguments.length; index < length; index++) {
    expected = url.resolve(expected, arguments[index])
  }
  expect(resolveUrl.apply(null, arguments))
    .to.equal(expected)
}

"use strict"

describe("resolveUrl", function() {

  it("is a function", function() {
    expect(resolveUrl)
      .to.be.a("function")
  })


  it("resolves like Node.js’ `url.resolve` would in series", function() {
    testResolve()

    testResolve("remove")

    testResolve("/static/scripts/app.js")

    testResolve("/static/scripts/app.js", "../source-maps/app.js.map")

    testResolve("/static/scripts/app.js", "../source-maps/app.js.map", "../coffee/app.coffee")

    testResolve("//cdn.example.com/jquery.js")
  })

})
