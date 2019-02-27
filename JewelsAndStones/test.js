
const assert = require('assert');
const numJewels = require('./jewelsAndStones');

describe('Jewels And Stones', function() {
  describe('#numJewelsInStones()', function() {
    it('should return 3 when given aA jewels and aAAbbbb stones', function() {
      assert.equal(numJewels('aA', 'aAAbbbb'), 3);
    });
    it('should return 0 when given z jewels and ZZ stones', function() {
        assert.equal(numJewels('z', 'ZZ'), 0);
    });
    it('should be case sensitive', function() {
        assert.equal(numJewels('A', 'aAa'), 1);
    });
    it('should work with larger sets', function() {
        assert.equal(numJewels('AbCDeFgH', 'abcdefgh'), 3);
    });
  });
});
