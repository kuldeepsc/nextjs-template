const empty = require("./php/empty")
const str_replace = require("./php/str_replace.js")
const strpos = require("./php/strpos.js")
const substr_replace = require("./php/substr_replace.js")
const strlen = require("./php/strlen.js")
const preg_match = require("./php/preg_match.js")
const array_pop = require("./php/array_pop.js")
const explode = require("./php/explode.js")
const implode = require("./php/implode.js")
const count = require("./php/count.js")
const rtrim = require("./php/rtrim.js")
const array_key_exists = require("./php/array_key_exists.js")

module.exports = {
    empty : empty,
    str_replace : str_replace,
    strpos : strpos,
    substr_replace : substr_replace,
    strlen : strlen,
    preg_match : preg_match,
    array_pop : array_pop,
    explode : explode,
    implode : implode,
    count : count,
    rtrim : rtrim,
    array_key_exists : array_key_exists
}