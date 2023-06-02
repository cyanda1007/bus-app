// Test cases for the bus travel widget using Mocha


describe('Bus Travel Widget', function() {
  describe('calculateCost', function() {
    it('should calculate cost correctly for Khayelitsha and peak travel time', function() {
      const cost = calculateCost('Khayelitsha', 'peak');
      assert.strictEqual(cost, 50);
    });

    it('should calculate cost correctly for Dunoon and off-peak travel time', function() {
      const cost = calculateCost('Dunoon', 'off-peak');
      assert.strictEqual(cost, 25);
    });

    it('should calculate cost correctly for Mitchells Plain and peak travel time', function() {
      const cost = calculateCost('Mitchells Plain', 'peak');
      assert.strictEqual(cost, 37.5);
    });
  });
});
