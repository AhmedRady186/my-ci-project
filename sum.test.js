const sum = require('./sum');

if (sum(1, 2) !== 3) {
  console.error('❌ Test failed: 1 + 2 should equal 3');
  process.exit(1);
}

console.log('✅ Test passed');