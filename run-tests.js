const Mocha = require('mocha')
const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const glob = require('glob')

// Chai
chai.use(chaiAsPromised)
global.expect = chai.expect
chai.should()

// Mocha
let mocha = new Mocha()
mocha.files = glob.sync('./tests/**/*.js')
mocha.run(f => process.exit(f))
