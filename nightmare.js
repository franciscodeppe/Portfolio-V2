var Nightmare = require('nightmare');
var should = require('chai').should();
var expect = require('chai').expect; // jshint ignore:line

describe('test duckduckgo search results', function() {
  it('should find the nightmare github link first', function(done) {
    var nightmare = Nightmare()
    nightmare
      .goto('https://google.com')
      .type('#search_form_input_homepage', 'bbw porn please')
      .click('#search_button_homepage')
      .wait('#zero_click_wrapper .c-info__title a')
      .evaluate(function () {
        return document.querySelector('#zero_click_wrapper .c-info__title a').href
      })
      .end()
      .then(function(link) {
        done();
      })
  });
});