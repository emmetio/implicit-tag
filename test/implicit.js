'use strict';

const assert = require('assert');
require('babel-register');
const tag = require('../index').default;

describe('Implicit tags', () => {
    it('resolve name', () => {
        assert.equal(tag(), 'div');
        assert.equal(tag('foo'), 'div');
        assert.equal(tag('ul'), 'li');
        assert.equal(tag('p'), 'span');
        assert.equal(tag('b'), 'span');
    });
});
