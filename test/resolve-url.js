// Copyright 2014 Simon Lydell
// X11 (“MIT”) Licensed. (See LICENSE.)

var test = require("tape")

var resolveUrl = require("../")

"use strict"

test("resolveUrl", function(t) {

  t.plan(8)

  t.equal(typeof resolveUrl, "function", "is a function")

  t["throws"](resolveUrl, /at least one argument/, "throws with no arguments")

  t.equal(
    resolveUrl("https://example.com/"),
    "https://example.com/"
  )

  var loc = "https://example.com/articles/resolving-urls/edit"

  t.equal(
    resolveUrl(loc, "remove"),
    "https://example.com/articles/resolving-urls/remove"
  )

  t.equal(
    resolveUrl(loc, "/static/scripts/app.js"),
    "https://example.com/static/scripts/app.js"
  )

  t.equal(
    resolveUrl(loc, "/static/scripts/app.js", "../source-maps/app.js.map"),
    "https://example.com/static/source-maps/app.js.map"
  )

  t.equal(
    resolveUrl(loc, "/static/scripts/app.js", "../source-maps/app.js.map", "../coffee/app.coffee"),
    "https://example.com/static/coffee/app.coffee"
  )

  t.equal(
    resolveUrl(loc, "//cdn.example.com/jquery.js"),
    "https://cdn.example.com/jquery.js"
  )

})
