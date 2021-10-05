// @ts-check
/// <reference types="cypress" />

// https://github.com/ericclemmons/unique-selector
const unique = require('unique-selector').default

if (typeof unique !== 'function') {
  console.error('unique is', unique)
  throw new Error('unique-selector is not a function')
}

const jUnique = ($el) => unique($el[0])

module.exports = { jUnique }
